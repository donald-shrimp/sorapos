import React, { FC, ReactNode } from "react";
import Image from 'next/image'

type Props = {
    children?: ReactNode;
};

const BaseLayout: FC<Props> = (props) =>{
    return (
        <div className="flex w-full flex-col max-w-[520px]">
            {/* Header */}
            <div className="flex justify-start">
                <div className="pl-[10px]">
                    <Image src="/logo.svg" width={200} height={50} alt="" />
                </div>
            </div>
            {/* Body */}
            <div className="flex-grow">        
                {props.children}
            </div>
    </div>
    );
}

export default BaseLayout;