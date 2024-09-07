<template>
  <button :class="['button', state, className]">
    <div :class="['value-wrapper', divClassName]">{{ label }}</div>
  </button>
</template>

<script>
import { defineProps } from "vue";

export default {
  name: "Button",
  props: {
    hasIconStart: {
      type: Boolean,
      default: false,
    },
    hasIconEnd: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "Button",
    },
    variant: {
      type: String,
      validator: function (value) {
        return ["primary"].indexOf(value) !== -1;
      },
    },
    state: {
      type: String,
      validator: function (value) {
        return ["hover", "default"].indexOf(value) !== -1;
      },
    },
    size: {
      type: String,
      validator: function (value) {
        return ["medium"].indexOf(value) !== -1;
      },
    },
    className: {
      type: String,
      default: "",
    },
    divClassName: {
      type: String,
      default: "",
    },
  },
};
</script>


<style>
.button {
  all: unset;
  align-items: center;
  border: 1px solid;
  border-color: var(--color-border-brand-default);
  border-radius: var(--size-radius-200);
  box-sizing: border-box;
  display: inline-flex;
  gap: var(--size-space-200);
  justify-content: center;
  overflow: hidden;
  padding: var(--size-space-300);
  position: relative;
}

.button .value-wrapper {
  color: var(--color-text-brand-on-brand);
  font-family: var(--single-line-body-base-font-family);
  font-size: var(--single-line-body-base-font-size);
  font-style: var(--single-line-body-base-font-style);
  font-weight: var(--single-line-body-base-font-weight);
  letter-spacing: var(--single-line-body-base-letter-spacing);
  line-height: var(--single-line-body-base-line-height);
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.button.default {
  background-color: var(--color-background-brand-default);
}

.button.hover {
  background-color: var(--color-background-brand-hover);
}

</style>
