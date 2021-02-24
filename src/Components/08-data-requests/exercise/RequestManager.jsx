'use strict';
import { useEffect, useState } from 'react';
import FilmRequest from './FilmRequest';
import FilmForm from './FilmForm';
import axios from 'axios';

const RequestManager = () => {
    const [query, setQuery] = useState('');
    const [submit, setSubmit] = useState(false);

    const handleQuery = e => {
        setQuery(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();
        setSubmit(true);
    }
    let result = <FilmForm handleQuery={handleQuery} handleSubmit={handleSubmit} />

    useEffect(() => {
        result = (
            <>
                <FilmForm handleQuery={handleQuery} handleSubmit={handleSubmit} />
                <FilmRequest query={query} />
            </>
        )
    }, [submit]);

    return result;
}
export default RequestManager;

//     const [data, setData] = useState('');
//     const [apiKey, setApiKey] = useState('');
//     const [filmTitle, setFilmTitle] = useState('');

//     useEffect(() => {
//         axios.get("http://www.omdbapi.com/?apikey=" + apiKey + "&t=" + filmTitle)
//             .then((response) => {
//                 setData(response.data);
//                 console.log(response.data);
//             })
//     })

//     return (
//         <>
//             <FilmRequest />
//             <ul>
//                 <li>{data.Title}</li>
//                 <li>{data.Year}</li>
//                 <li>{data.Rated}</li>
//                 <li>{data.Genre}</li>
//                 <li>{data.Plot}</li>
//             </ul>
//         </>
//     )
// }
// export default RequestManager;