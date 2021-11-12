<script setup lang="ts">
  import StudentList from './components/StudentList.vue';
  import ObsStudentList from './components/ObsStudentList.vue';
</script>

<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--6-col">
      <h1> Demo Academy Class </h1>
    </div>

    <div class="mdl-cell mdl-cell--6-col">
      <h1> Observable Academy Class </h1>
    </div>

    <div class="mdl-cell mdl-cell--6-col">
      <StudentList></StudentList>
    </div>

    <div class="mdl-cell mdl-cell--6-col">
      <ObsStudentList></ObsStudentList>
    </div>

  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>
