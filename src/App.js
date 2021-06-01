import React,{ useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './store/index.js';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './home/index';
import About from './about/index';
import Head from './common/head/index';
import Login from './login/index.js';
import Register from './register/index.js';
import ClockLoader from 'react-spinners/ClockLoader';


function App() {
  const [Loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 2000);
        }
    , []);
  return (
    <Provider store = { store }>
    { 
    Loading?<ClockLoader css = {{margin:700}} color = {"#969696"} size = {140} loading = {Loading}/>:    
    <BrowserRouter>
          <div>
            <Head/>
            <Route path = '/About' exact component = { About }></Route>
            <Route path = '/' exact component = { Home }></Route>
            <Route path = '/Login' exact component = {Login}></Route>
            <Route path = '/Register' exact component ={Register}></Route>
          </div>
      </BrowserRouter>
    }  
    </Provider>
  );
}

export default App;
