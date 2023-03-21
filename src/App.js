import './App.css';
import Adresse from './components/Adresse';
import FullName from './components/FullName';
import ProfilePhoto from './components/ProfilePhoto';



function App() {
  return (
    <div className="App">
      <FullName />
      <Adresse/>
      <ProfilePhoto/>

    </div>
  );
}

export default App;

