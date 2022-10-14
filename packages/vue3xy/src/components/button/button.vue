<!--
 * @Author: Chengbotao
 * @Date: 2022-10-11 11:22:01
-->
<template>
    <button v-if="!isLink" key="button" v-bind="$attrs" :disabled="disabled" :class="classes" @click="handleClick">
        <slot></slot>
    </button>
    <a v-else key="a" v-bind="$attrs" :href="href" :disabled="disabled" :class="classes" @click="handleClick">
        <slot></slot>
    </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'XyButton',
    inheritAttrs: false,
})

</script>

<script setup lang="ts">
import { computed } from "vue";
import classNames from "classnames";

enum ButtonSize {
    Large = "lg",
    Small = "sm",
}
enum ButtonType {
    Primary = "primary",
    Default = "default",
    Danger = "danger",
    Link = "link",
}
interface ButtonProps {
    disabled?: boolean
    href?: string
    className?: string
    size?: ButtonSize
    btnType?: ButtonType
}
interface ButtonEmits {
    (event: "click", payload: MouseEvent): void
}

// defineOptions({
//     name: 'XyButton',
//     inheritAttrs: false,
// })

// Props 类型标注
const props = withDefaults(defineProps<ButtonProps>(), {});
// Emit 类型标注
const emits = defineEmits<ButtonEmits>();
// 计算属性
const classes = computed(() => {
    return classNames("xy-button", props.className, {
        [`xy-button-${props.btnType}`]: props.btnType,
        [`xy-button-${props.size}`]: props.size,
        disabled: props.btnType === ButtonType.Link && props.disabled,
    });
})
const isLink = computed(() => {
    return props.btnType === ButtonType.Link && !!props.href;
})
const handleClick = (event: MouseEvent) => {
    emits("click", event)
}
// public 方法
defineExpose({})
</script>
