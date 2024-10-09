import { Header } from './components/Header.jsx'
import { pokemons } from './data.json'

export const App = () => {

  console.log('pokemons', pokemons)

  return (
    <>
      {/* Render the Header component, passing "Jennie" as a prop */}
      <Header name="Jennie" />

      {/* Loop through the pokemons array, from the data.json file and render a paragrah that displays the name*/}
      {pokemons.map((item) => <p>{item.name}</p>)}

      {/* Loop through the pokemons array, from the data.json file and render a Header component with the name passed along as a prop*/}
      {pokemons.map((item) => <Header name={item.name} />)}

      <ul>
        <li>hej</li>
        <li>hola</li>
        <li>hello</li>
        <li>moi</li>
      </ul>

    </>
  );
};
