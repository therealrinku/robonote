const Button = ({ className, id, name, onClick, hide }) => {
  return (
    <button
      id={id}
      className={`${className}  center_me`}
      onClick={onClick}
      style={hide ? { display: "none" } : null}
    >
      {name}
    </button>
  );
};

export default Button;
