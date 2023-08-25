import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const AllGame = ({allGame, setAllGame}) => {


    
    useEffect(() => {
        axios.get("http://localhost:8000/api/game")
        .then((response) => {
            console.log(response.data);
            setAllGame(response.data)
        })
        .catch((err) => {
            console.log(err.response);
        })
    }, []
    )


    const handleDeleteGame = (id) => {
        axios
            .delete(`http://localhost:8000/api/game/delete/${id}`)
            .then((response) => {
            console.log("success deleting store");
            console.log(response);
            const filteredGame = allGame.filter((game) => {
                return game._id !== id;
            });
            setAllGame(filteredGame);
            })
            .catch((err) => {
            console.log("error deleting stores", err.response);
            });
        };
    

    return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Game Name</th>
                    <th>Release Date</th>
                    <th>Price</th>
                    <th>Own Game</th>
                </tr>
            </thead>
            <tbody>
                {
                allGame.map((game)=> 
                <tr key={game._id}>
                    <td>{game.GameName}</td>
                    <td>{game.ReleaseDate}</td>
                    <td>{game.CostAmount}</td>
                    <td>{game.OwnGame}</td>
                    <td>
                    <Link to={`/game/${game._id}`}><button>View</button></Link>
                    <Link to={`/game/edit/${game._id}`}><button>Edit</button></Link>
                    <button onClick={() => handleDeleteGame(game._id)}>Delete</button>
                    </td>

                </tr>)
                }

            </tbody>
        </table>
        <button><Link to ="/game/create">Add a game</Link></button>
    </div>
    ) 
}


export default AllGame