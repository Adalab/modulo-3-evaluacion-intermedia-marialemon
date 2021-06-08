function Pokemon(props) {
  console.log(props.item.types);

  const typeItems = props.item.types.map((item) => {
    return <li className="ItemTypes">{item}</li>;
  });

  return (
    <article className="Pokemon">
      <img
        src={props.item.url}
        alt={props.item.name}
        title={props.item.name}
        aria-label={props.item.name}
        width="150"
      />
      <h3 className="PokemonName">{props.item.name}</h3>
      <ul className="TypesList">{typeItems}</ul>
    </article>
  );
}

export default Pokemon;
