import React from 'react';
import { useParams } from 'react-router-dom';
import UserWelcome from '../components/users/UserWelcome';
import UserDetails from '../components/users/UserDetails';
import UserError from '../components/users/UserError';

const Users: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const id_num:number = Number(id);
    if (isNaN(id_num) || id_num < 1) {
        return (
            <div className='w-screen h-screen bg-gradient-to-tr from-zinc-100 via-black to-zinc-100 grid grid-cols-2 justify-center items-center p-[10vh] gap-[4vh]'>
                <UserWelcome/>
                <UserError errorMessage="Wrong type of the parameter passed to the url. Make sure you put the positive integer."/>
            
            </div>
        );
    }
    return (
      
        <div className='w-screen min-h-screen bg-gradient-to-tr from-zinc-100 via-black to-zinc-100 grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 justify-center items-center p-[10vh] gap-[4vh] py-[2vh]'>
            <UserWelcome/>
            <UserDetails id_val={id}/>
            
        </div>
      
    );
  }

export default Users