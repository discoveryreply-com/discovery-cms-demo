
export default function Logo(props) {
  return (
    <div className={props.className}>
      <img
        src={props.url}
        alt={props.title}
      />
    </div>
  );
}
