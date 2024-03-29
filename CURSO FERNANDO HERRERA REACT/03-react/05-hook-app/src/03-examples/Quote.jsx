import { useCounter, useFetch } from "../Hooks";

const Quote = ({ data }) => {
  const { quote, author } = data != undefined && data[0];

  return (
    <blockquote className="blockquote text-end">
      <p className="mb-1">{quote}</p>
      <footer className="blockquote-footer mt-1">{author}</footer>
    </blockquote>
  );
};

export default Quote;
