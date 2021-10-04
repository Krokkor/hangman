import './App.css';
import Main from './components/Main';
import InfoBox from './components/InfoBox';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App container-flex row text-center">
      <div className="col-3 d-inline-block align-items-center text-center">
        <InfoBox />
      </div>
      <div className="col d-inline-block">
        <Main />
      </div>
    </div>
  );
}

export default App;
