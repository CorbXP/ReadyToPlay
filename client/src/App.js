import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import React, {useEffect, useState} from 'react';
import AllGame from "./components/AllGames";
import CreateGame from "./components/CreateGame";
import EditGame from "./components/EditGame";
import ViewGame from "./components/ViewGame";

function App() {
  const [allGame, setAllGame] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllGame allGame={allGame} setAllGame={setAllGame}/>}/>
          <Route path="/game/create" element={<CreateGame allGame={allGame} setAllGame={setAllGame}/>}/>
          <Route path="/game/:id" element={<ViewGame/>}/>
          <Route path="/game/edit/:id" element={<EditGame/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;