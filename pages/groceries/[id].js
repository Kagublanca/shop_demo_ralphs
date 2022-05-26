import Image from "next/image";

export default function Item({ item }) {
  return (
    <div>
      <h1>{item.name}</h1>
      <Image src={item.image} alt="" width={100} height={100} />
      <h1>{item.price}</h1>
      <h1>{item.description}</h1>
      <h1>{item.information}</h1>
      <h1>{item.rating}</h1>
    </div>
  );
}
export async function getStaticProps({ params }) {
  const results = await fetch(
    `https://shop-demo-ralphs.herokuapp.com/stock/find/${params.id}`
  );
  const data = await results.json();
  return {
    props: {
      item: data.payload,
    },
  };
}

export async function getStaticPaths() {
  const items = await fetch("https://shop-demo-ralphs.herokuapp.com/stock/");
  const data = await items.json();
  return {
    paths: data.payload.map((item) => {
      const idString = item.id.toString();
      return {
        params: {
          id: idString,
        },
      };
    }),
    fallback: false,
  };
}
