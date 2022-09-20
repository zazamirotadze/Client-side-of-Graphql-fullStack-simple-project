


import {  gql,  useMutation} from '@apollo/client';
import {useState,  React} from 'react';



const CREATE_VILLAGE_MUTATION =  gql`
mutation($name: String!){
  addVillage(name: $name) {
    id
    name
  }
}`




const AddVillage = ({allVillageData}) => {
    const [newVillage, setNewVillage] = useState()
    const [createVillage] = useMutation(CREATE_VILLAGE_MUTATION)
    
  return (
    <div className='findVillage'>
        <input type="text" placeholder='type a village name' onChange={(event) =>  setNewVillage(event.target.value)  }/>
        <button 
        onClick={ () =>{
            createVillage({
            variables:
            {name: newVillage}
            })
            allVillageData.refetch()
        }}
        >Add village</button>
  </div>
  )
}

export default AddVillage
