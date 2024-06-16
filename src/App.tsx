import React, {useEffect, useState} from 'react';
import './App.css';
import AppBar from './components/AppBar';
import WhyChoseUs from './components/WhyChoseUs';
import DownlaodApp from './components/DownlaodApp';
import OurSpace from './components/OurSpace';
import LandingBanner from './components/LandingBanner';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from './store';
import { useSelector } from 'react-redux';
import { fetchData } from './slice';

function App() {

  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   // Define the API URL
  //   const apiUrl = 'https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/data.json';

  //   // Fetch data from the API
  //   fetch(apiUrl)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok ' + response.statusText);
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       // Log the response data
  //       console.log('API Response:', data);
  //       // Set the data to state
  //       setData(data);
  //     })
  //     .catch(error => {
  //       console.error('Fetch error:', error);
  //     });
  // }, []);

  // const dispatch = useDispatch<AppDispatch>();
  // const { data, loading, error } = useSelector((state: RootState) => state.data);

  // useEffect(() => {
  //   dispatch(fetchData());
  // }, [dispatch]);

  return (
    <>
      <AppBar/>
    {/* <div>
      <h1>Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div> */}
      <LandingBanner/>
      <WhyChoseUs/>
      <OurSpace/>
      <DownlaodApp/>
    </>
  );
}

export default App;
