import React from "react";

interface errorMessageProps {
    errorMessage: string
}

const UserError:React.FC<errorMessageProps> = ({errorMessage}) => {
    return(
        <div className='w-full h-full flex items-center justify-center bg-white bg-opacity-40 rounded-xl'>
            <p className='text-white text-[3vh] font-poppins'>{errorMessage}</p>
        </div>
    );
}

export default UserError