import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const totalFlows = 7.400;
const TotalDeposite = totalFlows * 0.35; // 35% of total buys
const TotalWithdraws = totalFlows* 0.65; // 65% of total buys

const data = {
  labels: ['Total Deposite', 'Total Withdraws'],
  datasets: [
    {
      data: [TotalDeposite, TotalWithdraws],
      backgroundColor: ['#fc7100', // Blue for new customers
      '#2b3eb1'],
      hoverBackgroundColor: ['orange', // Blue for new customers
      'blue'],
      borderColor: 'white',
      borderWidth: 0,
      borederShadow: 10, 
      width:4,
    },
  ],
};

export default function PieChart() {
  return (
   <div className='pie'>
       <Doughnut
      data={data}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
          },
          title: {
            display: true,
            text: ` Total Cashflows 7.400`,
            position: 'top',
            font:{
              fontWeight:'bold'
            },
            color:'black',
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                const label = context.label || '';
                const value = context.parsed || 0;
                if (label && value) {
                  return `${label}: ${value} `;
                }
                return '';
              },
            },
          },
        },
      }}
    />
   </div>
  );
}
