import Pokemon from "./Pokemon";

function PokeList(props) {
  const pokeItems = props.list.map((item) => {
    return (
      <li key={item.id}>
        {/* Pasamos todo el objeto por props al componente */}
        <Pokemon item={item} />
      </li>
    );
  });

  return <ul className="PokeList">{pokeItems}</ul>;
}

export default PokeList;
