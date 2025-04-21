import contactService from "../services/contactservices"
import { useNavigate } from "react-router-dom"

export const Card = props =>{
  const navigate = useNavigate();

  const eliminarContacto = async ()=>{
    try{
    const resp =await contactService.BorrarContacto('GUSTAVO',props.cid)
    console.log(resp)
    }catch(error){
    console.log(error)
    }
    
    }

    const handleEdit = e => {
      e.preventDefault()
      navigate('/edit/'+props.cid)
  }

    return(

        <div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://img.freepik.com/vector-gratis/circulo-azul-usuario-blanco_78370-4707.jpg?semt=ais_hybrid&w=740" className="img-fluid rounded-start w-25 " alt="avatar"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.phone}</p>
        <p className="card-text">{props.email}</p>
        <p className="card-text">{props.address}</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
      <button type="button" className="btn btn-danger  m-3 btn-sm" onClick={eliminarContacto}>Delete</button>
<button type="button" className="btn btn-warning btn-sm" onClick={handleEdit}>Edit </button>
    </div>
  </div>
</div>

    )
}