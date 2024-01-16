import React, { useEffect, useState } from 'react';

function List() {
  const animalNames = [
    'Lion', 'Tiger', 'Bear', 'Elephant', 'Giraffe', 'Zebra', 'Kangaroo', 'Penguin', 'Cheetah', 'Panda',
    'Koala', 'Hippopotamus', 'Gorilla', 'Raccoon', 'Ostrich', 'Dolphin', 'Hawk', 'Jaguar', 'Leopard', 'Chameleon',
    'Squirrel', 'Penguin', 'Lynx', 'Koala', 'Platypus', 'Armadillo', 'Peacock', 'Ocelot', 'Octopus', 'Moose',
    'Meerkat', 'Pangolin', 'Quokka', 'Rattlesnake', 'Red panda', 'Salmon', 'Seahorse', 'Sloth', 'Tarantula', 'Vulture',
    'Wallaby', 'Walrus', 'Wombat', 'Yak', 'Zebra', 'Albatross', 'Antelope', 'Bison', 'Baboon', 'Cobra',
    'Dingo', 'Frog', 'Gazelle', 'Hedgehog', 'Iguana', 'Jellyfish', 'Kiwi', 'Lemur', 'Mantis', 'Narwhal',
    'Orangutan', 'Puma', 'Raven', 'Scorpion', 'Skunk', 'Tapir', 'Uakari', 'Viper', 'Wolverine', 'X-ray Tetra',
    'Yabby', 'Yeti Crab', 'Zorse', 'Aardvark', 'Barracuda', 'Cockatoo', 'Dalmatian', 'Echidna', 'Falcon', 'Gecko',
    'Hamster', 'Ibex', 'Jackal', 'Kookaburra', 'Lemming', 'Mongoose', 'Numbat', 'Otter', 'Pika', 'Quail',
    'Rhea', 'Snail', 'Toucan', 'Uguisu', 'Vole', 'Wrasse', 'Xenops', 'Yellowjacket', 'Zonkey'
  ];

  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState(animalNames);
  const [selectedAnimalList, setSelectedAnimalList] = useState<string[]>([]);
  const [removedAnimalFromSelectedAnimalList, setRemovedAnimalFromSelectedAnimalList] = useState<string>('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);
  }

  const updateLists = (animal: string): void => {
    setList((prevList) => prevList.filter((anmal) => anmal !== animal));
    setSelectedAnimalList((prev) => [...prev, animal]);
    setSearchText('');
  };

  const removeItemFromList = (animal: string): void => {
    setSelectedAnimalList((prevList) => prevList.filter((anmal) => anmal !== animal));
    setList((prev) => [...prev, animal]);
  };

  const handleKeyPress = (event: KeyboardEvent): void => {
    if (event.key === 'Backspace' && searchText === '') {
      if (selectedAnimalList.length > 0) {
        const lastAnimal = selectedAnimalList[selectedAnimalList.length - 1];
        console.log(selectedAnimalList.length, lastAnimal);
        
        if (removedAnimalFromSelectedAnimalList !== lastAnimal) {
          setRemovedAnimalFromSelectedAnimalList(lastAnimal);
        } else {
          setRemovedAnimalFromSelectedAnimalList('');
          removeItemFromList(lastAnimal);
        }
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [selectedAnimalList, searchText, removedAnimalFromSelectedAnimalList, removeItemFromList]);

  return (
    <div className='flex flex-col justify-center items-center'>
      List
      <input type="text" value={searchText} name="animalName" onChange={(e) => handleChange(e)} />
      {searchText && list
        .filter((animal) => animal.toLowerCase().includes(searchText.toLowerCase()))
        .map((animal, id) => (
          <div
            className="cursor-pointer"
            key={id}
            onClick={() => updateLists(animal)}
          >
            {animal}
          </div>
        ))}

      <div className="bg-red-500 flex items-center justify-center">
        {selectedAnimalList.map((animal, id) => (
          <div
            className={`bg-yellow-50 rounded-3xl pr-3 ml-4 flex justify-between cursor-pointer gap-10`}
            key={id}
          >
            <span className="flex items-center">
              <span className='rounded-full bg-pink-100 w-10 h-10 flex-shrink-0'></span>
              <span className='ml-4'>{animal}</span> 
            </span>
            <span onClick={() => setRemovedAnimalFromSelectedAnimalList(animal)}>X</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
