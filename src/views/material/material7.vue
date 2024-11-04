<template>
    <TresCanvas clearColor="#000">
        <TresPerspectiveCamera :position="[6, 6, 6]" :fov="45" :near="1" :far="1000" />


        <OrbitControls v-bind="controlsState" />
        <TresAmbientLight :intensity="0.5" />
        <TresDirectionalLight :position="[7, 10, -5.5]" :intensity="5" />
        <TresMesh :position="[0, 0.9, 0]" name="torus">
            <TresTorusKnotGeometry :args="[1, 0.35, 100, 32]" />
            <ClearcoatMaterial v-bind="clearcoatState" />
        </TresMesh>
        <Box :args="[1, 1, 1]">
            <ClearcoatMaterial v-bind="clearcoatState" />
        </Box>
        <TresGridHelper :args="[2, 10]" />
        <TresMesh :position="[-2.5, 0.5, 2.5]" receive-shadow cast-shadow name="cube">
            <TresCylinderGeometry :args="[1.5, 1.5, 2]" />
            <TresMeshStandardMaterial :color="0xff6622" :roughness="0" :metalness="0" />
        </TresMesh>
    </TresCanvas>


</template>
<script setup>
import { ref, reactive } from 'vue'
import { OrbitControls, Box, Environment, Lightformer } from '@tresjs/cientos'
import { useRenderLoop } from '@tresjs/core'
import ClearcoatMaterial from '../../components/ClearcoatMaterial/index.vue'
const { onLoop } = useRenderLoop()
const clearcoatState = reactive({
    color: '#2ed573',
    metalness: 1,
    roughness: 1,
    clearcoat: 1,
    clearcoatRoughness: 0,
})
const controlsState = reactive({
    enableDamping: true,
})
// onLoop(() => {
// })
</script>
<style scoped lang='scss'></style>