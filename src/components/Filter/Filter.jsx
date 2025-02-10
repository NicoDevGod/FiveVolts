import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from '../Cards/Card'
import { HeaderFilter } from './HeaderFilter';
import { Filters } from "./Filters";

function Filter(){

    //const [search, setSearch] = useState('');
    const [data, setData] = useState([]);


    useEffect(()=>{
        axios.get('http://localhost:1337/api/properties?populate=*')
        .then(data => setData(data.data))
    },[]);

    const values = Object.values(data); 
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })

    const filterProperties = (aux) => {
        
        return aux[0]?.filter(propertie => {

            return (                
                
                parseInt(propertie.attributes.propertyPrice) >= parseInt(filters.minPrice) &&
                (
                    filters.category === 'all' ||
                    propertie.attributes.propertyType === filters.category
                    
                )
            )
        })
    }
    
    const filteredProperties = filterProperties(values)

    
    const listItems = filteredProperties?.map((propertie) => 

        <li key={propertie.id}>{<Card propertie={propertie}/>}</li>
    );
    
    //console.log(filteredData)
    ////console.log('CONTADOR = '+cont)
    //console.log('INFO = '+filteredData[cont])
/*

        <div className='border border-black p-1 flex items-center justify-center gap-1'>
            <input
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                type="text" placeholder='Buscar propiedades...'
                className='outline-none pl-3' />
            

        </div>
*/

  return (
    <>
    <HeaderFilter>
        <Filters onChange={setFilters} />
    </HeaderFilter> 
    <div className='w-full flex items-center justify-center flex-col pt-20'>
     

        <div >

            <ul className='grid grid-cols-2 md:grid-cols-3 gap-4'>
            { listItems }
            </ul>
        </div>
    </div>
    </>
  )
}

export default Filter