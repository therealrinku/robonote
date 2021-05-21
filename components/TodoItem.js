const TodoItem = ({ todo }) => {
  return (
    <>
      <li>{todo}</li>

      {/*hover effect */}
      <style jsx>{`
        li:hover {
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default TodoItem;
