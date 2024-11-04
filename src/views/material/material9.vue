<template>
    <TresCanvas clearColor="#000">
        <TresPerspectiveCamera :position="[15, 15, 15]" :fov="45" :near="0.1" :far="1000" :look-at="[0, 0, 0]" />
        <OrbitControls></OrbitControls>
        <TresAmbientLight :intensity="2" />

    </TresCanvas>
</template>
<script setup>
import { TresCanvas } from '@tresjs/core';
import { OrbitControls, Box, Environment, Lightformer } from '@tresjs/cientos'
import { useRenderLoop } from '@tresjs/core'
import { ref } from 'vue'
</script>
<style scoped lang='scss'></style>