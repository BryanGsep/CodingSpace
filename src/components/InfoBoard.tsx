import React, { useEffect, useState } from "react";
import NarBar from "./NarBar";

type Props = {
    boards: {
        label: string,
        content: React.ReactNode,
        isDisabled?: boolean,
    }[]
}

const InfoBoard = (props: Props) => {
    const {boards} = props;
    const [selectedBoard, setSelectedBoard] = useState<number>(0);
    const [content, setContent] = useState<React.ReactNode>(boards[0].content);
    const [narBarElements, setNarBarElement] = useState<any[]>([]);

    useEffect(() => {
        const elements = boards.map((board) => {
            return {
                label: board.label,
                status: board.isDisabled ? "disabled" : "normal"
            }
        });
        setNarBarElement(elements);
    }, [boards]);

    useEffect(() => {
        if (boards) {
            setContent(boards[selectedBoard].content);
        }
    }, [boards, selectedBoard]);

    const handleSelect = (index: number) => {
        setSelectedBoard(index);
    }

    return (
        <div 
            className="h-full w-full overflow-y-auto relative border border-inherit rounded-l-lg"
            style={{
                backgroundColor: "#011627",
                border: "#243b4c"
            }}
        >
            <div className="sticky top-0 z-10">
                <NarBar
                    elements={narBarElements}
                    handleClick={handleSelect}
                    selectedElement={selectedBoard}
                />
            </div>
            <div className="flex-1 text-white h-full w-full border-t border-inherit bg-inherit p-5">
                {content}
            </div>
        </div>
    );
}

export default InfoBoard;
