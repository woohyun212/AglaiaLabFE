<template>
  <footer>
    <p>&copy; 2024 Aglaia Lab</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px 0;
  margin-top: auto; /* Ensure footer sticks to the bottom if content is shorter than the viewport */
}
</style>