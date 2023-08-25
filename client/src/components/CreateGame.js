import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'

const CreateGame =({allGame, setAllGame})=> {
  const navigate = useNavigate();
  const [GameName, setGameName] = useState("")
  const [Description, setDescription] = useState("")
  const [ReleaseDate, setReleaseDate] = useState("")
  const [Fun, setFun] = useState("")
  const [CostAmount, setCostAmount] = useState("")
  const [GameLocation, setGameLocation] = useState("")
  const [OwnGame, setOwnGame] = useState("")
  const [Rating, setRating] = useState("")
  const [errors, setErrors] = useState({})




  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/game/create', {GameName, Description, ReleaseDate, Fun, CostAmount, GameLocation, OwnGame, Rating
  })
  .then(response => {
    console.log("responded:", response.data);
    setAllGame([...allGame, response.data]);
    navigate('/')
  })
  .catch(err => {
    console.log(err);
    setErrors(err.response.data.err.errors)
    //const errorResponse = err.response.data.errors;
   // const errorArr = []
    //for(const key of Object.keys(errorResponse)){
    //  errorArr.push(errorResponse[key].message)
    //}
    
  //}
  });
  }


  return(
    <div>
      <form onSubmit={handleSubmit}>
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
        type='number'
        name='Rating'
        placeholder='Game rating goes here'
        value={Rating}
        onChange={(e)=>setRating(e.target.value)}
        />
        <input type="submit" value="Add Game"/>
      </form>
    </div>
  )
}


export default CreateGame