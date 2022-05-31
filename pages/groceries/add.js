import { useState } from "react";

//To add a product on the front-end.
function Add() {
  async function postItem() {
    const post = await fetch(
      "https://shop-demo-ralphs.herokuapp.com/stock/add",
      {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
          name: "Apple",
          image: "test",
          price: 2,
          description: "Nice apple",
          information: "This is a really good apple",
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
      <button onClick={postItem}>Click here to add something</button>
    </div>
  );
}

export default Add;
