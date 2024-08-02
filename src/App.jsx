import React from 'react';
import { useGetPatientDataQuery } from './redux/api/patientApi';
import PatientsList from './PatientsList';
import DiagnosisHistory from './DiagnosisHistory';
import "./App.css"
import PatientInfo from './PatientInfo';
import Navbar from './Navbar';
import DashboardSkeleton from './DashboardSkeleton';
import { AlertTriangle } from 'lucide-react';


function App() {
  const { data: patients, error, isLoading } = useGetPatientDataQuery();

  if (isLoading) return <div><DashboardSkeleton /></div>;
  if (error) {
    return <div className="flex  items-center justify-center  text-red-500 h-screen w-[full]">
<div className='bg-red-200 h-[200px] w-[400px] flex items-center justify-center rounded-md'>
<AlertTriangle className="w-12 h-12 mr-2" />
      <span>{"Something Went Wrong"}</span>
</div>
    </div>
  }

  const name = "Jessica Taylor"
  return (
    <main className='bg-gray-100 pt-5 p-2'>
      <div>
        <Navbar />
      </div>
      <div className=' flex flex-col lg:flex-row'>
        <div className='lg:w-[20vw] w-full'>
          <PatientsList patients={patients} name={name} />
        </div>
        <div className='lg:w-[60vw] w-full mr-1'>
          <DiagnosisHistory patients={patients} name={name} />
        </div>
        <div className='lg:w-[20vw] w-full'>
          <PatientInfo patients={patients} name={name} />
        </div>
      </div>
    </main>
  );
}

export default App;
