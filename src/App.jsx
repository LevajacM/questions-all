import { useState } from 'react';
import data from './data';
import { AllQuestions } from './AllQuestions';

const App = () => {
  const [questionData, setQuestionData] = useState(data);
  const [currentId, setCurrentId] = useState(null);

  const showCurrentQuestion = (id) => {
    if (currentId === id) {
      setCurrentId(null);
      return;
    }
    setCurrentId(id);
  };

  return (
    <main>
      <AllQuestions
        questionData={questionData}
        currentId={currentId}
        showCurrentQuestion={showCurrentQuestion}
      />
    </main>
  );
};
export default App;
