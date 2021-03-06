
import React,{useState} from 'react'
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

 const ExpertApp =  () =>{

    //const categories = ['One Punch','Samurai X','Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch']);
  /*  const handleAdd = () =>{
        setCategories([...categories,'Naruto']);
    };*/

 return (
     <>
     <h2>GifExpertApp</h2>

     <AddCategory setCategories = {setCategories}/>

     <hr/>
      
    
      <ol>
         {
            categories.map(category =>
               <GifGrid key={category} category={category}/>
            )
         }
      </ol>
     </>
 )
};

export default ExpertApp;

//rafc snipped