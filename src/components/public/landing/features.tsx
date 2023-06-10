import React from 'react';
// packages dependencies
import { WalletMoney , Wifi , Timer1 } from 'iconsax-react';

const Features : React.FC = () => {
    return (
        <section className="mx-12 my-11">
            <h1 className="font-PoppinsBold text-primaryText text-3xl text-center">Features for a better experience</h1>

            {/*feature cards*/}
            <div className="flex flex-col space-y-8 mt-6">
                <div className="flex flex-col px-6 py-4 shadow-lg rounded-md">
                    <div className="flex items-center space-x-3 mb-2">
                        <span className="p-2 rounded-full bg-[rgba(186,65,65,0.09);]">
                            <WalletMoney
                                color="#BA4141"
                                variant="Bold"
                                size="20"
                            />
                        </span>

                        <h1 className="text-base text-primaryText font-InterExtraBold">Free communicate</h1>
                    </div>

                    <p className="font-InterRegular text-sm text-primaryText leading-6">
                        Stay connected with friends and family for free with our easy-to-use communicate chat app.
                        Download now!
                    </p>
                </div>

                <div className="flex flex-col px-6 py-4 shadow-lg rounded-md">
                    <div className="flex items-center space-x-3 mb-2">
                        <span className="p-2 rounded-full bg-[rgba(0,117,255,0.09);]">
                            <Wifi
                                color="#0075FF"
                                variant="Bold"
                                size="20"
                            />
                        </span>

                        <h1 className="text-base text-primaryText font-InterExtraBold">Keep safe & private</h1>
                    </div>

                    <p className="font-InterRegular text-sm text-primaryText leading-6">
                        Keep your chats safe and private with our encrypted chat app.
                        Download now for secure messaging!
                    </p>
                </div>

                <div className="flex flex-col px-6 py-4 shadow-lg rounded-md">
                    <div className="flex items-center space-x-3 mb-2">
                        <span className="p-2 rounded-full bg-[rgba(234,204,45,0.09);]">
                            <Timer1
                                color="#EACC2D"
                                variant="Bold"
                                size="20"
                            />
                        </span>

                        <h1 className="text-base text-primaryText font-InterExtraBold">Save your time</h1>
                    </div>

                    <p className="font-InterRegular text-sm text-primaryText leading-6">
                        Chat efficiently and save time with our app's pre-written messages and templates.
                        Download now!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Features;