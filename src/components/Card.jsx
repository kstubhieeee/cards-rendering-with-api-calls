import React from 'react'

const Card = ({ id, title, body }) => {
    return (

        <div className="rounded-xl py-6 px-9 p-10 w-full text-white bg-[#1c1c1c]">
            <h2 className="text-2xl font-semibold">{id}</h2>
            <h3 className="text-xl mt-5 font-medium">{title}</h3>
            <p className="text-sm mt-5 italic font-medium">{body}</p>
        </div>

    )
}

export default Card
