import { ErrorFunction } from 'oddball'

export class SquovalElement extends HTMLElement {
	constructor() {
		super()

		const shadowRoot = this.attachShadow({ mode: 'open' })
		shadowRoot.innerHTML = '<slot></slot>'
		const style = shadowRoot.appendChild(document.createElement('style'))

		new ResizeObserver(() => {
			const { clientHeight, clientWidth } = this,
				curve = new Curve(clientWidth / clientHeight),
				step = 0.5 / (clientHeight + clientWidth),
				halfStep = 0.5 * step,
				π2 = Math.PI * 2

			let points = ''
			for (let t = halfStep; t < π2; t += step) {
				const [x, y] = curve(-t),
					xx_xx = x.toFixed(2),
					yy_yy = y.toFixed(2)

				points += `${xx_xx}% ${yy_yy}%, `
			}

			points = points.slice(0, -2)

			style.textContent = `:host { clip-path: polygon(${points}) }`
		}).observe(this)
	}
}

customElements.define('squoval-element', SquovalElement)

const Curve = function (aspectRatio) {
	return t => {
		let point = Squoval(t),
			{ sign } = Math,
			[x, y] = point

		if (aspectRatio > 1) {
			x += sign(x) * (aspectRatio - 1)
			x /= aspectRatio
		} else {
			y += sign(y) * (1 / aspectRatio - 1)
			y *= aspectRatio
		}

		x++
		y++
		x *= 50
		y *= 50
		return [x, y]
	}
}

function Squoval(t = 0) {
	const { atanh, cos, sin } = Math
	return [ErrorFunction(atanh(cos(t))), ErrorFunction(atanh(sin(t)))]
}
