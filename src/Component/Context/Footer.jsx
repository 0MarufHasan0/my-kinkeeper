import React from 'react';
import instagramImg from '@/assets/instagram.png'
import twitterImg from '@/assets/twitter.png'
import facebookImg from '@/assets/facebook.png'
import Image from 'next/image';
const Footer = () => {
    return (
        <div>
            <footer className='bg-[#244D3F]' >
           <div className="footer footer-horizontal footer-center text-primary-content p-10">
  <aside>
   
    <h2 className="font-bold text-4xl"> KeenKeeper</h2>
    <p className='font-semibold'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a>

        <Image src={instagramImg} alt="Instagram" width="24" height="24" />  
      </a>
      <a>
        <Image src={twitterImg} alt="Twitter" width="24" height="24" />
      </a>
      <a>
        <Image src={facebookImg} alt="Facebook" width="24" height="24" />
      </a>
    </div>
  </nav>


  </div>
    <div className=' container mx-auto border-t border-gray-500'>
    
    <div className='flex flex-col md:flex-row justify-between items-center gap-3 text-white py-4 text-sm' >

        <p className='text-center md:text-left'>Copyright © {new Date().getFullYear()} - All right reserved</p>

        <div className='flex flex-wrap justify-center md:justify-end gap-3 text-center md:text-right'>
            
            <p>Privacy Policy  </p>
            <p> Terms of Service </p>
            <p>Cookies</p>
        </div>
    </div>
  </div>
</footer> 
        </div>
    );
};

export default Footer;
    