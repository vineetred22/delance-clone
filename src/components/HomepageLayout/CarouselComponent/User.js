import React from 'react'

export const User = ({userdata}) => {
    const {name,location,rate} = userdata;
    return (
        <div>
            <div>
                <h1>{name} </h1>
                <h1>{location} </h1>
                <h1>{rate} </h1>
            </div>
        </div>
    )
}
