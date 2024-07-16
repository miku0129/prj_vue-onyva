import { mount, shallowMount } from "@vue/test-utils";
import Etudiant from "../../src/components/Etudiant.vue"

describe("Etudiant", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(Etudiant)
    expect(wrapper.vm).toBeTruthy(); 
    wrapper.unmount(); 
  });
});
