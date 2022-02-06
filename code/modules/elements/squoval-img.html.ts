export const html = (that: HTMLElement) => `
<style>
  :host {
    position: relative;
  }

  img {
    all: unset;

    width: 100%;
    height: 100%;
    position: absolute;
  }
</style>
<img src="${that.getAttribute('src')}" alt="${that.getAttribute(
  'alt'
)}" width="${that.getAttribute('width')}" height="${that.getAttribute(
  'height'
)}" crossorigin="${that.getAttribute(
  'crossorigin'
)}" decoding="${that.getAttribute(
  'decoding'
)}" referrerpolicy="${that.getAttribute(
  'referrerpolicy'
)}" loading="${that.getAttribute('loading')}" sizes="${that.getAttribute(
  'sizes'
)}" srcset="${that.getAttribute('srcset')}" usemap="${that.getAttribute(
  'usemap'
)}">
<slot></slot>
`;
