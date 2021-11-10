import React, {FC} from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Header from './componetns/Header/Header';
import Alert from './componetns/Alert/Alert';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

const App: FC = () => {


  const notifyMsg = useSelector((state: RootState) => state.notify.message);
  return (
    <div>
      <Header/>
      {
        notifyMsg === ''
        ?
        ''
        :
        <Alert message={notifyMsg} />
      }
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
      </Switch>
    </div>
  );
}

export default App;