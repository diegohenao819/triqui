import PropTypes from 'prop-types';

export const Cell = ({ id, setLetras, turn, setTurn, letra, winningMessage }) => {
  const llenar = () => {
    setLetras((prevItems) => {
      const newItems = [...prevItems];
      newItems[id] = turn;
      return newItems;
    });
    if (turn === "X") {
      setTurn("O");
    } else {
      setTurn("X");
    }
  };

  return (
    <div className="cell" onClick={!winningMessage && llenar} id={id}>
      {letra}

      
    </div>
  );
};

Cell.propTypes = {
    letras: PropTypes.array.isRequired,
    id: PropTypes.number.isRequired,
    setLetras: PropTypes.func.isRequired,
    turn: PropTypes.string.isRequired,
    setTurn: PropTypes.func.isRequired,
    letra: PropTypes.string.isRequired,
    winningMessage: PropTypes.string
  };