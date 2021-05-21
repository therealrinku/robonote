const Backdrop = ({ toggle }) => {
  return (
    <div onClick={toggle}>
      <style jsx>{`
        div {
          position: fixed;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
};

export default Backdrop;
