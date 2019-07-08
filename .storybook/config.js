import { configure } from "@storybook/react";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "../src/styles.css";
// automatically import all files ending in *.stories.js
const req = require.context("../src/stories", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
