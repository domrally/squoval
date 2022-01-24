import {observeResizing} from './observe-resizing.js';

export class SquovalImg extends HTMLImageElement {
  constructor() {
    super();

    observeResizing(this);
  }
}

customElements.define('squoval-img', SquovalImg, {extends: 'img'});
