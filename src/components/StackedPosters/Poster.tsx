import React from 'react';
import './Poster.css';

interface PosterInterface{
    id: number,
    poster_path: String,
    title: string
}

interface PosterProps {
    poster: PosterInterface,
    index: number
}

const Poster:React.FC<PosterProps> = ({poster,index}) => {

    return (
        <div className={'poster '+ (index === 1 ? 'current': '')}>
            <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster.poster_path}`} alt={poster.title+' Banner'} className="w-full h-full" />
        </div>
    );
}

export default Poster;
