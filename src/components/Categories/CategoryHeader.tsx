import React from 'react';

interface CategoryHeaderProps {
    heading: String
}

const CategoryHeader:React.FC<CategoryHeaderProps> = ({heading}) => {
    return (
        <div className="flex justify-between mb-10">
            <h2 className="leading text-gray-700 font-semibold text-xl">{heading} Movies</h2>
                <a href="/" className="leading text-sm text-gray-700 font-semibold"> See More</a>
        </div>
    );
}

export default CategoryHeader;
