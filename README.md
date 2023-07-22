$$
\begin{align*}
  x &= \mathrm{erf}\ \mathrm{atanh}\ \mathrm{cos}\ t \\
  y &= \mathrm{erf}\ \mathrm{atanh}\ \mathrm{sin}\ t
\end{align*}
$$

# Squoval

flatter and smoother rounded corners · web components

[![](https://img.shields.io/npm/v/squoval?style=for-the-badge&logo=npm&color=CB3837&labelColor=000&label)](https://www.npmjs.com/package/squoval)
[![](https://img.shields.io/badge/-html-e44d26?logo=html5&style=for-the-badge&labelColor=000)](./index.html)
[![](https://img.shields.io/badge/-CC%20BY--ND%204.0-f8722a?logo=creativecommons&style=for-the-badge&labelColor=000)](https://domrally.github.io/squoval)
[![](https://img.shields.io/badge/-prettier-f8bc45?style=for-the-badge&logo=prettier&labelColor=000)](./.prettierrc.js)
[![](https://img.shields.io/npm/l/squoval?style=for-the-badge&logo=opensourceinitiative&labelColor=000&label)](./LICENSE)
[![](https://img.shields.io/badge/-eslint-4B32C3?logo=eslint&style=for-the-badge&logoColor=4B32C3&labelColor=000)](./.eslintrc.json)

```sh
npm i squoval
```

```html
<script src="https://cdn.skypack.dev/squoval?min" type="module"></script>
```

```html
<squoval-element></squoval-element>
```

## proof notes

let us say that
f(t) = erf(cot(t))
h(t) = erf t
h'(t) = 2 e^(-z^2) / √π
g(t) = cot t
g'(t) = csc² t

the chain rule states that f'(x) = h'(g(t))g'(t)
so
f'(t) = (2 / √π) e^(-cot² t) csc² t

the product rule states that (uv)' = u'v + uv'
so
u' = (e^(-cot² t))' = -2 cot(t) csc²(t) e^(-cot² t)

u' = -2 cot(t) csc²(t) u

f⁽ⁿ⁾(t) ∝ u ∝ e^(-cot² t)

therefore
f(t) is flat wherever e^(-cot² t) = 0

limit of e^(-cot² t) as t -> 0 = 0

limit of e^(-cot² t) as t -> nπ = 0

f(t) is asymptotically flat at nπ
where n is an integer
