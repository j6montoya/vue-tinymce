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
If you have tinymce already loaded into your `<head>`
```javascript
import Vue from 'vue'
import VueTinymce from 'vue-tinymce'
Vue.use(VueTinymce)
```

Or you can import tinymce using javascript. First run `npm install tinymce --save`
```javascript
import Vue from 'vue'
import VueTinymce from 'vue-tinymce'

// Import TinyMCE
import tinymce from 'tinymce/tinymce'

// A theme is also required
import 'tinymce/themes/modern/theme'

// Any plugins you want to use have to be imported
import 'tinymce/plugins/paste'
import 'tinymce/plugins/link'

Vue.use(VueTinymce)
```
Also need the skin for tinymce to be copied to your public/build directory and the url set in the options of the component.
See [Getting the skin](https://www.tinymce.com/docs/advanced/usage-with-module-loaders/#gettingtheskin)
and [`skin_url` option](https://www.tinymce.com/docs/configure/editor-appearance/#skin_url)

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
