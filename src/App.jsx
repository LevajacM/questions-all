import { useState } from 'react';
import data from './data';
import { AllQuestions } from './AllQuestions';

const App = () => {
  const [questionData, setQuestionData] = useState(data);

  return (
    <main>
      <AllQuestions questionData={questionData} />
    </main>
  );
};
export default App;
