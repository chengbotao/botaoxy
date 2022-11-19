<!--
 * @Author: Chengbotao
 * @Date: 2022-11-20 01:09:36
-->
<script lang="ts" setup>
    import {ref} from "vue"
    const inputVal = ref("")
    const handleChange = (event)=>{
        console.log(event)
    }
</script>
<xyInput icon="calendar" placeholder="cccc" v-model="inputVal" @input="handleChange"></xyInput>  
{{inputVal}}


---


<xyInput>
    <template #prepend>https://</template>
    <template #append>com</template>
</xyInput>