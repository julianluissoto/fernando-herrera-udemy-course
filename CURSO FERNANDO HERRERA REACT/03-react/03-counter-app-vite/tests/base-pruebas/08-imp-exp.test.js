import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("ARREGLO DE HEROES", () => {
  test("Get heroe ByID debe traer un heroe por ID ", () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({
      id: 1,
      name: "Batman",
      owner: "DC",
    });
  });
  test("Get heroe ByID debe retornar undefined si el ID no existe ", () => {
    const id = 6;
    const hero = getHeroeById(id);

    expect(hero).toBeFalsy(); // en este caso analiza todo lo falsy, sea undefined, false, null
  });
  //tarea
  // debe retornar un arreglo con los heroes de dc

  test("Get heroe By owner debe retornar heroes del owner pasado ", () => {
    const owner = "DC";
    const hero = getHeroesByOwner(owner);

    expect(hero).toEqual([
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ]);
    expect(hero.length).toBe(3);
  });
  test("Get heroe By owner debe retornar heroes de Marvel ", () => {
    const owner = "Marvel";
    const hero = getHeroesByOwner(owner);
    console.log(hero);
    expect(hero).toEqual([
      { id: 2, name: "Spiderman", owner: "Marvel" },
      { id: 5, name: "Wolverine", owner: "Marvel" },
    ]);
  });
});
