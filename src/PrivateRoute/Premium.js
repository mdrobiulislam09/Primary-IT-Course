import React from 'react';
import { Image } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Premium = () => {
    const data = useLoaderData();
    return (
        <div>
            <Image variant="top" style={{ height: '22rem' }} src={data.picture} />
            {data.about}
        </div>
    );
};

export default Premium;