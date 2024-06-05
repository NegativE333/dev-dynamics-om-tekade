import { useEffect, useState } from 'react';
import './App.css';
import { DeveloperActivity } from './types';
import sampleData from './data/sample-data.json';
import { Navbar } from './components/Navbar';
import { Heading } from './components/Heading';

function App() {
  
  const [data, setData] = useState<DeveloperActivity[]>([]);

  useEffect(() => {
    setData(sampleData.data.AuthorWorklog.rows);
  }, []);

  console.log(data);

  return (
    <div className="h-[100%]">
      <Navbar />
      <Heading />
    </div>
  );
}

export default App;
