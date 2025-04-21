import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import contactService from "../services/contactservices";

export const Prueba = () => {

    const params= useParams()

    const [data,setData]=useState ([])
    const [contactos,setContactos] = useState(
      {name: "",
         email: "",
         phone: "",
         address: ""

      })

      const handleSubmit = async (e) => {
        try{
          e.preventDefault()
          const resp = await contactService.crearContacto(contactos)
          console.log(resp)
          
        }catch(error){
          console.log(error)
        }
                          
    }

      const crearContacto =(datoNuevo)=>{

         const {name, value} = datoNuevo.target
         setContactos({...contactos, [name]: value})

      }
   



    return (
       <form onSubmit={handleSubmit}>
    <div className="input-group input-group-sm mb-3">
  <span className="input-group-text" id="inputGroup-sizing-sm"> NAME</span>
  <input name="name" value = {contactos.name} onChange={crearContacto}type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"  />
</div>
<div className="input-group input-group-sm mb-3">
  <span className="input-group-text" id="inputGroup-sizing-sm">PHONE</span>
  <input name="phone" value = {contactos.phone} onChange={crearContacto} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
</div>
<div className="input-group input-group-sm mb-3">
  <span className="input-group-text" id="inputGroup-sizing-sm">EMAIL</span>
  <input name="email" value = {contactos.email} onChange={crearContacto} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
</div>
<div className="input-group input-group-sm mb-3">
  <span className="input-group-text" id="inputGroup-sizing-sm">ADDRESS</span>
  <input name="address" value = {contactos.address} onChange={crearContacto} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
</div>
<input className="btn btn-primary" type="submit" value="Submit"/>
<Link to="/">
<input className="btn btn-primary" type="submit" value="Cancelar"/>
      
      </Link>


       </form>





    )
}