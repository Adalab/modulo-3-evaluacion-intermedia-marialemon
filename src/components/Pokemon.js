function Pokemon(props) {
  console.log(props.item.types);

  return (
    <article className="Pokemon">
      <img
        src={props.item.url}
        alt={props.item.name}
        title={props.item.name}
        aria-label={props.item.name}
        width="150"
      />
      <h3>{props.item.name}</h3>
      <ul></ul>
    </article>
  );
}

export default Pokemon;
