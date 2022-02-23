export const html = () => `
<style>
  :host {
    position: relative;
  }
  output {
    all: inherit;
  }
</style>
<output>
  <slot></slot>
</output>
`;
