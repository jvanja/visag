import { useState } from "react";
import "./sidebar.css";

const Sidebar = ({
  onSelectLetter,
  letters,
}: {
  onSelectLetter: (letter: string) => void;
  letters: { letter: string; name: string }[];
}) => {
  const [ currentLetter, setCurrentLetter ] = useState<string>("a");

  return (
    <div className="bg-gray-800 text-white h-full flex flex-col items-center">
      {letters.map((letter) => (
        <button
          key={letter.name}
          className={`${currentLetter === letter.name ? 'active' : ''} w-full px-6 py-1.5 hover:bg-gray-600 text-xs border-b border-gray-700`}
          onClick={() => {onSelectLetter(letter.name); setCurrentLetter(letter.name)}}
        >
          {letter.letter}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
