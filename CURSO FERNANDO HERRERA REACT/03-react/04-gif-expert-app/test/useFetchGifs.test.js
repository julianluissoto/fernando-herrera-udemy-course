import { useFetchGifs } from "../src/hooks/useFetchGifs";
import { renderHook, waitFor } from "@testing-library/react";

describe("TEST ON UseFetchGif", () => {
  test("should return the inital state", () => {
    const { result } = renderHook(() => useFetchGifs("Caballero del Zodiaco"));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBe(true);
  });

  test("should return an Array of images and isLoading on False", async () => {
    const { result } = renderHook(() => useFetchGifs("Caballero del Zodiaco"));

    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );
    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBe(false);
  });
});
