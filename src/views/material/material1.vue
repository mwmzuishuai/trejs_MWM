<template>
    <TresCanvas clearColor="#4bcffa" shadows>
        <TresPerspectiveCamera :position="[15, 15, 15]" :fov="45" :near="0.1" :far="1000" :look-at="[0, 0, 0]" />
        <OrbitControls></OrbitControls>

        <Box :args="[1, 1, 1]" ref="box">
            <MeshGlassMaterial />
        </Box>
        <Sphere :args="[2, 500, 500]" :position="[4, 4, 4]">
            <MeshGlassMaterial />
        </Sphere>
        <Plane :args="[10, 10]" ref="plane">
            <TresMeshToonMaterial color="#fff200" />
        </Plane>
        <TresGridHelper />
        <TresAxesHelper />
        <TresDirectionalLight :position="[10, 8, 4]" :intensity="3" cast-shadow />
    </TresCanvas>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { OrbitControls, Box, Sphere, MeshGlassMaterial, Plane } from '@tresjs/cientos'
import { useRenderLoop } from '@tresjs/core'
const { onLoop } = useRenderLoop()
const plane = ref()
onLoop(({ elapsed }) => {
    plane.value.instance.rotation.y = 1.55
})
// onMounted(() => {
//     plane.value.instance.rotation.y = 1
// })
</script>
<style scoped lang='scss'></style>