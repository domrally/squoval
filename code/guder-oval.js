customElements.define(
  "guder-oval",
  class extends HTMLElement {
    constructor() {
      super();

      const shadow = this.attachShadow({ mode: "closed" });
      shadow.innerHTML = `<canvas></canvas>`;

      const canvas = shadow.firstElementChild;
      const context = canvas.getContext("2d");

      const gudermannian = (t) => {
        const sinh = Math.sinh(t);
        return Math.atan(sinh);
      };
      const x = (t) => {
        return gudermannian(2 * Math.cos(t) / Math.abs(Math.sin(t)));
      };
      const y = (t) => {
        return gudermannian(2 * Math.sin(t) / Math.abs(Math.cos(t)));
      };

      const resizeObserver = new ResizeObserver(() => {
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        canvas.width = width;
        canvas.height = height;

        context.beginPath();
        context.moveTo(width, height / 2);

        for (let t = 0.1; t < 2 * Math.PI; t += 0.1) {
          context.lineTo(x(t), y(t));
        }

        context.closePath();
        context.fill();

        const maskImage = canvas.toDataURL();
        // this.style.maskImage = `url(${maskImage})`;
      });

      resizeObserver.observe(this);
    }
  },
);
