function CriarProjeto(props){
    function iconsFerramentas(){
        return props.srcIcons.map((e)=>{
            return(
                <img
                    src={`${e}`}
                >
                </img>
            )
            console.log(e)
        })
    }
    return(
          <div className="projetos">
            <div className="ferramentas">
              <div>
                <span>{props.nameProject}</span>
              </div>
              <div>
                {iconsFerramentas()}
              </div>
            </div>
            <div className="projetoImage">
                <img src={props.imagePrincipal}></img>
            </div>
          </div>
    )
}
export default CriarProjeto