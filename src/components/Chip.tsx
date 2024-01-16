import React, { useEffect, useState } from 'react';

type Chip = {
  id: number;
  label: string;
};

const suggestionList = [
  'Lion', 'Tiger', 'Bear', 'Elephant', 'Giraffe', 'Zebra', 'Kangaroo', 'Penguin', 'Cheetah', 'Panda',
  // ... other animal names
];

const AutocompleteChipInput: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [chips, setChips] = useState<Chip[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [removeChipp, setRemoveChipp] = useState<Chip>();

  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = event.target.value;
  //   setInputValue(value);
  //   setShowSuggestions(value.length > 0);
  // };

  const handleInputKeyPress = (event: KeyboardEvent): void => {
    if (event.key === 'Backspace' && inputValue === '') {
      if (chips.length > 0) {
        const lastChip = chips[chips.length - 1];
        
        if (removeChipp !== lastChip) {
          setRemoveChipp(lastChip);
        } else {
          const newChip = {
            id: -1,
            label: ''
          }
          setRemoveChipp(newChip);
          removeChip(lastChip.id);
        }
      }
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setShowSuggestions(false);
    const newChip: Chip = {
      id: chips.length + 1,
      label: suggestion,
    };
    
    setChips((prevChips) => [...prevChips, newChip]);
    setInputValue('');
  };

  const removeChip = (chipId: number) => {
    setChips((prevChips) => prevChips.filter((chip) => chip.id !== chipId));
  };

  const [suggestionPosition, setSuggestionPosition] = useState<{ top: number; left: number } | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    setShowSuggestions(value.length > 0);
    // Get the position of the input element
    const inputElement = event.target;
    const inputRect = inputElement.getBoundingClientRect();
    setSuggestionPosition({ top: inputRect.bottom, left: inputRect.left });
  };

  useEffect(() => {
    document.addEventListener('keydown', handleInputKeyPress);

    return () => {
      document.removeEventListener('keydown', handleInputKeyPress);
    };
  }, [chips, inputValue, removeChipp]);

  return (
    <div className="relative">
      <div className="flex flex-wrap gap-2 p-4 relative">
      {chips.map((chip) => (
        <div key={chip.id} className="bg-blue-500 text-white p-2 rounded-3xl flex items-center min-w-[100]">
          {chip.label}
          <span className="ml-2 px-2 cursor-pointer" onClick={() => removeChip(chip.id)}>
            &#x2715;
          </span>
        </div>
        ))}
        <input
          type="text"
          className="outline-none bg-transparent border border-gray-300 p-2 rounded"
          placeholder="Type and press Enter..."
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>

      {showSuggestions && suggestionPosition && (
        <div
          className="absolute bg-white border border-gray-300 mt-1 p-2 rounded overflow-y-auto max-h-40"
          style={{ top: suggestionPosition.top, left: suggestionPosition.left }}
        >
          {suggestionList
            .filter((suggestion) =>
              suggestion.toLowerCase().includes(inputValue.toLowerCase())
            )
            .map((suggestion, index) => (
              <div
                key={index}
                className="cursor-pointer p-2 hover:bg-gray-100"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default AutocompleteChipInput;
