import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from "react-router-dom"
import { useNavigate} from 'react-router-dom'

const EditGame =(props)=> {
  const {id} = useParams();
  const [GameName, setGameName] = useState("")
  const [Description, setDescription] = useState("")
  const [ReleaseDate, setReleaseDate] = useState("")
  const [Fun, setFun] = useState("")
  const [CostAmount, setCostAmount] = useState("")
  const [GameLocation, setGameLocation] = useState("")
  const [OwnGame, setOwnGame] = useState("")
  const [Rating, setRating] = useState("")
  const [errors, setErrors] = useState({})
  const navigate = useNavigate();

  useEffect( () => {
    axios.get(`http://localhost:8000/api/game/info/${id}`)
    .then(res => {
      setGameName(res.data.GameName)
      setDescription(res.data.Description)
      setReleaseDate(res.data.ReleaseDate)
      setFun(res.data.Fun)
      setCostAmount(res.data.setCostAmount)
      setGameLocation(res.data.GameLocation)
      setOwnGame(res.data.OwnGame)
      setRating(res.data.Rating)
    })
    .catch(err => console.log(err))
  }, [id])




  const updateGame = (e) => {
    e.preventDefault();

    const errors ={};
    if (!GameName) {
      errors.GameName = 'Have to have a Game Name'
    }
    axios.put(`http://localhost:8000/api/game/edit/${id}`, {
      GameName,Description,ReleaseDate,Fun,CostAmount,GameLocation,OwnGame,Rating
    })
    .then(res => {
      console.log(res);
      navigate('/')
    })
    .catch(err => {
      console.error("error:", err);
      navigate('/')
    })
  }





  return(
    <div>
      <form onSubmit={updateGame}>
        {errors.GameName ? errors.GameName.message : null}
        {errors.Description ? errors.Description.message : null}
        {errors.ReleaseDate ? errors.ReleaseDate.message : null}
        {errors.Fun ? errors.Fun.message : null}
        {errors.CostAmount ? errors.CostAmount.message : null}
        {errors.GameLocation ? errors.GameLocation.message : null}
        {errors.OwnGame ? errors.OwnGame.message : null}
        {errors.Rating ? errors.Rating.message : null}
        <input
        type='text'
        name='GameName'
        placeholder='Game name goes here'
        value={GameName}
        onChange={(e)=>setGameName(e.target.value)}
        />
        <input
        type='text'
        name='Description'
        placeholder='Description goes here'
        value={Description}
        onChange={(e)=>setDescription(e.target.value)}
        />
        <input
        type='number'
        name='ReleaseDate'
        placeholder='Date goes here'
        value={ReleaseDate}
        onChange={(e)=>setReleaseDate(e.target.value)}
        />
        <input
        type='text'
        name='Fun'
        placeholder='How fun is it goes here'
        value={Fun}
        onChange={(e)=>setFun(e.target.value)}
        />
        <input
        type='number'
        name='CostAmount'
        placeholder='Cost goes here'
        value={CostAmount}
        onChange={(e)=>setCostAmount(e.target.value)}
        />
        <input
        type='text'
        name='GameLocation'
        placeholder='Where can you get the game'
        value={GameLocation}
        onChange={(e)=>setGameLocation(e.target.value)}
        />
        <input
        type='text'
        name='OwnGame'
        placeholder='do you own the game'
        value={OwnGame}
        onChange={(e)=>setOwnGame(e.target.value)}
        />
        <input
        type='text'
        name='Rating'
        placeholder='Game rating goes here'
        value={Rating}
        onChange={(e)=>setRating(e.target.value)}
        />
        <input type="submit" value="Edit Game"/>
      </form>
    </div>
  )
}


export default EditGame