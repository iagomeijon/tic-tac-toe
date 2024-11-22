import IHeaderProps from "./interfaces";
import './styles.scss';

function Header({ title }: IHeaderProps) {
  return (
    <header className="Header">
      <h1 className="Title">{title}</h1>
    </header>
  );
}

export default Header;
