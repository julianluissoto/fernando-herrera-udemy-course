import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [state, setstate] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getBreakingFecth = async () => {
    setstate({
      ...state,
      isLoading: true,
    });
    const getData = await fetch(url);
    const data = await getData.json();
    setstate({
      data,
      isLoading: false,
      hasError: null,
    });
  };
  useEffect(() => {
    getBreakingFecth();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};

export default useFetch;
