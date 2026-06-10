import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Domain from './components/Domain';
import AboutBook from './components/AboutBook';
import AboutAuthor from './components/AboutAuthor';
import StrengthDetail from './components/StrengthDetail';


function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        {/* Home Page: Yahan sab kuch dikhega */}
        <Route path="/" element={
          <>
            <Header />
            <Domain />
            <AboutBook />
            <AboutAuthor />
            <Footer />
          </>
        } />

        {/* Detail Page: Yahan sirf StrengthDetail dikhega */}
        <Route path="/strength/:name" element={<StrengthDetail />} />
      </Routes>
    </div>
  );
}

export default App;