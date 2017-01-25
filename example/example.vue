<template>
  <div id="app">
    <h1>Example Vue 2.1x and Tinymce</h1>
    <tinymce id="terms" v-model="h" :content='content' :options='options' @change="changed"></tinymce>
    <p v-html="h"></p>
  </div>
</template>

<script>

  import Vue from 'vue'
  export default {
    name: 'example',
    data () {
      return {
        h: 'Text to bind',
        content: '<h1>Default content</h1>',
        options: {}
      }
    },
    methods: {
      changed (editor, content) {}
    }
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-family: Arial, sans-serif;
  }
  body{
    background: #fdfdfd;
  }
  div{
    margin: auto;
    width: 500px;
  }
  h1{
    font: bold 20px Arial, sans-serif;
    margin: 20px 0 20px 0;
    color: #040404
  }
  p{
    margin: 20px 0 20px 0;
  }
</style>