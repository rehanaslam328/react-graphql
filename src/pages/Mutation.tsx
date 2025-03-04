import { gql, useMutation } from "@apollo/client";

const CREATE_PRODUCT = gql`
  mutation CreateProduct($name: String!, $price: Int!) {
    createProduct(record: { name: $name, price: $price }) {
      record {
        name
      }
    }
  }
`;

const Mutation = () => {
  const [createProduct] = useMutation(CREATE_PRODUCT, {
    variables: { name: "Product", price: 100 },
  });
  return <>
  <button onClick={()=>createProduct()}>Create</button>
  </>;
};

export default Mutation;
