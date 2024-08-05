import { mount, flushPromises, VueWrapper } from "@vue/test-utils";
import Form from "../../src/components/Form.vue";
import axios from "axios";
import { etudiantsApi } from "../../src/assets/asset";

jest.spyOn(axios, "post").mockImplementation(() => {
  return Promise.resolve({
    id: 99,
    status: 200,
    message: "Data uploaded successfully",
  });
});
jest.spyOn(axios, "put").mockImplementation(() => {
  return Promise.resolve({
    id: 99,
    status: 200,
    message: "Data updated successfully",
  });
});
jest.spyOn(window, "alert").mockImplementation(() => {});

describe("Form", () => {
  let wrapper: VueWrapper | null = null;

  afterEach(() => {
    // Teardown
    wrapper?.unmount();
    wrapper = null;
    jest.clearAllMocks();
  });

  it("clear form by occuring reset", async () => {
    wrapper = mount(Form, {
      props: {
        isEdit: { bool: false },
        show: { bool: true },
        formContent: {
          id: 99,
          name: "mockName",
          email: "mock@mail.com",
        },
      },
    });
    await flushPromises();
    if (wrapper) {
      await wrapper.find("bform").trigger("reset"); //フォームのresetを直接作動させる
      expect(wrapper.html()).not.toContain("mockName");
    }
  });

  it("call axios.post if 'etudiant' isn't exist", async () => {
    wrapper = mount(Form, {
      props: {
        isEdit: { bool: false }, //create an etudiant
        show: { bool: true },
        formContent: {
          id: 99,
          name: "mockName",
          email: "mock@mail.com",
        },
      },
    });
    await flushPromises();
    if (wrapper) {
      await wrapper.find("bform").trigger("submit"); //フォームのsubmitを直接作動させる
      expect(axios.post).toHaveBeenCalledTimes(1);
      // expect(axios.post).toHaveBeenCalledWith(etudiantsApi)
      expect(axios.put).not.toHaveBeenCalledTimes(1);
    }
  });

  it("call axios.put if 'etudiant' is exist", async () => {
    wrapper = mount(Form, {
      props: {
        isEdit: { bool: true }, //edit an etudiant
        show: { bool: true },
        formContent: {
          id: 99,
          name: "mockName",
          email: "mock@mail.com",
        },
      },
    });
    await flushPromises();
    if (wrapper) {
      await wrapper.find("bform").trigger("submit"); //フォームのsubmitを直接作動させる
      expect(axios.post).not.toHaveBeenCalledTimes(1);
      expect(axios.put).toHaveBeenCalledTimes(1);
    }
  });
});
