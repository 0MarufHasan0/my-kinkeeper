import React from 'react';
import { IoIosAdd } from 'react-icons/io';

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content text-center">
    <div >
      <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
      <p className="py-6 text-[#64748B]">
      Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
relationships that matter most.
      </p>
      <button className="btn bg-[#244D3F] text-white"> <IoIosAdd color='white' /> Add a Friend</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;