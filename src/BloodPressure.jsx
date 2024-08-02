import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export function findPatientByName(patients, name) {
    return patients.find(person => person.name === name);
}

const BloodPressureChart = ({ patients, name, duration }) => {

    const patient = findPatientByName(patients, name);
    
    const labels = patient.diagnosis_history.slice(0, duration).reverse().map(entry => `${entry.month.slice(0, 3)}, ${entry.year}`);
    const systolicData = patient.diagnosis_history.slice(0, duration).reverse().map(entry => entry.blood_pressure.systolic.value);
    const diastolicData = patient.diagnosis_history.slice(0, duration).reverse().map(entry => entry.blood_pressure.diastolic.value);

    // Create gradient backgrounds for the lines
    const createGradient = (ctx, color1, color2) => {
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, color1);
        gradient.addColorStop(1, color2);
        return gradient;
    };

    const ctx = document.createElement('canvas').getContext('2d');

    const data = {
        labels,
        datasets: [
            {
                label: 'Systolic',
                data: systolicData,
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: createGradient(ctx, 'rgba(255, 99, 132, 0.4)', 'rgba(255, 99, 132, 0.1)'),
                borderWidth: 2,
                borderCapStyle: 'round',
                borderJoinStyle: 'round',
                tension: 0.4,
                pointRadius: 5,
                pointBackgroundColor: "rgba(255, 99, 132, 1)",
                pointHoverRadius: 7,
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255 , 99 ,)',
                fill: true
            },
            {
                label: 'Diastolic',
                data: diastolicData,
                borderColor: 'rgba(140 , 111 ,230 ,  1)',
                backgroundColor: createGradient(ctx, 'rgba(140 , 111 ,230 ,  0.4)', 'rgba(140 , 111 ,230 ,  0.1)'),
                borderWidth: 2,
                borderCapStyle: 'round',
                borderJoinStyle: 'round',
                tension: 0.4,
                pointBackgroundColor: "rgba(140 , 111 ,230 ,  1)",
                pointRadius: 5,
                pointHoverRadius: 7,
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(54, 162, 235)',
                fill: true
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        },
        scales: {
            y: {
                suggestedMin: 60,
                suggestedMax: 200,
                grid: {
                    display: true
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        },
    };

    return <Line style={{ backgroundColor: "#f4f0fe", borderRadius: "20px", fontSize: 'small', padding: "10px" }} data={data} options={options} />;
};

export default BloodPressureChart;
