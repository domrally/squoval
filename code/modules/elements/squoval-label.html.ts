export const html = () => `
<style>
  :host {
    position: relative;
  }
  label {
    all: inherit;
  }
</style>
<label>
  <slot></slot>
</label>
`;
