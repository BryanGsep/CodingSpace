import React from "react";
import { useEffect, useState } from 'react';


type Props = {
    label: string;
    handleClick: () => void;
    theme?: "loading" | "warning" | "normal";
}

const Button = (props: Props) => {
    const [clientSide, setClientSide] = useState(false);

    const { label, handleClick, theme = "normal" } = props;

    useEffect(() => {
        setClientSide(true);
    }, []);

    const themeClasses = {
        loading: "bg-blue-500 hover:bg-blue-600 active:bg-blue-700",
        warning: "bg-red-500 hover:bg-red-600 active:bg-red-700",
        normal: "bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700"
    };

    return (
            <button
                className={`text-white py-2 px-4 rounded min-w-16 flex justify-center ${themeClasses[theme]}`}
                onClick={clientSide ? handleClick : handleClick}
            >
                {theme === "loading" ? (
                    <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8V4a8 8 0 01-8 8z"></path>
                        </svg>
                    </>
                ) : (
                    <span>{label}</span>
                )}
            </button>
    );
}

export default Button;