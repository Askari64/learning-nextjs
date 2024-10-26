import { notFound } from "next/navigation";

export default function ({ params }) {
  
  if (parseInt(params.reviewID) > 1000) {
    notFound();
  }
  return (
    <>
      <h1>
        Review {params.reviewID} of Product {params.productID}
      </h1>
      <p>Nested Dynamic Route</p>
    </>
  );
}
