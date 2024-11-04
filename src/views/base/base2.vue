<!-- v-if -->
<template>
    <TresCanvas clearColor="#000000">
        <TresPerspectiveCamera :position="[5, 5, 5]" :fov="75" :aspect="1" :near="0.1" :far="1000" />
        <OrbitControls />
        <TresAxesHelper />
        <Box :args="[1, 10, 1]" v-if="cansed['蓝'].value.value">
            <TresMeshToonMaterial color="#3f55e3" />
        </Box>
        <Box :args="[1, 10, 1]" :position="[4, 0, 0]" v-if="cansed['绿'].value.value">
            <TresMeshToonMaterial color="#5afe38" />
        </Box>
        <Box :args="[1, 4, 1]" :position="[0, -3, 4]" v-if="cansed['黄'].value.value">
            <TresMeshToonMaterial color="#fff200" />
        </Box>
        <Box :args="[1, 6, 1]" :position="[4, -2, 4]" v-if="cansed['红'].value.value">
            <TresMeshToonMaterial color="#f53b57" />
        </Box>
        <TresDirectionalLight :position="[0, 2, 4]" :intensity="2" cast-shadow />
    </TresCanvas>
    <TresLeches />

</template>
<script setup>
import { ref, onUnmounted, watch } from 'vue'
import { useRenderLoop } from '@tresjs/core'
import { OrbitControls, Box } from '@tresjs/cientos'
import { useControls, TresLeches } from '@tresjs/leches'
import '@tresjs/leches/styles'
const { onLoop } = useRenderLoop()
const cansed = useControls({
    '蓝': true,
    '红': true,
    '绿': true,
    '黄': true,
})
onLoop(() => {


})
</script>
<style scoped lang='scss'></style>