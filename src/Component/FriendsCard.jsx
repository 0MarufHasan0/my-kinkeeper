import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendsCard = ({ friend }) => {
  return (
    <Link href={`/${friend.id}`} className="w-full flex justify-center">
      <div
        className="card bg-base-100 w-full max-w-sm sm:max-w-md rounded-2xl shadow-md 
        transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
      >
        <figure className="px-6 sm:px-10 pt-6 sm:pt-10">
          <Image
            src={friend.picture}
            alt={friend.name}
            width={100}
            height={100}
            className="rounded-full"
          />
        </figure>

        <div className="card-body items-center text-center px-4 sm:px-6">
          <h2 className="card-title text-[#1F2937] font-bold text-lg sm:text-xl">
            {friend.name}
          </h2>

          <p className="text-xs font-medium text-[#64748B]">
            {friend.days_since_contact}d ago
          </p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mt-3">
            {friend.tags?.map((tag, index) => (
              <div
                key={index}
                className="rounded-lg text-[#244D3F] font-semibold 
                bg-[#CBFADB]/70 px-3 py-1 text-xs sm:text-sm"
              >
                {tag}
              </div>
            ))}
          </div>
        <div
          className={`badge mt-3 ${
      friend.status === "almost due" ?
       "badge-warning text-white":
       friend.status === "overdue"?
      "badge-error text-white"
      : "bg-[#244D3F] text-white p-3"
  }`}
>
     {friend.status}
    </div>
          
        </div>
      </div>
    </Link>
    
  );
};

export default FriendsCard;