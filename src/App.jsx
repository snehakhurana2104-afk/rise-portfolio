import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import AuthPage from './components/AuthPage';
import Dashboard from './components/Dashboard'; 
import StrengthDetail from './components/StrengthDetail';

function App() {
  const isAuth = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <div className='App'>
      {/* Navbar sirf tab dikhega jab user login hai */}
      {isAuth && <Navbar />} 
      
      <Routes>
        {/* Auth Page: Agar login nahi hai, toh ye dikhega */}
        <Route path="/" element={isAuth ? <Navigate to="/dashboard" /> : <AuthPage />} />
        
        {/* Dashboard Route: Dashboard.jsx file ke andar saare components hain */}
        <Route path="/dashboard" element={isAuth ? <Dashboard /> : <Navigate to="/" />} />

        {/* Strength Detail Page */}
        <Route path="/strength/:name" element={isAuth ? <StrengthDetail /> : <Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;