import React from 'react';
import './App.css';
import Services from './components/services';
import Local from './components/local';
import Quotation from './components/quotation';
import Partners from './components/partners';
import Footer from './components/footer';


function App() {
  return (
   <div>
      <header>
          <div className="contact-info">
              <p>Telefone Fixo: 47 3634-0000 &nbsp;&nbsp;&nbsp; WhatsApp: <a href="https://wa.me/55xxxxxxxxxx" target="_blank">47 99921-4214</a></p>
          </div>
          <h1>HIRT Seguros</h1>
      </header>
      <Services />
      <Local />
      <Quotation />
      <Partners />
      <Footer />
    </div>   
  );
}

  


export default App;
