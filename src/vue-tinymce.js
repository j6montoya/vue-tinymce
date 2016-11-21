import Tinymce from './tinymce.vue'

function plugin(Vue){
    if(plugin.installed) return
    Vue.component('tinymce', Tinymce)
}

export default plugin