import Text from '@/Component/Button/Text';
import VideoCall from '@/Component/Button/VideoCall';
import Call from '@/Component/Button/Call';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiOutlineArchiveBoxArrowDown } from 'react-icons/hi2';
import { IoIosVideocam } from 'react-icons/io';
import { MdDelete, MdTextsms } from 'react-icons/md';
import { RiNotificationSnoozeLine } from 'react-icons/ri';
import { VscCallOutgoing } from 'react-icons/vsc';



const friendsData = async()=>{
    const res = await fetch('https://my-kinkeeper-rust.vercel.app/data.json', {
        cache : "no-store"
    });
    const data = await res.json();
    return data ;
}

const page = async({params}) => {
    const {id} = await params
    const friends= await friendsData()
    const expactedFriend = friends.find(friend=> friend.id === Number(id))
    console.log (expactedFriend,"friend")
    return (
      <div className='container mx-auto mt-5 flex flex-col md:justify-between md:flex-row gap-6 p-6 shadow-md rounded-lg'>

  {/* Left side */}
  <div className='flex flex-col gap-3'>
    
    <Image
      src={expactedFriend.picture}
      width={100}
      height={100}
      alt={expactedFriend.name}
      className='rounded-full'
    />

    <div
      className={`badge ${
        expactedFriend.status === "almost due"
          ? "badge-warning text-white"
          : expactedFriend.status === "overdue"
          ? "badge-error text-white"
          : "bg-[#244D3F] text-white p-3"
      }`}
    >
      {expactedFriend.status}
    </div>

    {/* Tags */}
    <div className="flex flex-wrap gap-2">
      {expactedFriend.tags?.map((tag, index) => (
        <div
          key={index}
          className="rounded-lg text-[#244D3F] font-semibold 
          bg-[#CBFADB]/70 px-3 py-1 text-xs sm:text-sm"
        >
          {tag}
        </div>
      ))}
    </div>


    <p className='text-sm text-[#64748B] mt-3 font-medium italic'>
      {expactedFriend.bio}
    </p>

    <p className='text-sm text-[#64748B] mt-3 font-medium italic'>
      {expactedFriend.email}
    </p>
    
    <div className="stats stats-vertical shadow w-full">
      
      <div className="stat font-bold text-[#1F2937]">
        <div className="flex items-center gap-2">
          <RiNotificationSnoozeLine /> Snooze 2 weeks
        </div>
      </div>

      <div className="stat font-bold text-[#1F2937]">
        <div className="flex items-center gap-2">
          <HiOutlineArchiveBoxArrowDown /> Archive
        </div>
      </div>

      <div className="stat">
        <Link href={`/`} className="text-red-500 flex items-center gap-2">
          <MdDelete /> Delete
        </Link>
      </div>

    </div>

  </div>

  {/* Right side */}
  <div className='md:col-span-2 flex flex-col gap-5 justify-center '>


    <div className="stats gap-5 stats-vertical lg:stats-horizontal shadow w-full">
      
     <div className='  border-r h-20 p-3'>
         <div className=" text-center">
        <div className="stat-value">
          {expactedFriend.days_since_contact}
        </div>
        <div className="stat-desc">
          Days Since Contact
        </div>
      </div>
     </div>
 <div className='  border-r h-20 p-3'>
      <div className="text-center">
        <div className="stat-value">
          {expactedFriend.goal}
        </div>
        <div className="stat-desc">
          Goal (days)
        </div>
      </div>
      </div>
      
      <div className='  border-r h-20 p-3'>
      <div className="text-center">
        <div className="stat-value">
          {expactedFriend.next_due_date}
        </div>
        <div className="stat-desc">
          Next Due
        </div>
      </div>
      </div>
      </div >


      <div className='flex mt-6 justify-between items-center   gap-5 '>
         <div>
            <h2 className='text-[#244D3F] text-xl font-bold'>Relationship Goal</h2>
        <p>Connect Every <span className='font-bold'>30 days</span></p>
         </div>
        
        <button className='text-center'>Edit</button>


      </div>
      {/* button */}

      <div className='mt-6' >

        <h3 className='text-[#244D3F] font-bold'>Quick Check-In</h3>
        <div className='grid md:grid-cols-3 grid-cols-1 mt-5 gap-3'>

          <Call expactedFriend={expactedFriend}></Call>
          <Text expactedFriend={expactedFriend}></Text>
          <VideoCall expactedFriend={expactedFriend}></VideoCall>

            

           

        </div>

      </div>

    </div>

  </div>


    );
};

export default page;