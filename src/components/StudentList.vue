<script setup lang="ts">
import { onBeforeMount, Ref, ref } from 'vue';
import { Student } from '../models/student';
import { getStudents } from '../services/students'
import StudentRow from './StudentRow.vue'

let students: Ref<Student[]> = ref<Student[]>([])

onBeforeMount(async () => {
  students.value = await getStudents();
})

</script>

<template>
  <div>
    <div class="demo-list mdl-list">
      <StudentRow v-for="student of students" :student="student"></StudentRow>
    </div>

    <button @click.prevent="students = []">DELETE LIST</button>

  </div>
</template>

<style scoped>
.demo-list {
  margin: auto;
  width: 100%;
  max-width: 650px;
}
</style>