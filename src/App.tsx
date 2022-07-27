import React from 'react';
import { PomodoroTimer } from './components/pomodoro-timer'

function App(): JSX.Element {
  return (
    <div className="App">
      <PomodoroTimer defaultPomodoroTime={120}/>
    </div>
  );
}

export default App;
