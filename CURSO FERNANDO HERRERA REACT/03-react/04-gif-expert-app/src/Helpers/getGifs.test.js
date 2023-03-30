import { getGifs } from "./getGifs";

describe("Test on fetchGif() ", () => {
  test("should return a gif array ", async () => {
    const gifs = await getGifs("goku");
    // console.log(gifs);
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
