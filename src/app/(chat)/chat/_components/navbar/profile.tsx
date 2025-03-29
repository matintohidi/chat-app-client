import Image from "next/image";
import React from "react";

interface PropsImage {
  profile: string | undefined;
  name: string | undefined;
}

export const ProfileImage: React.FC<PropsImage> = ({ profile, name }) => {
  return (
    <Image
      src={`http://localhost:1337/images/${profile}`}
      alt={`${name} Profile`}
      className="w-12 h-12 sm:w-14 sm:h-14 rounded-[14px] shadow-2xl object-cover"
      width={56}
      height={56}
    />
  );
};

interface PropsDefault {
  name: string;
}

export const ProfileDefault: React.FC<PropsDefault> = ({ name }) => {
  return (
    <div className="w-14 h-14 profileBox bg-primary font-Asap text-white rounded-[14px] text-[22px] flex justify-center items-center select-none capitalize">
      <span>{name[0]}</span>
    </div>
  );
};
