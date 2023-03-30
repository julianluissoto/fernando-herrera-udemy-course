import { useEffect, useState } from "react";

const Message = () => {
  const [coords, setcoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      const coords = { x, y };
      setcoords(coords);
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>User already exist</h3>
      <h2>position on X -AXIS {coords.x}</h2>
      <h2>position on Y -AXIS {coords.y}</h2>
    </>
  );
};

export default Message;
