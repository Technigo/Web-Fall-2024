import './Header.css'

export const Header = ({ name }) => {

  return (
    <header className="header">
      <h1>Hey {name}</h1>
      <p>It is beginning to look like autumn</p>
    </header>
  );
};

