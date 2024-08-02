import React, {  useState } from 'react';
import { MoreHorizontal, Search } from 'lucide-react';

function PatientsList({ patients, name }) {
    const [isOpen, setIsopen] = useState(true);

    function handleClick() {
        setIsopen(!isOpen);
    }

    return (
        <aside className={`patient-list lg:h-[178vh] shadow-md flex flex-col rounded-xl m-2 overflow-y-scroll overflow-x-hidden bg-white`}>
            <div className='flex justify-between items-center p-5'>
                <div className="title text-lg ml-0">Patients</div>
                <div><Search size={16} onClick={handleClick} className="cursor-pointer" /></div>
            </div>
            <div className={`transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-[1000px]' : 'max-h-0'} overflow-hidden`}>
                {patients.map(patient => (
                    <div key={patient.name} className={`flex items-center justify-between p-5 hover:bg-[#d8fcf7] ${patient.name === name ? "bg-[#d8fcf7]" : ""}`}>
                        <div className="flex items-center space-x-2">
                            <div className="image h-8 w-8">
                                <img src={patient.profile_picture} alt="" />
                            </div>
                            <div className="patientinfo text-xs">
                                <div className="font-bold">{patient.name}</div>
                                <div className="text-gray-500 text-xs">{`${patient.gender} , ${patient.age}`}</div>
                            </div>
                        </div>
                        <div className="self-start">
                            <MoreHorizontal size={20} />
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
}

export default PatientsList;
