import { useState } from 'react';
import Modal from './components/Modal';
import './App.css';
import f1 from './assets/f1.png';
import m1 from './assets/m1.png';
import f2 from './assets/f2.png';
import m2 from './assets/m2.png';

const body = ({ charactersData, selectedProfile, setSelectedProfile }) => (
  <div className='characters'>
    {charactersData.map((item) => (
      <div key={item.key} className={selectedProfile === item.key ? 'profile selected' : 'profile'} onClick={() => setSelectedProfile(item.key)}>
        <img src={item.male} alt={item.male} />
        <img src={item.female} alt={item.female} />
      </div>
    ))}
  </div>
);

const footer = ({ selectedProfile, setStartScreen }) => (
  <button className='start-btn' onClick={() => selectedProfile && setStartScreen(false)}>
    Start game
  </button>
);

const App = () => {
  // data
  const charactersData = [
    { male: m1, female: f1, key: 'one' },
    { male: m2, female: f2, key: 'two' },
  ];

  // state
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [showStartScreen, setStartScreen] = useState(true);

  return (
    <div className='App'>
      {showStartScreen && (
        <Modal
          header={<h1>Select Character</h1>}
          body={body({ charactersData, selectedProfile, setSelectedProfile })}
          footer={footer({ selectedProfile, setStartScreen })}
        />
      )}
    </div>
  );
};

export default App;
