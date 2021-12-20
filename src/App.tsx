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
                <p>Ao longo dessa landingPage você vai ver alguns métodos e práticas para alcançar o próximo nível,
                  junto de milhares de pessoas que quer construir um futuro.</p>
            </section>

            <section className="container section section__height" id="about">
                <h2 className="section__title">About</h2>
                <strong>Este desafio começou com um propósito:</strong><br /><br />
                <strong>"Pensando em construir o futuro, como você solucionaria os problemas de acesso à educação hoje, utilizando a tecnologia?"</strong>
            </section>

            <section className="container section section__height" id="skills">
                <h2 className="section__title">Skills</h2>
                <strong>Algumas das Skills necessarias para contruir um futuro incrivel!</strong><br /><br />
                <strong>Foco:</strong><br />
                <p>Programação é um universo infinito, logo ter foco é essencial. 
                  Nós vamos direto ao ponto no que realmente importa para você dominar as ferramentas, não apenas conhecê-las.
                </p><br />
                <strong>Pratica:</strong><br />
                <p>A programação é uma disciplina prática. 
                  São as horas de código que vão te preparar e dar a experiência necessária para tomar as melhores decisões no mundo real.</p><br />
                <strong>Grupo:</strong><br />
                <p>A conexão entre Devs impulsiona seu repertório técnico, suas habilidades comportamentais e sua rede de contatos. 
                   Além de ajudar a assimilar e fixar todo aprendizado.
                </p><br />
            </section>

            <section className="container section section__height" id="portfolio">
                <h2 className="section__title">Build</h2>
                  <strong>Ajuda pessoas ou organizações com qualquer valor possivel</strong><br /><br />
                   <p>Eai, dev, vendo que chegou até aqui um ponto importante é ajudar os outros, 
                    isso nem sempre é a tarefa mais facil da missão, 
                    mas sabendo que muitos precissam de ajuda.</p>
                    <p>Voce pode ajudar nesta missão doando um valor ou divulgando o projeto</p>
                    <br /><br /> 
                  <button className="btn">Divulgar</button><br /><br />
                  <button className="btn">Doar</button>
            </section>

            <section className="container section section__height" id="contactme">
                <h2 className="section__title">Info</h2>
                <strong>Algumas informações para ajudar-te!</strong><br />
                <a href="https://efficient-sloth-d85.notion.site/Instru-es-dos-desafios-f2f2c5574cf640c59de425413f60c8eb">Instruções dos desafios</a>
            </section>
        </main>
        
    </>
  );
}

export default App;
function offsetHeight(offsetHeight: any) {
  throw new Error('Function not implemented.');
}

