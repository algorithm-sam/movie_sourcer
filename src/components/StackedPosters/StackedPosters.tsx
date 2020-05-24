import React, { useEffect, useState } from 'react';
import Poster from './Poster';

interface PosterInterface{
id: number,
poster_path: String,
title: string
}

const StackedPosters: React.FC = () => {
    // take in a num of posters prop
    // take in a dimension prop

    const [posters, setPosters] = useState([]);
    useEffect(() => {

        const fetchData = async () => {
            const url = "https://api.themoviedb.org/3/trending/movie/week?api_key=2427496f4d1f13f09172c952292311dc";
            let resp = await fetch(url);
            let result = await resp.json();
            const newRes = result.results.filter((res:any) => res.poster_path ).slice(0,3);
            setPosters(newRes);
        }
        fetchData();


    },[]);

    return (
        <div className="flex items-center content-center justify-center">
            {posters.map((poster:PosterInterface,index) => <Poster poster={poster} key={poster.id} index={index}/>)}
        </div>
    );
}

export default StackedPosters;
