import React from 'react';
// props interface
interface PropsImage {
    profile: string | undefined
    name: string | undefined
}
export const ProfileImage : React.FC<PropsImage> = ({ profile , name }) => {
    return (
        <img src={`http://localhost:5000/images/${profile}`}
             alt={`${name} Profile`}
             className="w-14 h-14 rounded-[14px] shadow-2xl object-cover"
        />
    )
}

interface PropsDefault {
    name: string
}

export const ProfileDefault : React.FC<PropsDefault> = ({ name }) => {
    return (
        <div className="w-14 h-14 profileBox bg-primary font-Asap text-white rounded-[14px] text-[22px] flex justify-center items-center select-none capitalize">
            <span>{name[0]}</span>
        </div>
    )
}