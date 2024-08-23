<template>
  <div class="element-1">
    <Overlap />
    <OverlapWrapper />
    <OverlapGroupWrapper />
    <View3 />
    <View4 />
    <Element />
    <ElementWrapper />
  </div>
</template>

<script>
import Overlap from "./Element1/sections/Overlap.vue";
import OverlapWrapper from "./Element1/sections/OverlapWrapper.vue";
import OverlapGroupWrapper from "./Element1/sections/OverlapGroupWrapper.vue";
import View3 from "./Element1/sections/View3/View3.vue";
import View4 from "./Element1/sections/View4/View4.vue";
import Element from "./Element1/sections/Element.vue";
import ElementWrapper from "./Element1/sections/ElementWrapper.vue";

export default {
  name: "Element1",
  components: {
    Overlap,
    OverlapWrapper,
    OverlapGroupWrapper,
    View3,
    View4,
    Element,
    ElementWrapper,
  },
};
</script>


<style>
.element-1 {
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 0px 4px #00000040;
  height: 140px;
  left: 11px;
  position: absolute;
  top: 55px;
  width: 693px;
}
</style>