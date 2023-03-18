import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("PRUEBAS EN ASYNC-AWAIT", () => {
  test("getImagen debe retornar la url de la imagen ", async () => {
    const url = await getImagen();
    console.log(url);
    expect(typeof url).toBe("string");
  });
  test("getImagen debe retornar un error si no se encuentra", async () => {
    const resp = await getImagen();

    expect(resp).toBe("no se encontro la imagen");
  });
});
