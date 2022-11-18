<!--
 * @Author: Chengbotao
 * @Date: 2022-11-17 23:16:43
-->
<template>
    <FontAwesomeIcon v-bind="$attrs" :class="classes"></FontAwesomeIcon>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'XyIcon',
    inheritAttrs: false
    
})

</script>

<script setup lang="ts">
import { computed } from "vue";
import classNames from "classnames";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/vue-fontawesome";

type ThemeProps =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'light'
    | 'dark';

interface IconProps extends FontAwesomeIconProps {
    className?: string
    theme?: ThemeProps
}

const props = withDefaults(defineProps<IconProps>(), {
});

const classes = computed(() => {
    return classNames("xy-icon", props.className, {
        [`xy-icon-${props.theme}`]: props.theme,
    });
})
</script>

