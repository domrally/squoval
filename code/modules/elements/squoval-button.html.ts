export const html = `
<style>
  :host {
    position: relative;
  }

  button {
    all: unset;

    inset: 0;
    position: absolute;
  }
</style>
<button></button>
<slot></slot>
`;
