import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import Navigation from './components/navigation/navigation.component';
import UserLogon from './components/authentication/authentication.component';
import HomePage from './components/home/home-page.component';
import UserWall from './components/wall/wall.component';
import UserProfile from './components/user-profile/user-profile.component';
import { useState, useContext } from 'react';
//import logo from '../public/assets/Website-Background.jpg'
import { UserContext } from './contexts/user.context';

const App = () => {
  const {token} = useContext(UserContext);
  console.log(token);

  if(token){
    return <UserLogon />
  }

  return (
      <Routes>
        <Route path='/' element={<HomePage />}/>
          <Route path='wall' element={<UserWall />} />
          <Route path='logon' element={<UserLogon />} />
          <Route path='profile' element={<UserProfile />} />        
      </Routes>
  )
}

export default App;
