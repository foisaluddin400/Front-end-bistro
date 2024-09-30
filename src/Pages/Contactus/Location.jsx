import React from 'react';

const Location = () => {
    const location = [
        {
            name: 'Phone',
            number: '01725300330',
            
        },
        {
            name: 'Adress',
            number: 'Dhaka, Banasree, Block: G',
        },
        {
            name: 'Working Hourse',
            number: '10.00 am - 11.00 pm',
        }
    ]
    return (
        <div>
            {
                location.map((locations)=> 
                <div>
                    
                    <h1>{locations.name}</h1>
                    <p>{locations.number}</p>
                </div>
                
            )
            }
        </div>
    );
};

export default Location;