<script setup lang="ts">
import { Student } from '../models/student';

type StudentRowProps = {
  student: Student
}

const { student } = defineProps<StudentRowProps>()
</script>

<template>
  <div class="mdl-list__item mdl-list__item--two-line">
    <span class="mdl-list__item-primary-content">
      <img class="mdl-list__item-avatar" :src="student.thumbnail">
      <span>{{ student.name }}</span>
      <span class="mdl-list__item-sub-title">{{ student.email }}</span>
    </span>
    <div class="mdl-list__item-secondary-content" href="#">
      <img class="mdl-list__item-avatar" :src="`https://flagcdn.com/32x24/${student.nationality.toLowerCase()}.png`">
    </div>
  </div>  
</template>