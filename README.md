# Squoval

$$
\Huge
\begin{align*}
  x &= \text{erf atanh cos } t \\
  y &= \text{erf atanh sin } t
\end{align*}
$$

flatter and smoother rounded corners · web components

[![](https://img.shields.io/npm/v/squoval?style=for-the-badge&logo=npm&color=CB3837&labelColor=000&label)](https://www.npmjs.com/package/squoval)
[![](https://img.shields.io/badge/-html-e44d26?logo=html5&style=for-the-badge&labelColor=000)](./index.html)
[![](https://img.shields.io/badge/-CC%20BY--ND%204.0-f8722a?logo=creativecommons&style=for-the-badge&labelColor=000)](https://domrally.github.io/squoval)
[![](https://img.shields.io/badge/-prettier-f8bc45?style=for-the-badge&logo=prettier&labelColor=000)](./.prettierrc.js)
[![](https://img.shields.io/github/license/domrally/squoval?style=for-the-badge&logo=opensourceinitiative&labelColor=000&label)
](./LICENSE)
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

### smoothness

Derivatives exist at every point. Maybe want to show upper bound on derivatives.

### flatness

$$
\Huge
\begin{align*}
\text{A function is flat at a point if} & \text{ every derivative goes to zero at that point:} \\
\forall\ {\rm n} \in \mathbb{N}\text{, } \lim_{t\to 0} f^ {\rm (n)}_ {t} &= 0 \\
\\
x(t)     &= \text{erf atanh cos } t \\ 
x'_ {t}  &= e^ {-{\rm atanh}^ {2} \cos t}\ g(t) \\
x''_ {t} &= e^ {-{\rm atanh}^ {2} \cos t}\ (g'_ {t} + g^ {2}(t)) \\
&\dots \\
x^ {\rm (n)}_ {t} &\propto e^ {-{\rm atanh}^ {2} \cos t} \\
\\
\text{The function is flat wherever} & \text{ the exponential term is equal to zero.} \\
\forall\ m \in \mathbb{N}\text{, } \lim_{t\ \to\ m \pi} e^ {-{\rm atanh}^ {2} \cos t} &= 0 \\
\text{So the function} & \text{ is periodically flat.} \\
\therefore\ x^ {\rm (n)}_ {t} (m \pi) &= 0 \\
\end{align*}
$$
