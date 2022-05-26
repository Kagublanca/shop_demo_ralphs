import { useState } from "react";

function Add() {
  const [itemName, setItemName] = useState("initialState");
  const [image, setImage] = useState("initialState");
  const [price, setPrice] = useState("initialState");
  const [description, setDescription] = useState("initialState");
  const [information, setInformation] = useState("initialState");
  const [rating, setRating] = useState("initialState");

  async function postItem() {
    const post = await fetch(
      "https://shop-demo-ralphs.herokuapp.com/stock/add",
      {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
          name: "sd",
          image: "sds",
          price: 2,
          description: "Cool",
          information: "sdsd",
          rating: 3,
        }),
        headers: {
          headers: { "Content-Type": "application/json" },
        },
      }
    );
    console.log(post.body);
    const data = await post.json();
    console.log(data.payload);
  }

  return (
    <div>
      <h1>This is a place where you can add things</h1>
      <button onClick={postItem}>Click here to add somethign</button>
    </div>
  );
}

export default Add;
