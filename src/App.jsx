import React, { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Destino from './destino';
import FormDestino from './formDestino';

function App() {
  const [paginaAtual, setPaginaAtual] = useState('Home');

  const renderPagina = () => {
	switch (paginaAtual) {
	  case 'Home':
		return <Home />;
	  case 'Destinos':
		return <Destinos />;
	  case 'Contato':
		return <Contato />;
	  default:
		return <Home />;
	}
  };


  return (
    <div className="App">
      <Header />

      <Footer />
    </div>
  );
}

export default App;