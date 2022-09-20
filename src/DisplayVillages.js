


import { useQuery, gql} from '@apollo/client';
import DeleteVillage from './DeleteVillage';
import AddVillage from './AddVillage';
import FindVillage from './FindVillage';
import UpdateVillage from './UpdateVillage';


const GET_ViLLAGES = gql`
query GetAllVillages{
  Villages {
    id
    name
  }
}
`;




function DisplayVillages() {

    const allVillageData = useQuery(GET_ViLLAGES);
    
    
    if (allVillageData.loading) return <p>Loading...</p>;
    if (allVillageData.error) return <p>Error :(</p>;
    
    
    return <div className='conteiner-1-1'>
              <div>{allVillageData.data.Villages.map((village)=>{return <li key={village.id}><h2>{village.id} {village.name}</h2></li>})}</div>
              <DeleteVillage allVillageData={allVillageData}/>
              <AddVillage allVillageData={allVillageData}/>
              <FindVillage/>
              <UpdateVillage llVillageData={allVillageData}/>
            </div>

    ;
      
  }



  export default DisplayVillages;

