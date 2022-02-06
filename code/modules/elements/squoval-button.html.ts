export const html = (that: HTMLElement) => `
<style>
  :host {
    position: relative;
  }

  button {
    all: unset;

    width: 100%;
    height: 100%;
    position: absolute;
  }
</style>
<button aria-label="${that.getAttribute('aria-label')}" type="${that.getAttribute('type')}" name="${that.getAttribute('name')}" value="${that.getAttribute('value')}" form="${that.getAttribute('form')}" formaction="${that.getAttribute('formaction')}" formenctype="${that.getAttribute('formenctype')}" formmethod="${that.getAttribute('formmethod')}" formnovalidate="${that.getAttribute('formnovalidate')}" formtarget="${that.getAttribute('formtarget')}"></button>
<slot></slot>
`;
