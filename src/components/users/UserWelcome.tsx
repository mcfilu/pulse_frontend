import React from "react";

const UserWelcome:React.FC = () => {
    return(
        <div className='w-full h-full flex items-center justify-center bg-white bg-opacity-40 rounded-xl'>
            <p className='text-white text-[3vh] font-poppins'>Please see the User information in the second box! Changing the user_id in the url results in the refreshment of the displayed data!</p>
        </div>
    );
}

export default UserWelcome