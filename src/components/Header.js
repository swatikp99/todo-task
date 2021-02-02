import Button from "./Button";
const Header = ({ title, onAdd, showAdd }) => {
  
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button onClick={onAdd} color={showAdd?"red":"blue"} text={showAdd ? "CLOSE":"ADD"} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
