import { TButton } from "./button/index.mjs";
import { TInput } from "./input/index.mjs";
import { TTag } from "./tag/index.mjs";
const install = (app) => {
  app.component("TButton", TButton);
  app.component("TInput", TInput);
  app.component("TTag", TTag);
};
export default { install };
export { TButton, TInput, TTag };
