import React from 'react'
import Pages from './pages/Pages';
import Category from './components/Category';
import {BrowserRouter,Link} from 'react-router-dom'
import Search from './components/Search';
import styled from 'styled-components'
import {GiCampCookingPot} from 'react-icons/gi'


function App() {
  return (
  <div>
    <BrowserRouter>
    <Nav>
      <GiCampCookingPot />
      <Logo to={'/'}>Chen's Recipes Website</Logo>
    </Nav>
      <Search />
      <Category />
      <Pages />
    </BrowserRouter>
  </div>
  );
}
const Logo = styled(Link)`
text-decoration:none;
font-size:2.5rem;
font-weight:400;
margin-left:1rem;
color:#004d61;

`
const Nav = styled.div`
padding:4rem 0rem;
display:flex;
justify-content:flex-start;
align-items:center;
svg{
  font-size:4rem;
  color:#ca3e47;
}
`
export default App;
