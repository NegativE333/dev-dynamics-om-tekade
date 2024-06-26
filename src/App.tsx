import { useEffect, useState } from 'react';
import './App.css';
import { DayWiseActivity, DeveloperActivity } from './types';
import sampleData from './data/sample-data.json';
import { Navbar } from './components/Navbar';
import { Heading } from './components/Heading';
import { ActivityChart } from './components/ActivityChart';
import { Filter } from './components/Filter';
import { Footer } from './components/Footer';

function App() {
  
  const [data, setData] = useState<DeveloperActivity[]>([]);
  const [filter, setFilter] = useState<string>("7 Days");

  useEffect(() => {
    setData(sampleData.data.AuthorWorklog.rows);
  }, []);

  const filterWeeklyData = (developerActivity: DeveloperActivity): DayWiseActivity[] => {
    const sortedActivities = [...developerActivity.dayWiseActivity].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }).slice(0, 7).reverse();
    
    if(filter === "7 Days"){
      return sortedActivities;
    }
    else if (filter === "all") {
      return developerActivity.dayWiseActivity;
    } else {
      return sortedActivities.map(day => ({
        ...day,
        items: {
          children: day.items.children.filter(item => item.label === filter),
        },
      }));
    }
  };
  

  const handleFilterChange = (filter: string) => {
    setFilter(filter);
  }

  return (
    <div className="h-[100%]">
      <Navbar />
      <Heading />
      <div className='flex items-center justify-center'>
        <Filter 
          onFilterChange={handleFilterChange}
          currFilter={filter}
        />  
      </div>
      <div className='flex flex-col items-center justify-center w-full gap-4 px-8'>
        {data.map((d) => (
          <>
            <ActivityChart 
              key={d.name}
              developerName={d.name}
              data={filterWeeklyData(d)}
            />
            <hr className="w-[95%] sm:w-[80%] md:w-[70%] h-0.5 mx-auto bg-gray-300 border-0 rounded my-2 md:my-4" />
          </>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;