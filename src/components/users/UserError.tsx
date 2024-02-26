import React from "react";

const UserError:React.FC = () => {
    return(
        <div className='w-full h-full flex items-center justify-center bg-white bg-opacity-40 rounded-xl'>
            <p className='text-white text-[3vh] font-poppins'>Wrong type of the parameter passed to the url. Make sure you put the number</p>
        </div>
    );
}

export default UserError