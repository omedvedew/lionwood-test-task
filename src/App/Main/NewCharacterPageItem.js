import React from 'react';

const NewCharacterPageItem = ({
    name,
    email,
    gender,
    image,
}) => {
    return (
        <>
            <img className="m-n-c_image" src={image} alt={image}/>
            <div className="m-n-c_description">
                <h2 className="m-n-c_item description_name">{name}</h2>
                <div className="m-n-c_item description_email">Email: {email}</div>
                <div className="m-n-c_item description_email">Gender: {gender}</div>
            </div>
        </>
    )
};

export default NewCharacterPageItem;