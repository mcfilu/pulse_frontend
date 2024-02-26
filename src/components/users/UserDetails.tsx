import React, { useState, useEffect } from "react";
import UserError from "./UserError";


interface UserDetailsProps {
    id_val: string
}

const UserDetails:React.FC<UserDetailsProps> = ({id_val}) => {

    
    const [userData, setUserData] = useState<any>(null);
    const [apiError, setApiError] = useState<boolean>(false);

    useEffect(() => {
        fetch(`http://localhost:8080/users/${id_val}`)
            .then(response => {
                if (!response.ok) {
                    setApiError(true);
                }
                return response.json();
            })
            .then(data => setUserData(data))
            .catch(error => {
                console.error('Error fetching user data:', error); 
                setApiError(true);
            });

    }, [id_val])

    if (!userData) {
        return (
            <div className='w-full h-full flex items-center justify-center bg-white bg-opacity-40 rounded-xl'>
                <p className='text-white text-[3vh] font-poppins'>Loading...</p>
            </div>
        );
    }

    if (apiError) return <UserError errorMessage="There is an error coming from the back-end response."/>

    return(
        <div className='w-full h-full flex flex-col items-center justify-center bg-white bg-opacity-40 rounded-xl'>
            <img className="rounded-full" src={userData.avatar}></img>
            <p className='text-white text-[3vh] font-poppins mt-[5vh]'>User id: {userData.id}</p>
            <p className='text-white text-[3vh] font-poppins'>Email: {userData.email}</p>
            <p className='text-white text-[3vh] font-poppins'>First Name: {userData.first_name}</p>
            <p className='text-white text-[3vh] font-poppins'>Second Name: {userData.last_name}</p>
            
        </div>

    );
}

export default UserDetails