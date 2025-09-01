import { useState } from 'react';
import styled from 'styled-components';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import Rules from './Rules';
import RoleDice from './RoleDice';
import { Button, OutlineButton } from './Styled/Button';

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
const[showRules,setShowRules]=useState(false)
  const generateRandomNumber = (min, max) => {
    // Inclusive of both min and max
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 6);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore(prev => prev + randomNumber);
    } else {
      setScore(prev => prev - 2);
    }

    setSelectedNumber(undefined);
    setError(""); // Clear error after successful roll
  };
  const resetScore=()=>{
    setScore(0);
  };


  return (
    <MainContainer>
      <div className='top_section'>
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className='btn'>
        <OutlineButton
        onClick={resetScore}
        >Reset Score </OutlineButton>
<Button
onClick={()=>setShowRules((prev)=>!prev)}
>{showRules ? "Hide" : "Show"} Rules</Button>
      </div>


{showRules && <Rules/>}

    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top:0px 100px;
  min-height: 100vh;
  box-sizing: border-box;
  

  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .btn{
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction:column ;
    justify-content: center;
    gap: 10px;
    align-items: center;
  }
`;
