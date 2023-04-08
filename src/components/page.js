import React from 'react';

// Components --------------------------------------------
import Calendar from './calendar.js'
import Navbar from './navbar.js'
import Header from './header.js'
import Contact from './contact.js'
import Footer from './footer.js'
import Content from './content.js'
// -------------------------------------------------------

// Styles ------------------------------------------------
import '../styles/page.css'
import '../styles/calendar.css'
import '../styles/contact.css'
import '../styles/footer.css'
import '../styles/navbar.css'
import '../styles/header.css'
// -------------------------------------------------------


// App ---------------------------------------------------
export default function Page(props) {
   return (
    <div class="Page">
      <Header></Header>
      <Navbar></Navbar>
      <Content></Content>
      <Calendar dates={props.dates}></Calendar>
      <Footer></Footer>
    </div>
  );
}
// -------------------------------------------------------