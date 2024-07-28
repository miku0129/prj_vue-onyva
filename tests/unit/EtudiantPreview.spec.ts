import { VueWrapper } from "@vue/test-utils";
import { mount } from "@vue/test-utils";
import EtudiantPreview from "../../src/components/EtudiantPreview.vue";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "../../src/utils/router";

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

describe("EtudiantPreview", () => {
  let wrapper: VueWrapper | null = null;

  beforeEach(() => {
    wrapper = mount(EtudiantPreview, {
      global: {
        plugins: [router],
      },
      props: {
        etudiant: {
          id: 1,
          email: "hoge@gmail.com",
          name: "hoge",
        },
      },
    });
  });
  afterAll(() => {
    wrapper = null;
  });

  it("accepts props", () => {
    if (wrapper !== null) {
      const etudiantContainer = wrapper.findComponent({
        ref: "jest-router-verify",
      });
      expect(etudiantContainer.props().to).toBe("/etudiants/1");
    }
  });

  it("updates props", async () => {
    if (wrapper !== null) {
      await wrapper.setProps({
        etudiant: {
          id: 2,
          email: "hoge@gmail.com",
          name: "hoge",
        },
      });
      const etudiantContainer = wrapper.findComponent({
        ref: "jest-router-verify",
      });
      expect(etudiantContainer.props().to).toBe("/etudiants/2");
    }
  });
});
