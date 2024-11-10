import { Question } from './Question';

export const AllQuestions = ({
  questionData,
  currentId,
  showCurrentQuestion,
}) => {
  return (
    <div className='container'>
      <h1>questions</h1>
      {questionData.map((item) => {
        return (
          <Question
            key={item.id}
            {...item}
            currentId={currentId}
            showCurrentQuestion={showCurrentQuestion}
          />
        );
      })}
    </div>
  );
};
