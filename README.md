# Vue 2.1x Tinymce support

[![Latest Stable Version](https://img.shields.io/npm/v/vue-tinymce.svg?style=flat-square)](https://www.npmjs.com/package/vue-tinymce)
[![NPM Downloads](https://img.shields.io/npm/dt/vue-tinymce.svg?style=flat-square)](https://www.npmjs.com/package/vue-tinymce)

Tinymce support on Vue 2.1x

### Features

- [x] Set default content and binding content
- [x] Configurable options
- [x] Event to change content
- [x] v-model Support

### Install

Run the command below to install this package

```sh
npm install vue-tinymce --save
```

### Use
```javascript
import Vue from 'vue'
import VueTinymce from 'vue-tinymce'
Vue.use(VueTinymce)
```

### Vue template
```html
<div id="app">
  <tinymce id="editor" v-model="editor" :options="options" @change="change" :content='content'></tinymce>
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
