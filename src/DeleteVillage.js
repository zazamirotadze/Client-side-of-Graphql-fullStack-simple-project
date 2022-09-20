import { useState } from 'react';
import {  gql,  useMutation} from '@apollo/client';


const DETELE_ViLLAGE = gql`
  mutation deletevillage($id: ID!){
    deleteVillage(id: $id) {
      name
    }
  }

`;




const DeleteVillage = ({allVillageData}) => {
    
    const [deleteId, setDeleteId] = useState("")
    const [deleteVillage] = useMutation(DETELE_ViLLAGE)
  return (
    <div className='delete-field'> 
        <input type="number" placeholder='delete a village by name' onChange={(event)=> setDeleteId(event.target.value)}/>
        <button onClick={() => {
            deleteVillage({
                variables:{
                    id:  deleteId
                }})
            allVillageData.refetch()
        }}
        >delete</button>
  </div>
  )
}

export default DeleteVillage