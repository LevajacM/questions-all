import { Question } from './Question';

export const AllQuestions = ({ questionData }) => {
  return (
    <div className='container'>
      <h1>questions</h1>
      {questionData.map((item) => {
        return <Question key={item.id} {...item} />;
      })}
    </div>
  );
};
