<template>
  <div id="app">
    <top></top>
    <app-content></app-content>
  </div>
</template>

<script>
import top from './components/top/top'
import appContent from './components/main/AppContent'

export default {
  name:'app',
  components:{
    top,appContent
  }
}
</script>
