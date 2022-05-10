import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './test/components/navigation/navigation.component';
import UserLogon from './test/components/authentication/authentication.component';
import HomePage from './test/home-page';

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
