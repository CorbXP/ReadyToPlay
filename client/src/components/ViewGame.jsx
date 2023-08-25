import React, {useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'

const ViewGame = (props) => {
  const {id} = useParams();
  const [ViewGame, setViewGame] = useState ({});


  useEffect(()=> {
    axios.get(`http://localhost:8000/api/game/info/${id}`)
    .then((res) =>{
      console.log(res);
      console.log(res.data);
      setViewGame(res.data)
    })
    .catch((err)=> console.log(err))
  },[props._id])





  return (
    <div>
      <h1>{ViewGame.GameName}</h1>
      <div>
        <p>Description:{ViewGame.Description}</p>
        <p>Release Date:{ViewGame.ReleaseDate}</p>
        <p>Is the Game fun:{ViewGame.Fun}</p>
        <p>Cost of game:{ViewGame.CostAmount}</p>
        <p>Where can I get the game:{ViewGame.GameLocation}</p>
        <p>Do I own the game already:{ViewGame.OwnGame}</p>
        <p>Rating out of 10:{ViewGame.Rating}</p>
      </div>
      <Link to ={"/"}>Home</Link>
    </div>
  )
  
}

export default ViewGame