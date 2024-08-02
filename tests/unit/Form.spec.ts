import { mount, flushPromises, VueWrapper } from "@vue/test-utils";
import Form from "../../src/components/Form.vue";

describe.only("Form", () => {

  let wrapper: VueWrapper | null = null;

  afterAll(() => {
    // Teardown
    wrapper?.unmount();
    wrapper = null;
  });

  it("can clear form by occuring reset", async () => {
    wrapper = mount(Form, {
      props: {
        isEdit: {bool: true},
        show: {bool: true},
        formContent: {
          id: 99,
          name: "mockName",
          email: "mock@mail.com",
        },
      },
    });
    await flushPromises();
    await wrapper.find('bform').trigger('reset') //フォームのリセットを直接作動させる
    expect(wrapper.html()).not.toContain("mockName");
  });
});
