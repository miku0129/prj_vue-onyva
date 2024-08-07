import { getAllEtudiants, findMyEtudiant } from "../../src/utils/helper";
import axios from "axios";

jest.spyOn(axios, "get").mockImplementation(() => {
  return Promise.resolve({
    data: {
      etudiants: [
        {
          id: 99,
          name: "fuga",
          email: "fuga@gmail.com",
        },
        {
          id: 100,
          name: "hoge",
          email: "hoge@gmail.com",
        },
        {
          id: 101,
          name: "dobe",
          email: "dobe@gmail.com",
        },
      ],
    },
  });
});
jest.mock("@teamhanko/hanko-elements", () => {
  return {
    Hanko: jest.fn().mockImplementation(() => ({
      user: {
        getCurrent: () => ({
          email: "hoge@gmail.com",
        }),
      },
    })),
  };
});

describe("getAllEtudiants", () => {
  it("can get all registered etudiants", async () => {
    const result = await getAllEtudiants();
    expect(result.etudiants.length).toBe(3);
  });
});

describe("findMyEtudiant", () => {
  it("return an etudiants who represent the loggin user", async () => {
    const result = await findMyEtudiant();
    expect(result.name).toBe("hoge");
  });
});
