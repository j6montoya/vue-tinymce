<template>
  <div id="app">
    <h1>Example Vue 2.0 and Tinymce</h1>
    <tinymce id="terms" content='<h1>Default content</h1>' :options='options' @change="changed"></tinymce>
    <p v-html="h"></div>
  </div>
</template>

<script>

  import Vue from 'vue'
  export default {
    name: 'example',
    data () {
      return {
        h: 'Text to bind'
      }
    },
    methods: {
      changed (editor, content) {
        this.h = content
      }
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