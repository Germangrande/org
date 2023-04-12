import "./Colaborador.css"
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Colaborador = (props) => {
    const { nombre,puesto,equipo,foto,id,fav } = props.datos
    const { colorPrimario, eliminarColaborador, like } = props

    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)} />
        <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>

             {/* Ternario --> condición ? seMuestra : noSeMuestra
             condición && seMuestra --> { mostrarFormulario && <Formulario/> } */}
             { fav ? <AiFillHeart onClick={() => like(id)} color="red"/> :  <AiOutlineHeart onClick={() => like(id)} /> }
        </div>
    </div>
}

export default Colaborador;