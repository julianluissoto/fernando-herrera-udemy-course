import { render, screen } from "@testing-library/react";
import GifItem from "../../src/components/GifItem";

describe(" TEST GifItem component", () => {
  const title = "Saitama";
  const url = "http://one-punch.com/saitama.png";

  test("should match with the snapshot ", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("must show the image with the url and indicated ALT", () => {
    render(<GifItem title={title} url={url} />);
    //screen.debug();

    //expect(screen.getByRole("img").src).toBe(url);  way 1
    //expect(screen.getByRole("img").alt).toBe(title); way  1

    //with destructuring

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });
  test("the title must show on p tag", () => {
    render(<GifItem title={title} url={url} />);

    expect(screen.getByText(title)).toBeTruthy();
  });
});
