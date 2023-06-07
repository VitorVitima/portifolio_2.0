import CriarProjeto from "./criarProjeto";
import "./projetos.css";
function Projetos() {
  const srcDefaultImage = './images/projetos/'
  return (
    <div id="Projetos">
      <div id="tituloProjetos">
        <h1>Projetos de destaque</h1>
        <div id="line"></div>
      </div>
      <div id="allProjetos">
        <div className="conteinerProjetos">
            <CriarProjeto
              nameProject='Todo List'
              imagePrincipal={`${srcDefaultImage}todoList.png`}
              srcIcons={[
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg'
              ]}
            ></CriarProjeto>
            <CriarProjeto
              nameProject='Divulga Fone'
              imagePrincipal={`${srcDefaultImage}divulaFone.png`}
              srcIcons={[
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
              ]}
            ></CriarProjeto>
        </div>
        <div className="conteinerProjetos">
          <CriarProjeto
            nameProject='Pokedex'
            imagePrincipal={`${srcDefaultImage}pokedex.png`}
            srcIcons={[
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
            ]}
          ></CriarProjeto>
          <CriarProjeto
            nameProject='Spotify Layout'
            imagePrincipal={`${srcDefaultImage}spotify.png`}
            srcIcons={[
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg',
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg'
            ]}
          ></CriarProjeto>
        </div>
      </div>
    </div>
  );
}
export default Projetos;
