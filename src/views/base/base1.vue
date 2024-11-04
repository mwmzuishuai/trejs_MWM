<!--
    组合
-->
<template>
    <TresCanvas clearColor="#000000">
        <TresPerspectiveCamera :position="[15, 15, 15]" :fov="45" :near="0.1" :far="1000" :look-at="[0, 0, 0]" />
        <OrbitControls />
        <TresAmbientLight :color="0xffffff" :intensity="0.5" />
        <TresGroup ref="groupRef" :position="[0, 0, 0]">
            <Sphere ref="planeRef" :args="[1, 500, 500]" :position="[-4, 0, 0]" cast-shadow>
                <TresMeshToonMaterial color="#FBB03B" />
            </Sphere>
            <Sphere ref="planeRef" :args="[1, 500, 500]" :position="[4, 0, 0]" cast-shadow>
                <TresMeshNormalMaterial />
            </Sphere>
        </TresGroup>
        <TresAxesHelper />
        <TresDirectionalLight :position="[0, 2, 4]" :intensity="2" cast-shadow />
    </TresCanvas>
</template>
<script setup>
import { useRenderLoop } from '@tresjs/core'
import { ref, onUnmounted } from 'vue'
import { OrbitControls, Box, Circle, Sphere, Octahedron, MeshGlassMaterial } from '@tresjs/cientos'
const { onLoop } = useRenderLoop()

const groupRef = ref()
onLoop(() => {
    if (groupRef.value) {
        groupRef.value.rotation.y += 0.01
    }
})
</script>