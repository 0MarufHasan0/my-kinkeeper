import React from 'react';
import FriendsCard from './FriendsCard';

const friendsData = async()=>{
    const res = await fetch('https://my-kinkeeper-rust.vercel.app/data.json', {
        cache : "no-store"
    });
    const data = await res.json();
    return data ;
}

const Friends = async() => {
    const friends = await friendsData()
    return (
        <div className='container mx-auto my-10 py-10'>
            <h1 className='font-bold text-2xl'>Your Friends :</h1>

            <div className='grid grid-cols-1 md:grid-cols-3'>
                {
                    friends.map(friend => {

                     return(

                       <FriendsCard key={friend.id} friend={friend}/>
                     )

                    })
                }


            </div>
            
        </div>
    );
};

export default Friends;