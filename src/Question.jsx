import { FaPlus, FaMinus } from 'react-icons/fa6';

export const Question = ({
  id,
  title,
  info,
  currentId,
  showCurrentQuestion,
}) => {
  const isActive = id === currentId;

  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>

        <button
          className='question-btn'
          onClick={() => {
            // if (isActive) {
            //   showCurrentQuestion(null);
            //   return;
            // }
            showCurrentQuestion(id);
          }}
        >
          {isActive ? <FaMinus /> : <FaPlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
};
