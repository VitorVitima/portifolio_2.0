function About() {
  return (
    <div id="about">
      <div id="aboutMe">
        <div id="me">
          <h2>Olá, sou o</h2>
          <h1>Vitor Vitima</h1>
          <h2>Web developer</h2>
        </div>
        <div id="textAbout">
          <p>
            Desenvolvedor Front-end com experiência em React.js, Next.js, Redux,
            JavaScript, TypeScript, Styled Components, Material UI e consumo de
            APIs REST. Apaixonado pelo desenvolvimento de componentes
            reutilizáveis. Também possui experiência em projetos gerenciados por
            Metodologias Ágeis. Formado em Sistemas de Informação e cursando
            Especialização em Front-End na Digital House Brasil.
          </p>
        </div>
      </div>
      <div id="conteinerImg">
        <div>
          <img id="pato" src="./images/pato.png"></img>
        </div>
        <div>
          <img id="cois" src="./images/cois.png"></img>
        </div>
        <div>
          <img id="salgadin" src="./images/salgadin.png"></img>
        </div>
      </div>
    </div>
  );
}
export default About;
