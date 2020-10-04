import React from 'react';

//Globals
import NavBar from './components/global/navbar'
import Header from './components/global/header'
import Profile from './components/profile'
import Footer from './components/global/footer'
function App() {

  return (
    <div className="App">
      <NavBar />
      <br />
      <Header />
      <br />
      <Profile />
      <br />
      <Footer />
    </div>
  );
}

export default App;
