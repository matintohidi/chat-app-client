import React from 'react';
// packages dependencies
import { WalletMoney , Wifi , Timer1 } from 'iconsax-react';

const Features : React.FC = () => {
    return (
        <section className="px-12 py-11">
            <h1 className="font-PoppinsBold text-primaryText text-3xl text-center lg:text-4xl">Features for a better experience</h1>

            {/*feature cards*/}
            <div className="flex flex-col gap-8 mt-11 lg:mt-19 lg:flex-row xl:gap-13">
                <div className="flex flex-col items-center lg:flex-row lg:gap-[22px] lg:items-start">
                    <span className="p-3.5 rounded-full bg-[rgba(186,65,65,0.09);]">
                        <WalletMoney
                            color="#BA4141"
                            variant="Bold"
                            size="32"
                        />
                    </span>

                    <div className="flex flex-col items-center mt-[15px] lg:items-start lg:mt-0">
                        <h1 className="text-[22px] text-primaryText font-InterExtraBold">Free communicate</h1>

                        <p className="font-InterRegular text-base text-primaryText leading-6 mt-[10px] text-center lg:text-left">
                            Stay connected with friends and family for free with our easy-to-use communicate chat app.
                            Download now!
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center lg:flex-row lg:gap-[22px] lg:items-start">
                    <span className="p-3.5 rounded-full bg-[rgba(0,117,255,0.09);]">
                        <Wifi
                            color="#0075FF"
                            variant="Bold"
                            size="32"
                        />
                    </span>

                    <div className="flex flex-col items-center mt-[15px] lg:items-start lg:mt-0">
                        <h1 className="text-[22px] text-primaryText font-InterExtraBold">Keep safe & private</h1>

                        <p className="font-InterRegular text-base text-primaryText leading-6 mt-[10px] text-center lg:text-left">
                            Keep your chats safe and private with our encrypted chat app.
                            Download now for secure messaging!
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center lg:flex-row lg:gap-[22px] lg:items-start">
                    <span className="p-3.5 rounded-full bg-[rgba(234,204,45,0.09);]">
                        <Timer1
                            color="#EACC2D"
                            variant="Bold"
                            size="32"
                        />
                    </span>

                    <div className="flex flex-col items-center mt-[15px] lg:items-start lg:mt-0">
                        <h1 className="text-[22px] text-primaryText font-InterExtraBold">Save your time</h1>

                        <p className="font-InterRegular text-base text-primaryText leading-6 mt-[10px] text-center lg:text-left">
                            Chat efficiently and save time with our app's pre-written messages and templates.
                            Download now!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;