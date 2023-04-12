import axios from 'axios';
import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';

function MoviesList(){
    let [movie , setMovie] = useState([]);

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/trending/all/day?api_key=94868bf113243441a75149177803ff83').then(res=>res.json()).then(data=>setMovie(data.results))
        // axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=94868bf113243441a75149177803ff83').then(res=>console.log(res))
    },[])

    return (
        <>
            <div class="container text-center">
                <div class="row">
                    
                    
                    
            {movie.map(a=>
            <div className="col-4" key={a.id}>
                <div className="card" style={{width:" 18rem"}}>
                    <img src={`http://image.tmdb.org/t/p/w500/${a.backdrop_path}`} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{a.title}</h5>
                        <p className="card-text">{a.overview.length > 20 && a.overview.substring(0,20)+"..."}</p>
                        <Link to="/#" className="btn btn-primary">More details</Link>
                    </div>
                </div>
                {console.log(a)}
                </div>
                )}
                </div>
                </div>
        </>
    );
}
export default MoviesList;