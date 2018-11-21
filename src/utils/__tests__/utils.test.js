import request from "supertest";
import add from "../add";
import { importPizza } from "../../services/importPizza";

describe("add", () => {
  test("should add two numbers", () => {
    expect(add(1, 1)).toEqual(2);
  });
});

describe("importPizza", () => {
  test("import fichier correct", () => {
    expect(importPizza("src/storage/pizza.json")).toBeDefined();
  });
  
});
