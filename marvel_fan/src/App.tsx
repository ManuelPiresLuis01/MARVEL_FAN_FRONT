import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Login from './pages/auth/login';
import Registration from './pages/auth/registration';
import Home from './pages/main/home/home';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Navigate to="/v1/home" replace />} />
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
