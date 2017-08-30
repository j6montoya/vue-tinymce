<template>
    <textarea :id="id"></textarea>
</template>

<script type="text/javascript">

    import Vue from 'vue'

    export default {
        name: "tinymce",
        data() {
            return {
                tinymce: null
            }
        },
        props: {
            id: {
                type: String,
                default() {
                    return 'tinymce-' + this._uid
                }
            },
            options: Object,
            content: {
                type: String,
                default: null
            },
            value: String
        },
        watch: {
            value(newValue) {
                if (this.tinymce != null && newValue !== this.tinymce.getContent())
                    this.tinymce.setContent(newValue)
            }
        },
        mounted() {

            //Initial configuration
            let options = {}
            let s1 = new Function()
            let config = (editor) => {
                editor.on('NodeChange Change KeyUp', (e) => {
                    this.$emit('input', this.tinymce.getContent())
                    this.$emit('change', this.tinymce, this.tinymce.getContent())
                })
                editor.on('init', (e) => {
                    this.tinymce = editor
                    this.tinymce.setContent(this.value)
                    if (this.content != undefined) {
                        this.tinymce.setContent(this.content)
                        this.$emit('input', this.content)
                    }
                })
            }

            //Default configuration
            s1 = (e) => config(e)
            if (typeof this.options == 'object') {

                options = Object.assign({}, this.options)
                if (!this.options.hasOwnProperty('selector')) options.selector = '#' + this.id
                if (typeof this.options.setup == 'function') {
                    s1 = (editor) => {
                        config(editor)
                        this.options.setup(editor)
                    }
                }

            } else options.selector = '#' + this.id

            options.setup = (editor) => s1(editor);
            Vue.nextTick(() => tinymce.init(options))
        },
        beforeDestroy() {
            tinymce.execCommand('mceRemoveEditor', false, this.id)
        }
    }
    
</script>
