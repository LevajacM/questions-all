import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa6';

export const Question = ({ title, info }) => {
  const [answer, showAnswer] = useState(false);

  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
        {!answer ? (
          <button className='question-btn' onClick={() => showAnswer(!answer)}>
            <FaPlus />
          </button>
        ) : (
          <button className='question-btn' onClick={() => showAnswer(!answer)}>
            <FaMinus />
          </button>
        )}
      </header>
      {answer && <p>{info}</p>}
    </article>
  );
};
