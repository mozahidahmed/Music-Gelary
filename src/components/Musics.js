import React from 'react';
import { useQuery } from 'react-query';
import Loading from './Loading';
import Music from './Music';

const Musics = () => {
    const {data:services,isLoading,refetch}=useQuery('services',()=>fetch('https://mozahidfurniture.onrender.com/product',{
  
    method:'GET',
    headers:{
        'content-type': 'application/json'
       
    }
    
    }).then(res=>res.json()))
    if(isLoading){
    return <Loading></Loading>
    }
    return (
        
        <div>
            <div class='row'>
                        {services.map(service=>
                       
                      <Music key={service._id} service={service}></Music>
                        )}
                    </div>
        </div>
    );
};

export default Musics;