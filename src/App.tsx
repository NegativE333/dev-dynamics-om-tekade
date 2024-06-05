import { useEffect, useState } from 'react';
import './App.css';
import { DayWiseActivity, DeveloperActivity } from './types';
import sampleData from './data/sample-data.json';
import { Navbar } from './components/Navbar';
import { Heading } from './components/Heading';
import { ActivityChart } from './components/ActivityChart';

function App() {
  
  const [data, setData] = useState<DeveloperActivity[]>([]);

  useEffect(() => {
    setData(sampleData.data.AuthorWorklog.rows);
  }, []);

  const filterWeeklyData = (developerActivity: DeveloperActivity): DayWiseActivity[] => {
    const sortedActivities = [...developerActivity.dayWiseActivity].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    return sortedActivities.slice(0, 7).reverse();
  };

  return (
    <div className="h-[100%]">
      <Navbar />
      <Heading />
      <div className='flex flex-col items-center justify-center mt-8 w-full gap-4 px-8'>
        {data.map((d) => (
          <ActivityChart 
            key={d.name}
            developerName={d.name}
            data={filterWeeklyData(d)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
