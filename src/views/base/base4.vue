<template>
    <TresCanvas clearColor="#201919" shadows>
        <TresPerspectiveCamera :position="[15, 15, 15]" :fov="45" :near="0.1" :far="1000" :look-at="[0, 0, 0]" />
        <OrbitControls></OrbitControls>
        <template v-for="item in [-2.5, 0, 2.5]">
            <template v-for="is in [-2.5, 0, 2.5]">
                <template v-for="id in [-2.5, 0, 2.5]" :key="`${[item, is, id]}`">
                    <Box :args="[1, 1, 1]" :position="[item + 1, is + 1, id + 1]" cast-shadow @pointer-enter="fan"
                        @pointer-leave="chu">
                        <TresMeshToonMaterial color="#3f55e3" />
                    </Box>
                </template>
            </template>
        </template>

        <TresDirectionalLight ref="TDirectionalLight" :position="[10, 8, 4]" :intensity="1" cast-shadow />
        <TresDirectionalLight :position="[10, 2, 4]" :intensity="1" cast-shadow />
        <TresGridHelper :position-y="-4" :args="[50, 50]" />
        <Plane :args="[20, 20]" :position-y="-4" receive-shadow>
            <TresMeshToonMaterial />
        </Plane>
    </TresCanvas>
</template>
<script setup>
import { ref } from 'vue'
import { OrbitControls, Box, Plane } from '@tresjs/cientos'
import { useRenderLoop } from '@tresjs/core'
const { onLoop } = useRenderLoop()
const fan = (e) => {
    e.stopPropagation()
    e.object.material.color.set('#8e44ad')
}
const chu = (e) => {
    e.object.material.color.set('#3f55e3')
}
</script>
<style scoped lang='scss'></style>