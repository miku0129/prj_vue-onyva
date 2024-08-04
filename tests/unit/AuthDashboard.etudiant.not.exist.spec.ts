import { mount, flushPromises, VueWrapper } from "@vue/test-utils";
import AuthDashboard from "../../src/components/AuthDashboard.vue";

jest.mock("../../src/utils/helper", () => ({
  findMyEtudiant: jest.fn(() => undefined),
  getHankoApi: jest.fn(),
}));

describe("If 'etudiant' doesn't exist, AuthDashboard", () => {
  let wrapper: VueWrapper | null = null;

  beforeEach(async () => {
    wrapper = mount(AuthDashboard);
    await flushPromises();
  });
  afterAll(() => {
    wrapper = null;
  });

  it("has blank in name-input", () => {
    if (wrapper) expect(wrapper.find('[id="input-1"]').text()).toBe("");
  });

  it("doesn't have delete button", () => {
    if (wrapper) expect(wrapper.html()).not.toContain("Effacer le profil");
  });
});
