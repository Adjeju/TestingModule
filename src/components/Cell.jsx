const Cell = ({ isMined, loose, isLoosed, isOpen, showMine, id }) => {
  const onClick = () => {
    showMine(id);
    if (isMined) {
      loose(true);
    }
  };

  return (
    <button
      className={`cell ${isOpen ? (isMined ? "red" : "green") : null} `}
      disabled={isLoosed}
      onClick={onClick}
    >
      {isOpen && "*"}
    </button>
  );
};

export default Cell;
