const CardGroup = ({ children }) => {
  return (
    <div className="flex flex-col phone:flex-row tablet:flex-wrap align-middle phone:justify-center my-8 m-auto">
      {children}
    </div>
  );
};

export default CardGroup;
