import "./ListaOpciones.css"

const ListaOpciones = () => {

    //Método map -> arreglo.map( (equipos, index) => {
    //    return <option></option>
    //})


    const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y  Gestión"
    ]

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select>
            {equipos.map( (equipos, index) => <option key={index}>{equipos}</option>)}
        </select>
    </div>
}

export default ListaOpciones;