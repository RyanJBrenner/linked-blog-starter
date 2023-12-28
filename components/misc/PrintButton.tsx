// components/PrintButton.tsx

import React from 'react';

const PrintButton: React.FC = () => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <button onClick={handlePrint} className="hide bg-transparent border-2 border-gray-400/50 hover:border-transparent hover:bg-gray-400/50 text-gray-900 px-4 text-xs py-2 rounded mt-5">
            Print this Page
        </button>
    );
};

export default PrintButton;
