import React, { useState, useEffect } from "react";

interface UserDetailsProps {
    id_val: string
}

const UserDetails:React.FC<UserDetailsProps> = ({id_val}) => {

    if (isNaN(id_val)) {
        return (
            <div className='w-full h-full flex items-center justify-center bg-white bg-opacity-40 rounded-xl'>
                <p className='text-white text-[3vh] font-poppins'>Wrong type of the parameter passed to the url. Make sure you put the number</p>
            </div>
        );
    }
    const [userData, setUserData] = useState<any>(null);

    useEffect(() => {
        fetch(`http://localhost:8080/users/${id_val}`)
            .then(response => response.json())
            .then(data => setUserData(data))
            .catch(error => console.error('Error fetching user data:', error));
        console.log(userData)
    }, [id_val])

    if (!userData) {
        return (
            <div className='w-full h-full flex items-center justify-center bg-white bg-opacity-40 rounded-xl'>
                <p className='text-white text-[3vh] font-poppins'>Loading...</p>
            </div>
        );
    }

    return(
        <div className='w-full h-full flex items-center justify-center bg-white bg-opacity-40 rounded-xl'>
            <p className='text-white text-[3vh] font-poppins'>User id: {userData}</p>
            <p className='text-white text-[3vh] font-poppins'>Email: {userData.email}</p>
            <p className='text-white text-[3vh] font-poppins'>First Name: {userData.first_name}</p>
            <p className='text-white text-[3vh] font-poppins'>Second Name: {userData.last_name}</p>
            <img src=""></img>
        </div>

    );
}

export default UserDetails