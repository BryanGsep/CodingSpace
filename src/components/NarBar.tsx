import React from "react";
import { useEffect, useState } from 'react';

type Props = {
    elements: {
        label: string,
        status: "normal" | "disabled";
    }[]
    handleClick: any;
    selectedElement: number
}

const NarBar = (props: Props) => {
    const { elements, handleClick, selectedElement } = props;
    const [clientSide, setClientSide] = useState(false);

    useEffect(() => {
        setClientSide(true);
    }, []);

    const selectedTheme = "border-orange-300 border-b-2";

    const themeClass = {
        normal: "text-white hover:bg-slate-800",
        disabled: "text-gray-400 cursor-not-allowed",
    }

    return (
        <div className="flex px-4 justify-start gap-6 border-inherit border-1 w-full items-center bg-inherit">
            {
                elements.map((element, index) => {
                    return (
                        <div
                            className={`text-sm font-thin min-h-14 content-center ${themeClass[element.status]} ${selectedElement === index ? selectedTheme : ""}`}
                            key={index}
                            onClick={clientSide && element.status === "normal" ? () => handleClick(index) : undefined}
                        >
                            {element.label}
                        </div>
                    );
                })
            }
        </div>
    )
}

export default NarBar;
