import App from "./App.svelte";

const a = new App({
  target: document.body,
  props: {
    name: "world"
  }
});

export default a;
