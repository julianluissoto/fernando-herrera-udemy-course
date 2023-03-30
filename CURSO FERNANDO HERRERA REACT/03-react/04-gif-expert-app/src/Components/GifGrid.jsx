import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from "prop-types";
import GifItem from "./GifItem";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <div className="card-grid">
      <h3>{category}</h3>
      {isLoading ? (
        <h2>loading</h2>
      ) : (
        images.map((image) => (
          <GifItem key={image.id} {...image} /> // where there to
          //many props we can use spread to pass all of them
        ))
      )}
    </div>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
