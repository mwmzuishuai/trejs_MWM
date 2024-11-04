<template>
    <TresCanvas v-bind="state" clearColor="#000">
        <TresPerspectiveCamera :position="[10, 10, 10]" :fov="45" :near="1" :far="1000" />
        <OrbitControls v-bind="controlsState" />
        <TresAmbientLight :intensity="0.5" />
        <TresDirectionalLight :position="[15, 15, 15]" :intensity="1" />

        <TresMesh :position="[0, 0.9, 0]" name="torus">
            <TresTorusKnotGeometry :args="[1, 0.35, 100, 32]" />
            <TresMeshStandardMaterial color="#ff33ff" :roughness="0.3" :metalness="0.5" />
            <outline v-bind="outlineState" />
        </TresMesh>

        <TresMesh :position="[-2.5, 0.5, 2.5]" receive-shadow cast-shadow name="cube">
            <TresCylinderGeometry :args="[1.5, 1.5, 2]" />
            <TresMeshStandardMaterial :color="0x33ffff" :roughness="0" :metalness="0" />
            <outline />
        </TresMesh>
    </TresCanvas>
    <TresLeches v-if="a" />
</template>

<script setup lang="ts">
import { ACESFilmicToneMapping } from 'three'
import { reactive, onUnmounted, ref } from 'vue'
import { OrbitControls } from '@tresjs/cientos'
// import { Pane } from 'tweakpane'
import outline from '../../components/Outlines.vue'
import { useControls, TresLeches } from '@tresjs/leches'
import { useRenderLoop } from '@tresjs/core'
import '@tresjs/leches/styles'
const { onLoop } = useRenderLoop()
const state = reactive({
    alpha: true,
    toneMapping: ACESFilmicToneMapping,
    clearColor: 0x000000,
})
const a = ref(true)
const controlsState = reactive({
    enableDamping: true,
    autoRotate: false,
})

const outlineState = reactive({
    color: '#ff00ae',
    thickness: 0.8,
    screenspace: false,
})
let m6 = useControls({
    color: '#ff00ae',
    thickness: {
        value: 0,
        min: 0,
        max: 10,
        step: 0.1
    },
    screenspace: false,
})
onLoop(() => {
    outlineState.color = m6.color.value.value
    outlineState.thickness = m6.thickness.value.value
    outlineState.screenspace = m6.screenspace.value.value

})

</script>
