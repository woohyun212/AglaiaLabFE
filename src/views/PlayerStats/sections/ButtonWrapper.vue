<template>
  <Button
    class="button-instance"
    divClassName="design-component-instance-node"
    label="전적갱신"
    size="medium"
    state="default"
    variant="primary"
  />
</template>

<script>
import Button from "../../../components/Button.vue";

export default {
  name: "ButtonWrapper",
  components:{
    Button
  },
};
</script>


<style>

.button-instance {
  background-color: var(--vibrant-labelsvibrant-primary) !important;
  border-color: var(--color-border-neutral-tertiary) !important;
  border-radius: 15px !important;
  display: flex !important;
  height: 32px !important;;
  width: 78px !important;
}
.design-component-instance-node {
  color: var(--color-text-neutral-on-neutral) !important;
  font-family: "Inter", Helvetica !important;
  font-size: 16px !important;
  font-style: unset !important;
  font-weight: 400 !important;
  letter-spacing: 0 !important;
  line-height: 16px !important;
  margin-bottom: -3px !important;
  margin-left: -2.5px !important;
  margin-right: -2.5px !important;
  margin-top: -5px !important;
}

</style>