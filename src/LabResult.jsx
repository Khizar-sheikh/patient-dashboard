import { Download } from 'lucide-react'
import React from 'react'

function LabResult({ patient }) {
    console.log(patient)

    const lab_results = patient.lab_results;

    return (
        <div className='shadow-md flex flex-col rounded-lg mt-2 p-4 bg-white h-[45vh] lab_result'>
            <h1 className='font-bold text-lg pt-3 pl-2'>Lab Results</h1>
            <div className='overflow-y-scroll mt-3 diag_list'>
                {lab_results.map((result, index) => (
                    <div key={index} className='flex justify-between items-center hover:bg-gray-100 p-3 mb-2 rounded-lg lab_result'>
                        <div className='text-sm font-medium text-gray-800'>{result}</div>
                        <Download strokeWidth={3} className='h-4 w-4 text-gray-900' />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LabResult;
