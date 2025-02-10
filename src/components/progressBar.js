import React, { useEffect, useState } from "react";

const ProgressBar = ({ name, percentage }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let timer;
        if (progress < percentage) {
            timer = setInterval(() => {
                setProgress((prev) => Math.min(prev + 1, percentage));
            }, 20); // Adjust speed here
        }
        return () => clearInterval(timer);
    }, [progress]);

    return (
        <div className="w-full max-w-6xl mt-4">
            <div className="flex justify-between items-center w-full">
                <div className="text-sm font-medium text-gray-700 mb-1">
                    {name}
                </div>
                <div className="text-right text-sm font-medium text-gray-700 mb-1">
                    {progress}%
                </div>
            </div>
            <div className="w-full bg-gray-200 rounded h-6">
                <div
                    className="bg-blue-600 h-6 rounded"
                    style={{
                        width: `${progress}%`,
                        transition: "width 0.2s ease",
                    }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;
