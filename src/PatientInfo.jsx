import React, { useState } from 'react';
import { Calendar, ChevronDown, Phone, ShieldCheck } from 'lucide-react';
import LabResult from './LabResult';
import { findPatientByName } from './BloodPressure';

function PatientInfo({ patients, name }) {
    const [isOpen, setIsOpen] = useState(false);
    const patient = findPatientByName(patients, name);

    function formatDate(dateString) {
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        const [month, day, year] = dateString.split('/');

        return `${months[parseInt(month) - 1]} ${parseInt(day)}, ${year}`;
    }

    const formattedDate = formatDate(patient.date_of_birth);

    const ProfileInfoBox = ({ label, data, Icon }) => {
        return (
            <div className="flex items-center space-x-2 p-2 pt-5 text-xs">
                <div className="bg-gray-100 p-2 rounded-full">
                    <Icon className="h-5 w-5 text-gray-500" />
                </div>
                <div>
                    <div className="text-sm text-gray-500">{label}</div>
                    <div className="font-semibold text-lg">{data}</div>
                </div>
            </div>
        );
    };

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <aside>
            <div className="patient-list shadow-md flex flex-col rounded-lg mt-2 py-5 bg-white lg:h-[130vh] ">
                <div className="flex flex-col items-center mb-3">
                    <img className='p-7 h-[10rem] w-[10rem]' src={patient.profile_picture} alt="" />
                    <h1 className='text-center font-bold text-lg md:text-xl lg:text-2xl'>{patient.name}</h1>
                </div>
                <div className='flex justify-between items-center px-5 lg:hidden'>
                    <h2 className='text-lg font-semibold'>Patient Details</h2>
                    <ChevronDown 
                        size={24} 
                        className='cursor-pointer' 
                        onClick={handleToggle} 
                    />
                </div>
                <div className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
                    <ProfileInfoBox label={"Date of Birth"} data={formattedDate} Icon={Calendar} />
                    <ProfileInfoBox label={"Gender"} data={patient.gender} Icon={Phone} />
                    <ProfileInfoBox label={"Contact Info"} data={patient.phone_number} Icon={Phone} />
                    <ProfileInfoBox label={"Emergency Contacts"} data={patient.emergency_contact} Icon={Phone} />
                    <ProfileInfoBox label={"Insurance Provider"} data={patient.insurance_type} Icon={ShieldCheck} />
                </div>
                <div className='bg-[#01f0d0] text-sm font-semibold flex justify-center p-[7px] mt-3 rounded-xl mx-5 hover:bg-[#01f0d090]'>
                    <button className=''>
                        Show All Information
                    </button>
                </div>
            </div>
            <div>
                <LabResult patient={patient} />
            </div>
        </aside>
    )
}

export default PatientInfo;
