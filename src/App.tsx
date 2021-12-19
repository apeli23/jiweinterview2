import { Global, css } from '@emotion/react';
import {useState, useEffect } from 'react';
import CountryList from './components/CountryList';
import GlobalInfo from './components/GlobalInfo'
import type {ResponseData} from './types'

const App: React.FunctionComponent = () => {
  const[data, setData] = useState<ResponseData | undefined>(undefined);
  
  const fetchData = async () => {
    const result = await fetch('https://api.covid19api.com/summary')
    const data: ResponseData = await result.json()
    setData(data)
    console.log('data :>> ', data);
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <Global 
      styles = {css`
      body  {
        background-color: #f1f1f1;
        color: #000;
      }`}/> 
      {
      data ? 
        (
          <>
            <GlobalInfo 
              newConfirmed = {data?.Global.NewConfirmed}
              newDeaths = {data?.Global.NewDeaths}
              newRecovered = {data?.Global.NewRecovered}
            /> 

            <CountryList countries={data.Countries}/>
          </>
        ): ("loading...")
        }
    </div>
  )
};

export default App