import React from 'react';

export default function Navbar(){
  return (
    <div class="App-navbar">
      <div class='App-navbar-button'>About</div> 
      <div class='App-navbar-button'>Music</div> 
      <div class='App-navbar-button'>Dates</div> 
    </div>
  );
}


function select_content(){
  console.log('click');
}