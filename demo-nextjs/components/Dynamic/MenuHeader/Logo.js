import Image from 'next/image';

export default function Logo(props) {
  return (
    <div className={props.className}>
      <Image
        src={props.url}
        alt={props.title}
        fill
      />
    </div>
  );
}
