import React from 'react';
import { Routes, Route} from 'react-router-dom';

import GeneralTaskView from './GeneralTaskView';
import viewTask from './ViewTask';

export default function Main() {
  return (
    <Routes>
      <Route exact path="/viewTask" component={viewTask} />
    </Routes>
  );
}