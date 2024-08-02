import React from "react";
import Button from "./Button";

type PreviewHeaderProps = {
    buttons: {
        label: string,
        handleClick: any,
        theme?: any,
    }[]
}

const PreviewHeader = (props : PreviewHeaderProps) => {
    const { buttons } = props;
    return (
        <div 
            className="flex justify-between p-5 border-inherit border-1 w-full h-8 items-center"
            style={{backgroundColor: "#011627"}}
        >
            <div className="text-white text-m">Preview</div>
            <div>
                {buttons.map((button, index) => {
                    return (
                        <Button
                            key={index}
                            label={button.label}
                            handleClick={button.handleClick}
                            theme={button.theme}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default PreviewHeader;
