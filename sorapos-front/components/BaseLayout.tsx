import React, { FC, ReactNode } from "react";
import Image from 'next/image'

type Props = {
    children?: ReactNode;
};

const BaseLayout: FC<Props> = (props) =>{
    return (
        <div className="flex h-[100vh] w-full flex-col">
            <div className="flex justify-start">
                <div className="pl-[10px]">
                    <Image src="/logo.svg" width={200} height={50} alt="" />
                </div>
            </div>
            <div className="flex-grow">        
                {props.children}
            </div>
    </div>
    );
}

export default BaseLayout;