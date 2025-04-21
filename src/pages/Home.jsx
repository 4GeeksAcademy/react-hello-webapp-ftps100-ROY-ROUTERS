import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import contactService from "../services/contactservices.js";
import { Card } from "../components/Card.jsx";
export const Home = () => {
	

  const {store, dispatch} =useGlobalReducer()

  const fetchTodas = async ()=>{
	try{
		const data = await contactService.TodaslasAgendas();
		console.log(data)
		dispatch ({type :'obtenerAgendas', payload : data.agendas})

	}catch(error){ console.log(error)

	}
	
}

const fetchUNaSolaAgenda = async (username)=>{
	try{
		const data = await contactService.TraermeUnaAgenda(username);
		console.log(data)
		dispatch ({type :'ObtenerAgendaUsuario', payload : data.contacts})

	}catch(error){ console.log(error)

	}
	
}


  useEffect(()=>{

	fetchTodas()
	fetchUNaSolaAgenda('GUSTAVO')

  },[])





	return (
<div>




<div className="d-flex flex-wrap justify-content-between" >

<div>
<div className="text-center">
  {store.agenda?.map(el=>
  <Card
  key ={el.id}
  cid ={el.id}
  name={el.name}
  phone ={el.phone}
  email ={el.email}
  address ={el.address}/>

)}

</div>

</div>
		
					<Link to="/prueba">
			<input className="btn btn-primary" type="submit" value="Añadir usuario" onClick={()=>contactService.createAgenda('GUSTAVO')} />
				  
				  </Link>
				 
			
				  
			
 </div>		
</div>
	);
}; 