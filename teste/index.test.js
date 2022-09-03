import { expect, test } from "@jest/globals";
import { pegaArquivo } from "../index.js";

const arrayResult = [
  {
    FileList: "https://developer.mozilla.org/pt-BR/docs/Web/API/FileList",
  },
];

describe("pegaArquivo::", () => {
  it("deve ser uma função", () => {
    expect(typeof pegaArquivo).toBe("function");
  });
  it("deve retornar array com resultados", async () => {
    const result = await pegaArquivo(
      "C:UsersWindowsDesktoplib-markdown\testearquivos\text_one.md"
    );
    expect(result).toEqual(arrayResult);
  });
});

// test('deve ser uma função', () => {
//   expect(typeof pegaArquivo).toBe('function');
// });
