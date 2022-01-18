import { useState , useEffect } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {

    const [state, setstate] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        getGifs(category).then(imgs => { setstate({ data: imgs, loading: false }) }
        );
    }, [category]);// con arreglo vacio solo lo ejecuta una vez y con dato cambia cada vez que la categoria cambia

    return state;
}

//https://animate.style/