<template>
    <TresCanvas clearColor="#63cdda">
        <TresPerspectiveCamera :position="[3, 3, 3]" :fov="45" :near="0.1" :far="1000" :look-at="[0, 0, 0]" />
        <OrbitControls></OrbitControls>
        <TresAmbientLight :intensity="0.5" />
        <TresMesh>
            <TresBoxGeometry />
            <MeshWobbleMaterial :speed="3" :factor="8" color="#ff6b81" />
        </TresMesh>
        <TresGridHelper :args="[10, 10]" />
        <TresDirectionalLight :intensity="1" :position="[2, 2, 2]" />

    </TresCanvas>
</template>
<script setup>
import { ref } from 'vue'
import { OrbitControls, Torus, MeshWobbleMaterial } from '@tresjs/cientos'
</script>
<style scoped lang='scss'></style>