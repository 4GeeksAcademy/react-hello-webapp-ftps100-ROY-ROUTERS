

import { useNavigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import contactService from "../services/contactservices";
import { useState } from "react";

export const EditarPrueba = () => {

    const params= useParams()
    const { store, dispatch } = useGlobalReducer()
    const navigate = useNavigate()
    const [contactos,setContactos] = useState(store.agenda?.find(el => el.id == params.id))
   


   


      const handleSubmit = async (e) => {
        try{
          e.preventDefault()
          const resp = await contactService.editContact('GUSTAVO', params.id, formData)
          console.log(resp)
          navigate("/")
          
        }catch(error){
          console.log(error)
        }
                          
    }

      const crearContacto =(e)=>{

         setFormData({ ...setContactos, [e.target.name]: e.target.value })

      }
   



    return (
       <form onSubmit={handleSubmit}>
    <div className="input-group input-group-sm mb-3">
  <span className="input-group-text" id="inputGroup-sizing-sm"> NAME</span>
  <input name="name" value = {contactos?.name} onChange={crearContacto}type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"  />
</div>
<div className="input-group input-group-sm mb-3">
  <span className="input-group-text" id="inputGroup-sizing-sm">PHONE</span>
  <input name="phone" value = {contactos?.phone} onChange={crearContacto} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
</div>
<div className="input-group input-group-sm mb-3">
  <span className="input-group-text" id="inputGroup-sizing-sm">EMAIL</span>
  <input name="email" value = {contactos?.email} onChange={crearContacto} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
</div>
<div className="input-group input-group-sm mb-3">
  <span className="input-group-text" id="inputGroup-sizing-sm">ADDRESS</span>
  <input name="address" value = {contactos?.address} onChange={crearContacto} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
</div>
<input className="btn btn-primary" type="submit" value="Submit"/>
<Link to="/">
<input className="btn btn-primary" type="submit" value="Cancelar"/>
      
      </Link>


       </form>





    )
}