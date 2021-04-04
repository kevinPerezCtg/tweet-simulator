<template>
  <nav class="navbar navbar-dark bg-dark">
      <div class="container">
          <span class="navbar-brand">Simulador de Tweets</span>
          <button class="btn pl-4 pr-4" :class="{'btn-success': !showform, 'btn-danger':showForm}" @click="openClosedForm">
              {{!showForm ? 'Nuevo Tweet': 'Cerrar Tweet'}}
          </button>
      </div>
  </nav>
</template>

<script>
export default {
    props:{
        showForm:Boolean,
        openClosedForm:Function,
    }

}
</script>

<style>

</style>