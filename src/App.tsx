import {useState, useEffect } from 'react';

const App: React.FunctionComponent = () => {
  const[data, setData] = useState(undefined)

  const fetchData = async () => {
    const result = await fetch('https://api.covid19api.com/summary')
    const data = result.json()
    console.log('data :>> ', data);
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div><>This  is hotpink!</></div>
  )
};

export default App