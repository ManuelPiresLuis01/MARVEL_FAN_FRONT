import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './assets/pages/auth/login';
import Registration from './assets/pages/auth/registration';
import Home from './assets/pages/main/home/home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/auth">
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />
          </Route>

           <Route path="/v1">
            <Route path="home" element={<Home />} />
          </Route>


          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
