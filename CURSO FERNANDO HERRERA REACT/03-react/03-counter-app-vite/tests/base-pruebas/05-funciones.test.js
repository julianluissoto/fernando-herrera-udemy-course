import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruebas en 05-Funciones", () => {
  test("get User debe retornar un Objeto", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(testUser).toEqual(user); // ojo aqui al ser objeto en indicar mismo espacio
    // en memoria no se puede utilizar el toBe
  });

  test("Debe retornar un objeto ", () => {
    const name = "juliansito";
    const userName = getUsuarioActivo(name);

    const userData = {
      uid: "ABC567",
      username: name,
    };
    console.log(userName);
    expect(userData).toEqual(userName);
  });
});
