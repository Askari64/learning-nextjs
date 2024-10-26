export default function ({ params }) {
  return (
    <>
      <h1>
        Review {params.reviewID} of Product {params.productID}
      </h1>
      <p>Nested Dynamic Route</p>
    </>
  );
}
