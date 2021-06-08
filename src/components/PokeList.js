import Pokemon from "./Pokemon";

function PokeList(props) {
  // console.log(props.list);
  const pokeItems = props.list.map((item) => {
    //   console.log(item.name);
    return (
      <li>
        <Pokemon image={item.url} name={item.name} types={item.types} />
      </li>
    );
  });

  return <ul className="PokeList">{pokeItems}</ul>;
}

export default PokeList;
