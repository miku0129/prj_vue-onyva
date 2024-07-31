import { mount, flushPromises } from "@vue/test-utils";
import AuthDashboard from "../../src/components/AuthDashboard.vue";

jest.mock("../../src/utils/helper", () => ({
  findMyEtudiant: jest.fn(() => undefined),
  getHankoApi: jest.fn(),
}));

describe("AuthDashboard", () => {
  it("has blank in name if 'etudiant' doesn't exist", async () => {
    const wrapper = mount(AuthDashboard);
    await flushPromises();
    expect(wrapper.find('[id="input-1"]').text()).toBe("");
  });

  it("hasn't delete button if 'etudiant' doesn't exist", async () => {
    const wrapper = mount(AuthDashboard);
    await flushPromises();
    expect(wrapper.html()).not.toContain("Effacer le profil");
  });
});
