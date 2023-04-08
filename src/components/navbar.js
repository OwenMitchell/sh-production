import React from 'react';

export default function Navbar(){
  return (
    <div class="App-navbar">
      <button class='App-navbar-button' onclick="select_content()">Dates</button>
      <div class='App-navbar-button'>Music</div> 
      <div class='App-navbar-button'>Merch</div> 
      <div class='App-navbar-button'>About</div> 
      <div class='App-navbar-button'>Contact</div> 
    </div>
  );
}


function select_content(){
  console.log('click');
}