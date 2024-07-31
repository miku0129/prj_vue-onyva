import { mount, shallowMount, flushPromises } from "@vue/test-utils";
import Etudiant from "../../src/components/Etudiant.vue";
import { createRouterMock, injectRouterMock } from "vue-router-mock";

jest.mock("axios", () => ({
  get: jest.fn(() =>
    Promise.resolve({
      data: {
        etudiants: [
          {
            created_at: "2024-07-10T14:02:47.000000Z",
            email: "hoge@gmail.com",
            fromWhen: "2021",
            id: 1,
            myGoal:
              "Apprendre le français permet de voyager plus facilement en France et dans les pays francophones. Vous pourrez communiquer avec les habitants, comprendre les panneaux et les menus, et ainsi profiter pleinement de votre expérience de voyage. Cela vous ouvrira également des portes vers de nouvelles cultures et traditions.",
            myMethod: "Duolinog",
            name: "hoge",
            updated_at: "2024-07-11T05:10:01.000000Z",
          },
        ],
      },
    })
  ),
}));

describe("Etudiant", () => {
  const router = createRouterMock({});
  beforeEach(() => {
    // inject it globally to ensure `useRoute()`, `$route`, etc work
    // properly and give you access to test specific functions
    injectRouterMock(router);
  });
  it("is a Vue instance", () => {
    const wrapper = shallowMount(Etudiant, {
      global: {
        mocks: {
          $route: { params: { id: "" } },
        },
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it("should have a router", () => {
    const wrapper = mount(Etudiant);
    expect(wrapper.router).toBe(router);
  });

  it("should show an etudiant profile corresponds his/her id", async () => {
    router.currentRoute.value.params = { id: "1" };
    const wrapper = mount(Etudiant, {
      global: {
        plugins: [router],
      },
    });
    await flushPromises();
    expect(wrapper.find('[class="jest-name-verify"]').text()).toBe("hoge");
  });
});
