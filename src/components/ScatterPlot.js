import React, { useState,useEffect } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Cell} from 'recharts';


const ScatterChartGraph = () => {
    
    const [asdata, setAsdata] = useState([])

    // Fetch data --> 1.)
    useEffect(() => {

        // Fetch the Payroll Data related to the logged in User
        fetch(`/api/asdata`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: `Token ${localStorage.getItem('token')}`,
            },
        })
        .then(res => res.json())
        .then(data => {
            setAsdata(data)
            //console.log(data)
          });
    }, []);

    // --> 2.)
    const runItemsFidelity = asdata.map((run) =>
        <div key={run.id} className="flex justify-between p-2 text-lg text-base">
            <div>
                {run.fidelity} 
            </div>
         </div>)
    const runItemsFrequency = asdata.map((run) =>
    <div key={run.id} className="flex justify-between p-2 text-lg text-base">
        <div>
             {run.frequency} 
        </div>
     </div>     
    );

        
  // Sample data
  const data = [
      { x: runItemsFidelity.map(x => x.fidelity), y: runItemsFrequency.map(y => y.frequency), colourType: "#FFBB28" },
      { x: runItemsFidelity[1], y: runItemsFrequency[1], colourType: 'rgba(214, 0, 0, 0.75)' },
      { x: .35, y: 15, colourType: 'rgba(214, 0, 0, 0.75)' },
      { x: .4, y: 35, colourType: 'rgba(214, 0, 0, 0.75)' },
      { x: .5, y: 45, colourType: 'rgba(232, 252, 0, 0.75)' },
      { x: .6, y: 25, colourType: 'rgba(232, 252, 0, 0.75)' },
      { x: .45, y: 35, colourType: 'rgba(232, 252, 0, 0.75)' },
      { x: .55, y: 45, colourType: 'rgba(232, 252, 0, 0.75)' },
      { x: .7, y: 17, colourType: "#FFBB28" },
      { x: .8, y: 32, colourType: "#FFBB28" },
      { x: 1, y: 75, colourType: "#FFBB28" },
  ];

  return (
      <ScatterChart width={850} height={300}>
          
          <XAxis type="number" dataKey="x" axisLine={false} tickLine={false} hide/>
          <YAxis type="number" dataKey="y" axisLine={false} tickLine={false} hide/>
          <ZAxis range={[500, 120]} axisLine={false} tickLine={false} hide/>
          <Scatter data={data}>
            {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.colourType ?? "#8884d8"} />
            ))}
            </Scatter>
      </ScatterChart>
  );
}

export default ScatterChartGraph;