import React, { createContext, useContext, useState } from 'react';
import moment from 'moment';

export const SudokuContext = createContext(['0', () => { },
  [], () => { },
  'Easy', () => { },
  moment(), () => { },
  false, () => { },
  -1, () => { },
  [], () => { }]);

export const SudokuProvider = ({ children }) => {
  let [numberSelected, setNumberSelected] = useState('0');
  let [gameArray, setGameArray] = useState([]);
  let [difficulty, setDifficulty] = useState('Easy');
  let [timeGameStarted, setTimeGameStarted] = useState(moment());
  let [fastMode, setFastMode] = useState(false);
  let [cellSelected, setCellSelected] = useState(-1);
  let [initArray, setInitArray] = useState([]);

  return (
    <SudokuContext.Provider value={
      {
        numberSelected, setNumberSelected,
        gameArray, setGameArray,
        difficulty, setDifficulty,
        timeGameStarted, setTimeGameStarted,
        fastMode, setFastMode,
        cellSelected, setCellSelected,
        initArray, setInitArray,
      }
    }>
      {children}
    </SudokuContext.Provider>
  );
};

export const useSudokuContext = () => useContext(SudokuContext);

// Usage
// const { numberSelected, setNumberSelected } = useNumberValue();
