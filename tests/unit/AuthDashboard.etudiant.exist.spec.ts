import { mount, flushPromises, VueWrapper } from "@vue/test-utils";
import AuthDashboard from "../../src/components/AuthDashboard.vue";
import { findMyEtudiant } from "../../src/utils/helper";

jest.mock("../../src/utils/helper", () => ({
  findMyEtudiant: jest.fn(() => ({
    id: 99,
    name: "mockEtd",
    email: "mock@mail.com",
  })),
  getHankoApi: jest.fn(),
}));

describe("If the 'etudiant' exists, AuthDashboard", () => {
  let wrapper: VueWrapper | null = null;
  
    beforeEach(async () => {
      wrapper = mount(AuthDashboard);
      await flushPromises();
    });
    afterAll(() => {
      wrapper = null;
    });

    it("calls findMyEtudiant", () => {
      expect(findMyEtudiant).toHaveBeenCalledTimes(1);
    });

    it("has name in name-input", () => {
      if (wrapper) expect(wrapper.html()).toContain("mockEtd");
    });

    it("has delete button", () => {
      if (wrapper) expect(wrapper.html()).toContain("Effacer le profil");
    });
  // });
});
