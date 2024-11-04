<!-- 基本 -->
<template>
    <TresCanvas clearColor="#201919" shadows>
        <TresPerspectiveCamera :position="[15, 15, 15]" :fov="45" :near="0.1" :far="1000" :look-at="[0, 0, 0]" />
        <OrbitControls></OrbitControls>
        <Box ref="fang1" :args="[2, 2, 2]" :position="[1, 2, 1]" @pointer-enter="fan" @pointer-leave="chu" cast-shadow>
            <TresMeshToonMaterial color="#3f55e3" />
        </Box>
        <Box ref="fang2" :args="[2, 2, 2]" :position="[-1, 2, -1]" @pointer-enter="fan" @pointer-leave="chu"
            cast-shadow>
            <TresMeshToonMaterial color="#3f55e3" />
        </Box>
        <Plane :args="[20, 20]" receive-shadow>
            <TresMeshToonMaterial />
        </Plane>

        <TresDirectionalLight ref="TDirectionalLight" :position="[10, 8, 4]" :intensity="1" cast-shadow />
        <TresDirectionalLight :position="[10, 2, 4]" :intensity="1" cast-shadow />

        <TresGridHelper :position-y="0.1" />
    </TresCanvas>
</template>
<script setup>
import { ref } from 'vue'
import { OrbitControls, Box, Plane } from '@tresjs/cientos'
import { useRenderLoop } from '@tresjs/core'
const { onLoop } = useRenderLoop()
const fang1 = ref()
const fang2 = ref()
const fan = (e) => {
    e.object.material.color.set('#8e44ad')
}
const chu = (e) => {
    e.object.material.color.set('#3f55e3')
}
onLoop(({ elapsed }) => {
    if (!fang1.value) return

    fang1.value.instance.position.y += Math.sin(elapsed) * 0.01
    fang2.value.instance.position.y += Math.sin(elapsed) * 0.01
})
</script>
<style scoped lang='scss'></style>