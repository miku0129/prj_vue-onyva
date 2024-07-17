import { mount, shallowMount } from "@vue/test-utils";
import Etudiant from "../../src/components/Etudiant.vue"

describe("Etudiant", () => {
  it("is a Vue instance", () => {
    const wrapper = shallowMount(Etudiant, {
      global: {
        mocks: {
          $route: {params: { id: ""}},
        }
      }
    })
    expect(wrapper.exists()).toBe(true);
  });});

  describe("Etudiant", () => {
    it("should show an etudiant profile corresponds his/her id", () => {
      const wrapper = shallowMount(Etudiant, {
        global: {
          mocks: {
            $route: {params: { id: "1"}},
          }
        }
      })
      console.log(wrapper.html());
    });});
  
