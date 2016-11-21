# Vue 2.0 Tinymce support
Tinymce support on Vue 2.0

### Features

- [x] Set default content
- [x] Configurable options
- [x] Event to change content

### Install

Run the command below to install this package

```sh
npm install vue-tinymce --save
```

### Use on ES2015
```javascript
import Vue from 'vue'
import VueTinymce from 'vue-tinymce'
Vue.use(VueTinymce)
```

### Use on Commonjs
```javascript
var Vue = require('vue')
var VueTinymce = require('vue-tinymce')
Vue.use(VueTinymce)
```

### Vue template
```html
<div id="app">
  <tinymce id="editor" :options="options" @change="change" content='Default content'></tinymce>
</div>
```

### Run example
```sh
npm install
npm run example
```

### Run build
```sh
npm install
npm run build
```

###License
https://opensource.org/licenses/Apache-2.0
