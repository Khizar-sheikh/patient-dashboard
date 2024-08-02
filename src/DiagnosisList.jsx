import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function DiagnosisList({ patient }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='bg-white m-2 p-4 rounded-lg w-[98%] shadow-md'>
            <div className='flex justify-between items-center'>
                <h1 className='title my-7 mt-1 mx-2 text-xl text-gray-800'>Diagnosis List</h1>
                <ChevronDown 
                    size={24} 
                    className='block lg:hidden cursor-pointer' 
                    onClick={handleToggle} 
                />
            </div>
            <div className={`bg-gray-200 rounded-3xl p-3 font-sans font-bold text-gray-800 text-sm px-5 mb-2 ${isOpen ? 'block' : 'hidden'} lg:block`}>
                <div className='flex justify-between'>
                    <div className='w-[40%]'>Problem/Diagnosis</div>
                    <div className='w-[40%]'>Description</div>
                    <div className='w-[20%] text-center'>Status</div>
                </div>
            </div>
            <div className={`h-[120px] overflow-y-scroll diag_list ${isOpen ? 'block' : 'hidden'} lg:block`}>
                {patient.diagnostic_list.map((list, index) => (
                    <div key={index} className='flex justify-between items-center hover:bg-gray-100 p-3 font-sans text-gray-800 text-sm px-5 border-b border-gray-200'>
                        <div className='w-[40%]'>{list.name}</div>
                        <div className='w-[40%]'>{list.description}</div>
                        <div className='w-[20%] text-center'>{list.status}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DiagnosisList;
