import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import InputChipSet from './components/Chip';
import AutocompleteInput from './components/Chip';
import AutocompleteChipInput from './components/Chip';

function App() {
  return (
    <div className="text-xl bg-gray-300">
      {/* <List /> */}
      <AutocompleteChipInput />
    </div>
  );
}

export default App;

// import React, { useState } from 'react';
// import Chip from './components/Chip';

// const animalNames = [
//   'Lion', 'Tiger', 'Bear', 'Elephant', 'Giraffe', 'Zebra', 'Kangaroo', 'Penguin', 'Cheetah', 'Panda',
//   'Koala', 'Hippopotamus', 'Gorilla', 'Raccoon', 'Ostrich', 'Dolphin', 'Hawk', 'Jaguar', 'Leopard', 'Chameleon',
//   'Squirrel', 'Penguin', 'Lynx', 'Koala', 'Platypus', 'Armadillo', 'Peacock', 'Ocelot', 'Octopus', 'Moose',
//   'Meerkat', 'Pangolin', 'Quokka', 'Rattlesnake', 'Red panda', 'Salmon', 'Seahorse', 'Sloth', 'Tarantula', 'Vulture',
//   'Wallaby', 'Walrus', 'Wombat', 'Yak', 'Zebra', 'Albatross', 'Antelope', 'Bison', 'Baboon', 'Cobra',
//   'Dingo', 'Frog', 'Gazelle', 'Hedgehog', 'Iguana', 'Jellyfish', 'Kiwi', 'Lemur', 'Mantis', 'Narwhal',
//   'Orangutan', 'Puma', 'Raven', 'Scorpion', 'Skunk', 'Tapir', 'Uakari', 'Viper', 'Wolverine', 'X-ray Tetra',
//   'Yabby', 'Yeti Crab', 'Zorse', 'Aardvark', 'Barracuda', 'Cockatoo', 'Dalmatian', 'Echidna', 'Falcon', 'Gecko',
//   'Hamster', 'Ibex', 'Jackal', 'Kookaburra', 'Lemming', 'Mongoose', 'Numbat', 'Otter', 'Pika', 'Quail',
//   'Rhea', 'Snail', 'Toucan', 'Uguisu', 'Vole', 'Wrasse', 'Xenops', 'Yellowjacket', 'Zonkey'
// ];

// const App: React.FC = () => {
//   const [inputValue, setInputValue] = useState<string>('');
//   const [chips, setChips] = useState<string[]>(animalNames);

//   const handleAddChip = () => {
//     if (inputValue.trim() !== '') {
//       setChips((prevChips) => [...prevChips, inputValue.trim()]);
//       setInputValue('');
//     }
//   };

//   const handleDeleteChip = (index: number) => {
//     setChips((prevChips) => prevChips.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="flex flex-col items-center p-4">
//       <div className="flex items-center flex-wrap">
//         {inputValue && chips.filter(item => item.toLowerCase().includes(inputValue.toLowerCase())).map((chip, index) => (
//           <ListItem isLastElement={} id={index} name={chip} func={() => handleDeleteChip(index)} />
//         ))}
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           placeholder="Type here..."
//           className="px-3 py-1 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 ml-2"
//         />
//         <button
//           onClick={handleAddChip}
//           className="ml-2 px-4 py-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none"
//         >
//           Add Chip
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;
