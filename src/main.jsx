import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Nav from "./components/navbar"
import CardOpened from "./components/cardOpened"
import Characters from "./pages/characters"

import * as data from "../datas.json"

const array = data.characters;



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Nav />} >
        <Route path='/' element={<Home />} />
        <Route path='/characters' element={<Characters />} />
        
        {
          array.map( (characters) => {
            let id = "/characters/" + characters.id;
            return <Route key={characters.id} path={id} element={<CardOpened name={characters.name} image=  {characters.image} codeName={characters.codename} powers={characters.power} played_by={characters.played_by}/>} />
          })
        }
      </Route>
    </Routes>
  </BrowserRouter>
)
