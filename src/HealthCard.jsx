import React from 'react'

function HealthCard({ image, title, classname , data , unit   }) {


    return (
        <div className={`card h-[250px] lg:w-[230px] md:w-[300px] w-full rounded-lg m-2 flex flex-col p-4 ${classname}`}>
            <div className="flex items-center">
                <img className="h-20 w-20" src={image} alt="Respiratory Icon" />
            </div>
            <div className="pt-2 font-sans text-base text-gray-700">
                 {title}
            </div>
            <div className="font-sans font-bold text-4xl pt-1">
                {data.value} <span className="text-3xl">{unit}</span>
            </div>
            <div className="font-sans text-xs text-gray-700 pt-2 ">
                {data.levels}
            </div>
        </div>
    )
}

export default HealthCard
