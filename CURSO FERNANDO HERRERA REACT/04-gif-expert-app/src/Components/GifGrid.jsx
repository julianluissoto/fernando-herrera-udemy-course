import { useFetchGifs } from "../hooks/useFetchGifs";

import GifItem from "./GifItem";

const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  console.log(isLoading);
  return (
    <div className="card-grid">
      {isLoading ? (
        <h1>loading</h1>
      ) : (
        images.map((image) => (
          <GifItem key={image.id} {...image} /> // where there to
          //many props we can use spread to pass all of them
        ))
      )}
    </div>
  );
};

export default GifGrid;
