import {observeResizing} from '../folders/squoval-element/observe-resizing.js';

export class SquovalLabel extends HTMLLabelElement {
  constructor() {
    super();

    observeResizing(this);
  }
}

customElements.define('squoval-label', SquovalLabel, {extends: 'label'});
