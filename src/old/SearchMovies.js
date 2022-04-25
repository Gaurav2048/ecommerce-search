import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { MOVIES_API } from "../constants";
import debounce from "lodash.debounce";

const SearchMovies = () => {
    const [ phrase, setPhrase ] = useState('');
    const delayedRef = useRef();
    const [ data, setData ] = useState([]);
    const [loading, setLoading] = useState(false);
    
    // 1. Make an api call phrase  --> DONE
    const getMovies = async (query) => {
        setLoading(true)
        const response = await axios.get(`${MOVIES_API}${query}`);
        console.log(response);
        setData(response.data.Search || []);
        setLoading(false)
    }

    // 2. Handle the delay logic 
    //const delayedMoviesResponse = ;

    useEffect(() => {
        if (!delayedRef.current) return;
        if (phrase.length > 3) {
            delayedRef.current(phrase)
        }
    }, [phrase])

    useEffect(() => {
        delayedRef.current = debounce(getMovies, 300);
    }, [])
    
    
    return <div className="container">
        <BeautifulInput phrase={phrase} setPhrase={setPhrase} />
        {loading && "Loading ..."}
        <div className="parent">
            {
                data.length === 0 ? <h3>No Result found</h3> : data.map(movie => <Movie {...movie} key={movie.id} />)
            }
        </div>
    </div>
}

export default SearchMovies;

const Movie = (movie) => {
    return <div className="movie-container">
        <img src={movie.Poster} alt="" width="58px" height="58px" />
        <div className="title-container">
            <div className="movie-title">{movie.Title}</div>
            <div className="imdbId">{`IMDB ID ${movie.imdbID}`}</div>
        </div>
    </div>
}

const BeautifulInput = (props) => {
    const { phrase, setPhrase } = props;

    const handleChange = e => {
        setPhrase(e.target.value)
    }

    return <div className="input-container">
        <input className="input" placeholder="Search Movies" value={phrase} onChange={handleChange} />
    </div>
}