import photo from '../images/photo.png'
import linkedin from '../images/linkedin.png'
import logo from '../images/logo-favicon.svg'
//Cores: #30343F(preto), #C2D3CD(cinza claro), #EF5B5B(vermelho), #9FA4A9(cinza escuro), #1E2749(azul), #1F1717
export default function Main() {

  return (
    <main id="main">
      <nav id="nav-main">
        <img src={logo} alt="linkedin" id="img-logo"/>
        <p>Projetos</p>
        <p>Sobre Mim</p>
        <p>Currículo</p>
        <p>Tecnologias</p>
        <a href="https://www.linkedin.com/in/fernando1806/"target="_blank"><img src={linkedin} alt="linkedin" id="img-linkedin"/></a>
      </nav>
      <section id="sec-box">
        <div id="box-photo-name">
          <h4>Seja Bem-Vindo,</h4>
          <h2 id="text-name">Fernando Oliveira</h2>
          <p id="text-white">Software Engineer</p>
        </div>
        <img src={photo} alt="photo" id="photo"/>
      </section>
      <section>
        Seção 2
      </section>
      <section>
        Seção 3
      </section>
      <footer>
        <div id = "fundo">©Todos os direitos reservados por Fernando Oliveira</div>
      </footer>
    </main>
  )
}