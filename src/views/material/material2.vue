<template>
    <TresCanvas v-bind="state" clear-color="#4bcffa">
        <TresPerspectiveCamera :position="[15, 15, 15]" :fov="45" :near="0.1" :far="1000" :look-at="[0, 0, 0]" />
        <OrbitControls></OrbitControls>
        <TresAmbientLight :intensity="0.5" />
        <TresDirectionalLight :position="[15, 15, 15]" :intensity="1" />
        <TorusKnot :args="[2, .6, 200, 8]">
            <MeshGlassMaterial />
        </TorusKnot>
        <Plane :args="[10, 10]" ref="plane" :position-y="-10">
            <TresMeshToonMaterial color="#7bed9f" />
        </Plane>
        <TresMesh :position="[-2.5, 1.5, 2.5]" receive-shadow cast-shadow name="cube">
            <TresCylinderGeometry :args="[1.5, 1.5, 2]" />
            <TresMeshStandardMaterial color="#3498db" :roughness="0" :metalness="1" />
        </TresMesh>
        <grid :args="[3, 3]" />
        <Suspense>
            <Environment background
                :files="['pos-x.jpg', 'neg-x.jpg', 'pos-y.jpg', 'neg-y.jpg', 'pos-z.jpg', 'neg-z.jpg']"
                path="/images/skyBox/6jpg/" />
        </Suspense>
    </TresCanvas>
</template>
<script setup>
import { ACESFilmicToneMapping } from 'three'
import { TresCanvas } from '@tresjs/core';
import { OrbitControls, MeshGlassMaterial, TorusKnot, Environment, Plane } from '@tresjs/cientos'
import { ref, reactive, onMounted } from 'vue'
import grid from '../../components/grid.vue';
const state = reactive({
    alpha: true,
    toneMapping: ACESFilmicToneMapping,
    clearColor: 0x000000,
    disableRender: false,
})
const materialState = reactive({
    color: '#ffffff',
    roughness: 0,
    reflectivity: 0.5,
    attenuationColor: '#ffffff',
    attenuationDistance: 2,
    chromaticAberration: 0.05,
    anisotropicBlur: 0.1,
    distortion: 0,
    temporalDistortion: 0,
    backside: true,
    thickness: 1,
    backsideThickness: 0.5,
})
</script>
<style scoped lang='scss'></style>