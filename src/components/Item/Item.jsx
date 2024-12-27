export default function Item({ item }) {
  return (
    <>
      <li>
        <div>{item.title}</div>
        <div>{item.price}</div>
        <div>{item.category}</div>
        <div>{item.description}</div>
      </li>
    </>
  );
}
