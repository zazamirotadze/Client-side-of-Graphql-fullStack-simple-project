
import {  gql, useLazyQuery} from '@apollo/client';
import {useState} from 'react';




import React from 'react'
const GET_Village_BY_Id = gql`
query village($id: ID!){
  Village(id: $id) {
    id
    name
  }
}`


const FindVillage = () => {
    



  
  const [idData, setIdData] = useState("")
  const [fetchVillage, {data, error}] = useLazyQuery(GET_Village_BY_Id)
    
    
    
    
  return (
    <div className='conteiner-1'>
        <input type="number" placeholder='find a village by an id' onChange={(event)=>setIdData(event.target.value)}/>
        <button onClick={() => {
            fetchVillage({
                variables:{
                    id:  idData
            }})

        }}>FIND</button>
        {data && data.Village  &&<p>Name of village:{data.Village.name}</p> }
        {data==null  || !data.Village &&<p>an incorrect Id was given</p>}
        
    </div>
  )
}

export default FindVillage