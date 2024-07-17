import { mount, shallowMount, flushPromises } from "@vue/test-utils";
import Etudiant from "../../src/components/Etudiant.vue";
import axios from "axios";
import { useRoute } from "vue-router";

jest.mock("axios", () => ({
  get: jest.fn(() =>
    Promise.resolve({
      data: {
        etudiant: [
          {
            created_at: "2024-07-10T14:02:47.000000Z",
            email: "anwal@email.com",
            fromWhen: "2021",
            id: 1,
            myGoal:
              "Apprendre le français permet de voyager plus facilement en France et dans les pays francophones. Vous pourrez communiquer avec les habitants, comprendre les panneaux et les menus, et ainsi profiter pleinement de votre expérience de voyage. Cela vous ouvrira également des portes vers de nouvelles cultures et traditions.",
            myMethod: "Duolinog",
            name: "Anwal",
            updated_at: "2024-07-11T05:10:01.000000Z",
          },
        ],
      },
    })
  ),
}));

describe("Etudiant", () => {
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

  // jest.mock("vue-router", () => ({
  //   useRoute: jest.fn(),
  // }));
  // const MockUseRoute = useRoute as jest.Mock<typeof MockUseRoute>;

  it("should show an etudiant profile corresponds his/her id", async () => {
    // MockUseRoute.mockImplementationOnce(() => ({
    //   params: {
    //     id: "1",
    //   },
    // }));

    const wrapper = mount(Etudiant, {
      global: {
        mocks: {
          $route: { params: { id: "1" } },
        },
        // stubs: ["RouterLink", "router-view"],
      },
    });

    await flushPromises();
    console.log(wrapper.html());
  });
});
