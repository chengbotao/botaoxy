# Button

> 常用的操作按钮。

## 基础用法

<script setup lang="ts">
import {ref} from "vue"
const num = ref(0)
const handleClick = (event)=>{
    console.log(event)
    num.value++
}
</script>

<XyButton @click="handleClick">基础按钮</XyButton>
点击按钮试试: {{num}}

::: tip ❣️view the code❣️

```vue
<XyButton @click="handleClick">基础按钮</XyButton>
```

---

```ts
<script setup lang="ts">
import {ref} from "vue"
const num = ref(0)
const handleClick = (event) => {
    
    num.value++
}
</script>
```

:::

## 不同类型

<XyButton>默认按钮</XyButton>  
<XyButton btnType="primary">主要按钮</XyButton>  
<XyButton btnType="danger">警告按钮</XyButton>  
<XyButton btnType="link" href="#">文本按钮</XyButton>

::: tip ❣️view the code❣️

```vue
<XyButton>默认按钮</XyButton>
<XyButton btnType="primary">主要按钮</XyButton>
<XyButton btnType="danger">警告按钮</XyButton>
<XyButton btnType="link" href="#">文本按钮</XyButton>
```

:::

## 不同尺寸

<XyButton size="lg">大型按钮</XyButton>  
<XyButton>默认按钮</XyButton>  
<XyButton size="sm">小型按钮</XyButton>

::: tip ❣️view the code❣️

```vue
<XyButton size="lg">大型按钮</XyButton>
<XyButton>默认按钮</XyButton>
<XyButton size="sm">小型按钮</XyButton>
```

:::

## 禁用状态

<XyButton disabled>默认禁用按钮</XyButton>  
<XyButton btnType="link" href="#" disabled>文本禁用按钮</XyButton>

::: tip ❣️view the code❣️

```vue
<XyButton disabled>默认禁用按钮</XyButton>
<XyButton btnType="link" href="#" disabled>文本禁用按钮</XyButton>
```

:::

## Props 属性

> 支持原生 `Button` 和 `A` 属性

| 属性名      | 属性类型                                             | 说明                           | 默认值    |
| ----------- | ---------------------------------------------------- | ------------------------------ | --------- |
| `disabled`  | `boolean`                                            | 设置 Button 禁用               | `false`   |
| `btnType`   | `oneOf "primary" \| "danger" \| "link" \| "default"` | 设置 Button 类型               | `default` |
| `href`      | `string`                                             | 当 Button 为 link 类型时的地址 | -         |
| `className` | `string`                                             | 自定义`CSS`类名                | -         |
| `size`      | `oneOf "sm" \| "lg"`                                 | 设置 Button 尺寸               | -         |

## Event 事件

| 事件名  | 参数类型     | 说明     |
| ------- | ------------ | -------- |
| `click` | `MouseEvent` | 点击事件 |
