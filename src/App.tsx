import { useEffect, useState } from 'react';
import './App.css';
import { DeveloperActivity } from './types';
import sampleData from './data/sample-data.json';
import { Navbar } from './components/Navbar';
import { Heading } from './components/Heading';
import { ActivityChart } from './components/ActivityChart';

function App() {
  
  const [data, setData] = useState<DeveloperActivity[]>([]);

  useEffect(() => {
    setData(sampleData.data.AuthorWorklog.rows);
  }, []);

  const filterWeeklyData = (developerActivity : DeveloperActivity) => {
    return developerActivity.dayWiseActivity;
  }

  console.log(data);

  return (
    <div className="h-[100%]">
      <Navbar />
      <Heading />
      <div className='flex items-center justify-center flex-wrap gap-4 mt-8'>
        {data.map((d) => (
          <ActivityChart 
            key={d.name}
            developerName={d.name}
            data={d.dayWiseActivity}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
