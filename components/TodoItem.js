const TodoItem = ({ todo }) => {
  return (
    <>
      <li>{todo}</li>

      {/*hover effect */}
      <style jsx>{`
        li:hover {
          cursor: default;
        }
      `}</style>
    </>
  );
};

export default TodoItem;
