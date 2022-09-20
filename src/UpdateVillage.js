


import {  gql,  useMutation} from '@apollo/client';
import {useState, React} from 'react';




const UPDATE_VILLAGE_MUTATION =  gql`
mutation editVillage($id: ID, $name: String) {
  editVillage(id: $id name: $name) {
    id
    name
  }
}`




const UpdateVillage = ({allVillageData}) => {
    const [newVillageName, setNewVillageName] = useState()
    const [villageId, setVillageId] = useState()
    const [updateVillage] = useMutation(UPDATE_VILLAGE_MUTATION)
  return (
    <div>
        <input type="number" className='conteiner-2' placeholder='type an id of a village' onChange={(event) =>  setVillageId(event.target.value)  }/>
        <input type="text" className='conteiner-2' placeholder='Update a village name' onChange={(event) =>  setNewVillageName(event.target.value)  }/>
        <button
                onClick={ () =>{
                    updateVillage({
                    variables:
                    {name: newVillageName,  id: villageId}
                    })
                    allVillageData.refetch()
                }}
        >Update</button>
    </div>
  )
}

export default UpdateVillage