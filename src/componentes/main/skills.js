import "./skills.css";
function Skills() {
  return (
    <div id="Skills">
      <div id="skillsTitulo">
        <h1>Skills e Habilidades</h1>
      </div>
      <div id="dadosSkills">
        <div id="dados">
          <div>
            <h4>Front-End</h4>
            <p>
              1 ano de experiencia - como Web Developer Front-End - utilizando
              tecnologias como; HTML, CSS, JavaScript, React.js e Next.js.
            </p>
          </div>
          <div>
            <h4>Back-End</h4>
            <p>
              Atualmente focado em aprimorar minhas habilidadades Back-End - na
              atualidade utilizo Node.js, MongoDB e Express.js, para fazer
              requisições e REST APIs.
            </p>
          </div>
          <div>
            <h4>Web Desig</h4>
            <p>
              Para a criação dos templates, layouts e todos os detalhes gráficos
              de minhas aplicações utilizo ferramentas de estilização, como
              Bootstrap, Sass, CSS, Canva e Adobe Color.
            </p>
          </div>
        </div>
        <div id="graficos">
          <div id="frontEnd" className="conteinerGrafico">
            <h3>Front-End</h3>
            <div>
              <div></div>
            </div>
          </div>
          <div id="backEnd" className="conteinerGrafico">
            <h3>Back-End</h3>
            <div>
              <div></div>
            </div>
          </div>
          <div id="webDesig" className="conteinerGrafico">
            <h3>Web Desig</h3>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
