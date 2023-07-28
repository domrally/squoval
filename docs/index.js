import { ErrorFunction } from 'oddball'

class SquovalElement extends HTMLElement {
	constructor() {
		super()

		const shadowRoot = this.attachShadow({ mode: 'open' })

		new ResizeObserver(() => {
			const { clientHeight, clientWidth } = this,
				curve = new Curve(clientWidth / clientHeight),
				step = 12 / (clientHeight + clientWidth),
				halfStep = 0.5 * step,
				π2 = Math.PI * 2

			let points = '',
				percents = ''
			for (let t = halfStep; t < π2; t += step) {
				const [x, y] = curve(-t),
					xx_xx = ((x * clientWidth) / 100).toFixed(2),
					yy_yy = ((y * clientHeight) / 100).toFixed(2)

				points += `${xx_xx},${yy_yy} `
				percents += `${x.toFixed(2)}% ${y.toFixed(2)}%, `
			}

			points = points.slice(0, -1)
			percents = percents.slice(0, -2)

			shadowRoot.innerHTML = `<style>:host { clip-path: polygon(${percents}) } svg, polygon { position: absolute; inset: 0;}</style><svg viewBox="0 0 ${clientWidth} ${clientHeight}"><polygon points="${points}" /></svg><slot></slot>`
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
