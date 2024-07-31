import { mount } from "@vue/test-utils";
import axios from "axios";
import EtudiantRemove from "../../src/components/EtudintRemove.vue";

jest.mock("axios"); 

describe("EtudiantRemove", () => {
  it("call axios", async () => {
    const wrapper = mount(EtudiantRemove, {
      props: {
        etudiantId: 1,
      },
    });

    await wrapper.find('[class="global-style-btn jest-remove-verify"]').trigger("click");
    expect(axios.delete).toHaveBeenCalledTimes(1);
  });
});
