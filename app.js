import React, { useState } from 'react';

import Header from './app/Header';
import Content from './app/Content';
import Footer from './app/Footer';


const App = () => {
  const [activePage, setActivePage] = useState('HomePage');

  return (
    <div className="main">
      <div className="container">
        <Header activePage={activePage} setActivePage={setActivePage} />
        <Content activePage={activePage} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
