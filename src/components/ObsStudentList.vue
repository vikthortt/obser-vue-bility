<script setup lang="ts">
import { useObservable } from '@vueuse/rxjs'
import { Student } from '../models/student';
import { getStudentsObs } from '../services/students-observable'
import StudentRow from './StudentRow.vue'

const students$ = useObservable<Student[]>(getStudentsObs())

</script>

<template>
  <div class="demo-list mdl-list">
    <StudentRow v-for="student of students$" :student="student"></StudentRow>
  </div>
</template>

<style scoped>
.demo-list {
  margin: auto;
  width: 100%;
  max-width: 650px;
}
</style>