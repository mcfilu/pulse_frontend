import React from 'react';

// Home page, with nice background and 2 headings
const Home:React.FC = () => {
    return (
        <div className='w-screen h-screen bg-gradient-to-tr from-zinc-100 via-black to-zinc-100 flex flex-col justify-center items-center'>
            <h1 className='text-white text-[3vh] font-poppins'>Welcome to the Pulse.io Front-End Application</h1>
            <h2 className='text-white text-[3vh] mt-[2vh] font-poppins'>In order to see the users details please go to: /users/id </h2>
          </div>
        
    );
  }

export default Home