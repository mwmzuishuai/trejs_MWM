<template>
    <TresCanvas clearColor="#000">
        <TresPerspectiveCamera :position="[6, 6, 6]" :fov="45" :near="1" :far="1000" />
        <OrbitControls v-bind="controlsState" />
        <TresAmbientLight :intensity="0.5" />
    </TresCanvas>
</template>
<script setup>
import { ref } from 'vue'
import { OrbitControls, Box, Environment, Lightformer } from '@tresjs/cientos'

</script>
<style scoped lang='scss'></style>