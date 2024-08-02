import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import BloodPressureChart, { findPatientByName } from './BloodPressure';
import Dropdown from './DropDown';
import InfoBox from './InfoBox';
import TemperatureImage from "./images/temperature.png";
import HeartImage from "./images/heartrate.png";
import RespiratoryImage from "./images/respiratoryrate.png";
import HealthCard from './HealthCard';
import DiagnosisList from './DiagnosisList';

function DiagnosisHistory({ patients, name }) {
    const [duration, setDuration] = useState(6);
    const [isOpen, setIsOpen] = useState(false);

    const handleDurationChange = (newDuration) => {
        setDuration(newDuration);
    };

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const patient = findPatientByName(patients, name);
    const Systolic_diastolic = patient.diagnosis_history[0];

    return (
        <div>
            <div className='m-2 ml-2 p-4 bg-white shadow-md rounded-lg graph-card'>
                <div className="flex justify-between items-center">
                    <h1 className='title ml-0 mt-4 mb-5 text-xl'>Diagnosis History</h1>
                    <div className="lg:hidden">
                        <ChevronDown size={24} onClick={toggleOpen} className="cursor-pointer" />
                    </div>
                </div>
                <div className={`transition-max-height duration-300 ease-in-out ${isOpen ? '' : 'max-h-0'} overflow-hidden lg:max-h-none`}>
                    <div className="bg-[#f4f0fe] flex flex-col lg:flex-row rounded-md mb-7">
                        <div className="card flex-[0.78] mr-0 p-4">
                            <div className="header flex justify-between items-center mb-4">
                                <h1 className="title font-bold text-xs lg:text-lg text-gray-700">Blood Pressure</h1>
                                <Dropdown
                                    value={duration}
                                    options={[6, 12, 18, 24, 30, 36]}
                                    onChange={handleDurationChange}
                                />
                            </div>
                            <BloodPressureChart patients={patients} name={name} duration={duration} />
                        </div>
                        <div className='flex flex-row lg:flex-col justify-between p-4 flex-[0.22]'>
                            <InfoBox color="bg-[#ff6384]" title="Systolic" data={Systolic_diastolic.blood_pressure.systolic} />
                            <InfoBox color="bg-[#8c6fe6]" title="Diastolic" data={Systolic_diastolic.blood_pressure.diastolic} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center lg:place-items-start gap-4">
                        <HealthCard image={TemperatureImage} title="Temperature" classname="bg-[#e0f3fa]" unit="°F" data={Systolic_diastolic.temperature} />
                        <HealthCard image={RespiratoryImage} title="Respiratory Rate" classname="bg-[#ffe6f1]" unit="bpm" data={Systolic_diastolic.respiratory_rate} />
                        <HealthCard image={HeartImage} title="Heart Rate" classname="bg-[#ffe6e9]" unit="bpm" data={Systolic_diastolic.heart_rate} />
                    </div>
                </div>
            </div>
            <DiagnosisList patient={patient} />
        </div>
    );
}

export default DiagnosisHistory;
