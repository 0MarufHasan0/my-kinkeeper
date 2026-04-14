import React from 'react';

const Stats = () => {
    return (
        <div className="flex justify-center px-4 animate-none md:animate-bounce">
       <div className="stats stats-vertical sm:stats-vertical md:stats-horizontal shadow max-w-4xl w-full gap-4 md:gap-0">
        
        <div className="stat text-center ">
             <div className="stat-value text-3xl md:text-4xl">10</div>
        <div className="stat-title text-lg md:text-2xl text-[#64748B]">Total Friends</div>
        </div>

        <div className="stat text-center ">
            <div className="stat-value text-3xl md:text-4xl">3</div>
        <div className="stat-title text-lg md:text-2xl text-[#64748B]">On Track</div>
        </div>

        <div className="stat text-center ">
            <div className="stat-value text-3xl md:text-4xl">6</div>
            <div className="stat-title text-lg md:text-2xl text-[#64748B]">Need Attention</div>
        </div>

        <div className="stat text-center ">
            <div className="stat-value text-3xl md:text-4xl">12</div>
            <div className="stat-title text-base md:text-xl text-[#64748B]"> Interactions This Month</div>
        </div>

    </div>
</div>
    );
};

export default Stats;