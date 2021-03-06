import React, { createElement } from 'react';
import './App.css';
//import { Modal } from './components/Modal';

  function scrollHeader(this: any){
      const header = document.getElementById('header')
      // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
      if(this.scrollY >= 80) header?.classList.add('scroll-header'); else header?.classList.remove('scroll-header')
  }
  window.addEventListener('scroll', scrollHeader)

function App() {
  return (
    <>
       <header className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">#BuildTheFuture</a>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i className='bx bx-home-alt nav__icon'></i>
                                <span className="nav__name">started</span>
                            </a>
                        </li>
                      
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className='bx bx-user nav__icon'></i>
                                <span className="nav__name">About</span>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className='bx bx-book-alt nav__icon'></i>
                                <span className="nav__name">Skills</span>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                                <i className='bx bx-building nav__icon' ></i>
                                <span className="nav__name">Build</span>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contactme" className="nav__link">
                                <i className='bx bx-message-square-detail nav__icon'></i>
                                <span className="nav__name">Info</span>
                                
                            </a>
                        </li>
                    </ul>
                </div>

            </nav>
        </header>

        <main>

            <section className="container section section__height" id="home">
                <h2 className="section__title">started</h2>

                <strong>Fala dev beleza?</strong><br /><br />
                <p>Vc gostaria de ajudar a contruir um futuro junto com outros devs?</p><br />
                <p>Ao longo dessa landingPage voc?? vai ver alguns m??todos e pr??ticas para alcan??ar o pr??ximo n??vel,
                  junto de milhares de pessoas que quer construir um futuro.</p>
            </section>

            <section className="container section section__height" id="about">
                <h2 className="section__title">About</h2>
                <strong>Este desafio come??ou com um prop??sito:</strong><br /><br />
                <strong>"Pensando em construir o futuro, como voc?? solucionaria os problemas de acesso ?? educa????o hoje, utilizando a tecnologia?"</strong>
            </section>

            <section className="container section section__height" id="skills">
                <h2 className="section__title">Skills</h2>
                <strong>Algumas das Skills necessarias para contruir um futuro incrivel!</strong><br /><br />
                <strong>Foco:</strong><br />
                <p>Programa????o ?? um universo infinito, logo ter foco ?? essencial. 
                  N??s vamos direto ao ponto no que realmente importa para voc?? dominar as ferramentas, n??o apenas conhec??-las.
                </p><br />
                <strong>Pratica:</strong><br />
                <p>A programa????o ?? uma disciplina pr??tica. 
                  S??o as horas de c??digo que v??o te preparar e dar a experi??ncia necess??ria para tomar as melhores decis??es no mundo real.</p><br />
                <strong>Grupo:</strong><br />
                <p>A conex??o entre Devs impulsiona seu repert??rio t??cnico, suas habilidades comportamentais e sua rede de contatos. 
                   Al??m de ajudar a assimilar e fixar todo aprendizado.
                </p><br />
            </section>

            <section className="container section section__height" id="portfolio">
                <h2 className="section__title">Build</h2>
                  <strong>Ajuda pessoas ou organiza????es com qualquer valor possivel</strong><br /><br />
                   <p>Eai, dev, vendo que chegou at?? aqui um ponto importante ?? ajudar os outros, 
                    isso nem sempre ?? a tarefa mais facil da miss??o, 
                    mas sabendo que muitos precissam de ajuda.</p>
                    <p>Voce pode ajudar nesta miss??o doando um valor ou divulgando o projeto</p>
                    <br /><br /> 
                  <button className="btn">Divulgar</button><br /><br />
                  <button className="btn">Doar</button>
            </section>

            <section className="container section section__height" id="contactme">
                <h2 className="section__title">Info</h2>
                <strong>Algumas informa????es para ajudar-te!</strong><br />
                <a href="https://efficient-sloth-d85.notion.site/Instru-es-dos-desafios-f2f2c5574cf640c59de425413f60c8eb">Instru????es dos desafios</a>
            </section>
        </main>
        
    </>
  );
}

export default App;
function offsetHeight(offsetHeight: any) {
  throw new Error('Function not implemented.');
}

