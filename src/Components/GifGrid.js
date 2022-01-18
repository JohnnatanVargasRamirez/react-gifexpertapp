import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
// useEffect permite ejecutar codigo de manera condicional.


export const GifGrid = ({ category }) => {
    //   const [count, setCount] = useState('');

    const {data : images, loading} = useFetchGifs(category);

   /* const [images, setImages] = useState([]);
    useEffect(() => {
        getGifs( category ).then(imgs=>setImages(imgs));
    }, [category]);// si la categoria cambia vuelve a ejecutar el efecto, la peticion http
*/


  // custom hooks, forma de extraer logica de un componente, o logica que uno desea reutilizar

    return (
        <>
            <h3>{category}</h3>

             {loading && <p className='animate__animated animate__flash'>Cargando</p> }
             <div className='card-grid'>
                {
                    images.map((img) => (
                        <GifGridItem
                            key={img.id}
                            {...img} />
                    ))
                }
            </div> 
        </>
    )
}
