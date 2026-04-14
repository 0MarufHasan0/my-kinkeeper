import React from 'react';
import { ClipLoader } from 'react-spinners';

const loading = () => {
    return (
        <div>
          <div className='flex justify-center items-center'>
            <ClipLoader />
          </div>
        </div>
    );
};

export default loading;