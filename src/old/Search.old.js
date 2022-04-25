import debounce from "lodash.debounce";
import { useCallback, useEffect, useRef, useState } from "react";
import { MOVIES_API } from "../constants";

const Search = () => {
    const [ phrase, setPhrase ] = useState('')
    const delayedRef = useRef();
    const handleChange = e => {
        setPhrase(e.target.value)
        delayedRef.current(e.target.value)
    }

    const fetchMovies = (input) => { 
         
        alert(`movies called with ${input}`)       
    }

    const fn = debounce(fetchMovies, 1000);


    useEffect(() => {
        delayedRef.current = debounce(fetchMovies, 1000)
    }, [])


    
    // const delayedFetchMovies = useCallback(() => debounce(fetchMovies, 1000), [])

    return <div> 
        <input value={phrase} onChange={handleChange} />
    </div>
}

export default Search;