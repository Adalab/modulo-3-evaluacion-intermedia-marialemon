function Pokemon(props) {
  return (
    <article className="Pokemon">
      <img src={props.image} alt={props.name} width="150" />
      <h3>{props.name}</h3>
      <ul>
        <li className="ItemTypes">{props.types}</li>
      </ul>
    </article>
  );
}

export default Pokemon;
