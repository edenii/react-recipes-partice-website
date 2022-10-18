import React from 'react'
import Home from '../pages/Home'
import Cuisine from '../pages/Cuisine'
import Searched from '../pages/Searched'
import Recipe from './Recipe'
import {Route,Routes} from 'react-router-dom'

function Pages() {
  return (
    
    
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/cuisine/:type' element={<Cuisine />} />
        <Route path='/searched/:search' element={<Searched />} />
        <Route path='/recipe/:name' element={<Recipe />} />
    </Routes>
    
  )
}

export default Pages