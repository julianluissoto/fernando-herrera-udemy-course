export const getGifs = async (category) => {
  const limit = 5;
  const apiKey = "tUA3Nx7zUqAZVNmrXEsM9omM7ntuWNGD";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&tag&q=${category}&limit=${limit}`;
  const resp = await fetch(url);
  const { data = [] } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
