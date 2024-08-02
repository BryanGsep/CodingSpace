"use client";
import CodePlayground from '../components/CodePlayground';
import './globals.css';
import InfoBoard from '@/components/InfoBoard';

export default function Home() {
    const boards = [
        {
            label: "Instruction",
            content: <div>This is the content for Instruction</div>,
            isDisabled: false,
        },
        {
            label: "Solution",
            content: <div>This is the content for Solution</div>,
            isDisabled: false,
        },
        {
            label: "Dicussion",
            content: <></>,
            isDisabled: true,
        },
    ];

    return (
        <div className="flex justify-center items-center h-screen w-screen bg-gray-100">
                <InfoBoard
                    boards={boards}
                />
                <CodePlayground 
                    dependencies={
                        {
                            "react": "^18.2.0",
                            "react-dom": "^18.2.0",
                            "sass": "^1.77.8",
                            "scss": "^0.2.4"
                        }
                    }
                    devDependencies={
                        {
                            "@types/react": "^18.0.28",
                            "@types/react-dom": "^18.0.11",
                            "typescript": "^4.9.5",
                            "react-scripts": "^5.0.1",
                        }
                    }
                />
        </div>
    );
}
