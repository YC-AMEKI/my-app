import './App.css';
import AudioRecorder from './AudioRecorder';
import Dial from './Dial';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React 音频录制示例</h1>
        <AudioRecorder />
        <h1>React Dial Component</h1>
        <Dial />
      </header>
    </div>
  );
}

export default App;
