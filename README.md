![Screenshot 2022-01-25 at 09-06-35 Squoval —rounded corners copy](https://user-images.githubusercontent.com/10066435/151048223-a68e95bb-74ab-4574-9e8d-dfea99fcf862.png)
# Squoval
flatter and smoother rounded corners · web components

```
╭   ╮       ╭                  ╮
│ x │       │ cos t  │ csc t │ │
│   │ = erf │        │       │ │
│ y │       │ sin t  │ sec t │ │
╰   ╯       ╰                  ╯
```

<br>

**. Use as drop-in replacements for built-in elements**

`` `html`` 
```html
<squoval-div></squoval-div>
<squoval-span></squoval-span>

<squoval-button></squoval-button>
<squoval-label>
  <squoval-input></squoval-input>
</squoval-label>

<squoval-img src=""></squoval-img>
```

<br>

**. If using in html**

`` `html`` 
```html
<script src="https://cdn.skypack.dev/squoval?min" type="module"></script>
```

<br>

**. If using in node**

`` `sh`` 
```sh
npm i squoval
```

<br>

<br>

[![](https://img.shields.io/npm/v/squoval?style=for-the-badge&label=version&logo=npm&color=CB3837)](./package.json
) [![](https://img.shields.io/badge/markup-html-e44d26?logo=html5&style=for-the-badge)](./code/modules/squoval-element/squoval-element.html
) [![](https://img.shields.io/badge/site-CC%20BY--ND%204.0-f8722a?logo=creativecommons&style=for-the-badge)](https://domrally.github.io/squoval
) [![](https://img.shields.io/badge/formatter-prettier-f8bc45?style=for-the-badge&logo=prettier)](./.prettierrc.js
) [![](https://img.shields.io/npm/l/squoval?style=for-the-badge&color=3DA639&logo=opensourceinitiative)](./LICENSE
) [![](https://img.shields.io/badge/scripting-ts-3178c6?logo=typescript&style=for-the-badge)](./tsconfig.json
) [![](https://img.shields.io/badge/style-css-264de4?logo=css3&style=for-the-badge&logoColor=264de4)](./code/modules/squoval-element/squoval-element.css
) [![](https://img.shields.io/badge/linter-es-4B32C3?logo=eslint&style=for-the-badge&logoColor=4B32C3)](./.eslintrc.json
) [![](https://img.shields.io/badge/guide-google-blueviolet?style=for-the-badge&logo=google&logoColor=blueviolet)](https://github.com/google/gts)


```
code╱
├── exports╱
├── modules╱
╰── index.ts

docs╱
├── exports╱
│   ╰── style.css
│
├── modules╱
│   ├── fonts╱
│   ╰── pages╱
│
╰── index.html

tests╱
├── exports╱
├── modules╱
╰── tests.js
```
