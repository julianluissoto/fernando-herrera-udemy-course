import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Pruebas en 09-promesas", () => {
  test("getHeroeByIdAsync DEBE RETORNAR UN HEROE ", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });
      done();
    });
  });
  test("getHeroeByIdAsync DEBE RETORNAR UN ERROR SI EL HERO NO EXISTE ", (done) => {
    const id = 100;

    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe(`No se pudo encontrar el héroe con ID ${id}`);
      done();
    });
  });
});
