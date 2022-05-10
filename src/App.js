import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './components/navigation/navigation.component';
import UserLogon from './components/authentication/authentication.component';
import HomePage from './components/home/home-page.component';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<HomePage />}/>
          <Route path='logon' element={<UserLogon />} />
        </Route>        
      </Routes>
  )
}

export default App;
