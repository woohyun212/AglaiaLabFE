<template>
  <div class="right">
<!--    <View5 />-->
<!--    <Element1 />-->
<!--    <Element2 />-->
<!--    <Element3 />-->
<!--    <Element4 />-->
<!--    <Element5 />-->
<!--    <View6 />-->
  </div>
</template>

<script>
import View5 from "./Right/sections/View5.vue";
import Element1 from "./Right/sections/Element1.vue";
import Element2 from "./Right/sections/Element2.vue";
import Element3 from "./Right/sections/Element3.vue";
import Element4 from "./Right/sections/Element4.vue";
import Element5 from "./Right/sections/Element5.vue";
import View6 from "./Right/sections/View6.vue";

export default {
  name: "Right",
  components: {
    View5,
    Element1,
    Element2,
    Element3,
    Element4,
    Element5,
    View6,
  },
};
</script>


<style>
.right {
  background-color: #ffffffcc;
  border-radius: 15px;
  box-shadow: 0px 0px 4px 2px #00000040;
  width: 71.2%;
  height: 100%;
}
</style>