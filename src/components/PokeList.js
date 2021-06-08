import Pokemon from "./Pokemon";

function PokeList(props) {
  console.log(props.list);
  props.list.map((item) => {
    console.log(item.name);
  });

  return (
    <div className="PokeList">
      <h2>Listado de Pokémonesssssss</h2>
      <Pokemon></Pokemon>
    </div>
  );
}

export default PokeList;
