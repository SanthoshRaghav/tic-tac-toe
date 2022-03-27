import { useState } from 'react';
import Modal from './components/Modal';
import GameBoard from './components/GameBoard';
import './App.css';
import f1 from './assets/f1.png';
import m1 from './assets/m1.png';
import f2 from './assets/f2.png';
import m2 from './assets/m2.png';

const body = ({ charactersData, selectedProfile, setSelectedProfile }) => (
  <div className='characters'>
    {charactersData.map((item) => (
      <div key={item.id} className={selectedProfile === item.id ? 'profile selected' : 'profile'} onClick={() => setSelectedProfile(item.id)}>
        <img src={item.maleAvatar} alt={item.maleId} />
        <img src={item.femaleAvatar} alt={item.femaleId} />
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
  // state
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [showStartScreen, setStartScreen] = useState(true);

  // data
  const charactersData = [
    { maleId: 'm1', maleAvatar: m1, femaleId: 'f1', femaleAvatar: f1, id: 'one' },
    { maleId: 'm2', maleAvatar: m2, femaleId: 'f2', femaleAvatar: f2, id: 'two' },
  ];
  const players = charactersData.find((item) => item.id === selectedProfile);

  return (
    <div className='App'>
      {showStartScreen && (
        <Modal
          header={<h1>Select Character</h1>}
          body={body({ charactersData, selectedProfile, setSelectedProfile })}
          footer={footer({ selectedProfile, setStartScreen })}
        />
      )}
      <div className='gameboard-container'>{players && <GameBoard cellCount={9} players={players} />}</div>
    </div>
  );
};

export default App;
