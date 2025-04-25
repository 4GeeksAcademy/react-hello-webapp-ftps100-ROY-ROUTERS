const contactService={}

contactService.TodaslasAgendas=async()=>{
   try{

    const resp= await fetch('https://playground.4geeks.com/contact/agendas')
    const data = await resp.json()
    return data
} catch (error){
    console.log(error)
   } 
}


contactService.TraermeUnaAgenda = async(username)=>{
    try{
 
     const resp= await fetch('https://playground.4geeks.com/contact/agendas/'+username)
     const data = await resp.json()
     return data
 } catch (error){
     console.log(error)
    } 
 }

contactService.createAgenda = async (slug)=>{
    try{

        const resp= await fetch('https://playground.4geeks.com/contact/agendas/'+slug,{
            method :'POST',
           
            headers : {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({ slug }),
        })
        const data = await resp.json()
        return data
    } catch (error){
        console.log(error)
       }

       

}

contactService.crearContacto = async (load)=>{
    try{
        const resp= await fetch('https://playground.4geeks.com/contact/agendas/GUSTAVO/contacts',{
            method : 'POST',
            headers :{
                'Content-Type':'application/json',

            },
            body :JSON.stringify(load)
        })
        const data = await resp.json()
        return data
    } catch (error){
        console.log(error)
    }
}


contactService.BorrarContacto = async (slug,id)=>{
try{
     await fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts/${id}`,{
        method : 'DELETE',
        headers :{
            'Content-Type':'application/json',

        }
       
    })
    
    return contactService.TraermeUnaAgenda(slug)
} catch (error){
    console.log(error)
}

}

contactService.editContact = async (slug, id, formdata) => {
    try {
        const resp = await fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts/${id}` , {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formdata)
        } )
         return contactService.TraermeUnaAgenda(slug)
     } catch (error) {
         console.log(error)
     }
}




export default contactService