import { mount, flushPromises } from "@vue/test-utils";
import AuthDashboard from "../../src/components/AuthDashboard.vue";

jest.mock("../../src/utils/helper", () => ({
  findMyEtudiant: jest.fn(() => ({
    id: 99,
    name: "mockEtd",
    email: "mock@mail.com",
  })),
  getHankoApi: jest.fn()
}));

describe("AuthDashboard", () => {
  it("show delete button if 'etudiant' exists", async () => {
    const wrapper = mount(AuthDashboard);
    await flushPromises();
    expect(wrapper.html()).toContain("Effacer le profil");
  });
});
