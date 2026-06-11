import React from 'react';
import Header from './Header';
import Domain from './Domain';
import AboutBook from './AboutBook';
import AboutAuthor from './AboutAuthor';
import Footer from './Footer';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Yahan aap apna layout adjust kar sakte hain */}
      <Header />
      <Domain />
      <AboutBook />
      <AboutAuthor />
      <Footer />
    </div>
  );
};

export default Dashboard;