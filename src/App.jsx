import LOGO from './images/LOGO.png'
import InstaIcon from './images/instagram-logo.svg'
import FaceIcon from './images/facebook-logo.svg'
import Sofasemfundo from './images/sofamoderno.png'
import Qrcode from './images/qrcode.png'
import ilustraform from './images/ilustra-form.png'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

import './App.css';

function App() {
  // instalar lib de email, e configurar as funções 

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAxNWPnioU_3UK-UZtDWK6SP2zpGDu1uhU"
  })

  const position = {lat: -16.679096, lng: -49.268367}


  return (
    <div className="App">
      <header className='header'>
        <img 
        src={LOGO} 
        alt="mauricio's Tapeçaria" 
        className='logo'
        />
        <nav className='nav'>
          <a href="inicio" className='link'>INÍCIO</a>
          <a href="#" className='link'>SOBRE</a>
          <a href="#" className='link'>LOCAL</a>
          <a href="#" className='link'>CONTATO</a>
        </nav>
        <div className='icons'>
          <img src={InstaIcon} alt="icone instagram" />
          <img src={FaceIcon} alt="icone instagram" />
        </div>
      </header>

      <section className='inicio'>
        <div className='container-titulo'>
        <h1 className='titulo'>Especializada em <br /> reforma de estofado</h1>
        <button className='button-titulo'>Orçamento</button>
        </div>
        <img src={Sofasemfundo} alt="sofa moderno" className='sofamoderno'/>
      </section>

      <section className='cards'>
        <p className='p1'>Criamos</p>
        <p className='p2'>Reformamos</p>
        <p className='p3'>e Concertamos</p>
        <div className='cards-images'>

          <div className='card'>
            <div className='poltronas'>
              {/* img css */}
            </div>
            <h3>Poltronas</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium aspernatur, numquam nulla iure et!</p>
          </div>

          <div className='card'>
            <div className='sofalaranja'>
              {/* img css */}
            </div>
            <h3>Sofás</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium aspernatur, numquam nulla iure et!</p>
          </div>

          <div className='card'>
            <div className='sofacinza'>
            {/* img css */}
            </div>
            <h3>Tapeçaria</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium aspernatur, numquam nulla iure et!</p>
          </div>

          <div className='card'>
            <div className='puffs'>
            {/* img css */}
            </div>
            <h3>Mais</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium aspernatur, numquam nulla iure et!</p>
          </div>
        </div>
      </section>

      <section className='quem-somos'>
        <div className='quem-somos-container'>
          <div className='container-texto'>
             <h1>Quem Somos?</h1>
              <p>A Mauricios Tapeçaria esta no mercado a mais de 22 anos, com qualidade e seriedade, disponibilizamos de serviços de qualidade para fazer o melhor para você. 
              A preocupação com qualidade, conforto e pontualidade está sempre em primeiro lugar. 
              Nossos projetos apresentam design tradicional ou moderno, respeitando seu gosto, estilo e orçamento.
              Entre em contato conosco e faça um orçamento sem compromisso. 
              </p>
          </div>
          <div className='qrCode'>
            <p>Acompanhe no Instagram</p>
            <img src={Qrcode} alt="qrcode" className='qrcodeimg' />
          </div>
        </div>
      </section>

      <section className='formsection'>
        <div className='divform'>
          <h1>Contato</h1>
        <form className='form'>
          <div className='inputs'>
            <label>Nome:</label>
             <input
             className='inputform'
             name='nome'
             type="text" 
             placeholder='meu nome'
           />
           <label>Email:</label>
            <input
            className='inputform'
            name='nome'
            type="email" 
            placeholder='exemplo@exemplo.com'
           />
          </div>
          <label>Mensagem:</label>
           <textarea 
           name="mensagem" 
           id="mensagem" 
           cols="30" 
           rows="10"
           placeholder="Digite sua mensagem"
           ></textarea>
           <button className='buttonform'>Enviar</button>
        </form>
        </div>
        <img src={ilustraform} alt="homen lendo um formulario" className='imagem-form'/>
      </section>


      <section className='local'>
        <div className='mapa'>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{width: '100%', height: '100%'}}
            center={position}
            zoom={12}
          >
            <Marker position={position}/>
          </GoogleMap>
        ) : <></>}
        </div>

        <div className='info'>
          <p><strong>Endereço: </strong><br /> Rua R5 N:97 Setor Oeste, Goiânia - Goiás</p>
          <p><strong>Telefone: </strong> <br />(62) 3233-2712 <br /> (62) 0000-0000 </p>
          <p><strong>Atendimento:</strong><br />
          De Segunda a Sexta das 8h00 as 18h00 <br />
          Aos Sabados das 7h00 as 14h00  </p>
        </div>
      </section>

      <footer className='footer'>
        <img src={LOGO} alt="img-logo"/>
        <div className='creditos'>
          <p>Desenvolvido por Yure Ribeiro</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
