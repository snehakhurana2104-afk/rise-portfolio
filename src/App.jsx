import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Domain from './components/Domain';
import AboutBook from './components/AboutBook';
import AboutAuthor from './components/AboutAuthor';
import Login from './components/Login';
import Signup from './components/Signup';
import AuthPage from './components/AuthPage';
import StrengthDetail from './components/StrengthDetail';

function App() {
  return (
      <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={
          <>
           
            <Header />
            <Domain />
            <AboutBook />
            <AboutAuthor />
            <Footer />
          </>
        } />
        
        {/* Signup delete ho gaya, ab sirf Login aur AuthPage hain */}
        
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/strength/:name" element={
          <>
         
          <StrengthDetail />
          </>
          } />
      </Routes>
   </>
  );
}
export default App;