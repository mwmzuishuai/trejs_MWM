<template>
    <TresCanvas clearColor="#201919" shadows>
        <TresPerspectiveCamera :look-at="[0, 4, 0]" />
        <OrbitControls></OrbitControls>
        <TresMesh :position="[0, 1, 0]" @click="(event) => {
            console.log('pointer-down')
            if (!boxOneBlocksPointerEvents) {
                event.stopPropagation()
            }
        }
            ">
            <TresBoxGeometry :args="[1, 1, 1]" />
            <TresMeshNormalMaterial />
        </TresMesh>
        <TresMesh :position="[-2, 0, -2]" name="box 2" @click="log('点击了 Box2 📦')">
            <TresBoxGeometry :args="[1, 1, 1]" />
            <TresMeshNormalMaterial />
            <Html :center="true" transform>
            <h1 class="bg-white text-xs p-0.5 rounded -mt-10">
                Box2 📦
            </h1>

            </Html>
        </TresMesh>
        <TresDirectionalLight :position="[10, 8, 4]" :intensity="1" cast-shadow />
        <TresGridHelper :position-y="0.1" />

    </TresCanvas>
</template>
<script setup>
import { ref } from 'vue'
import { OrbitControls, Box, Plane, Html } from '@tresjs/cientos'
import { useRenderLoop } from '@tresjs/core'
const { onLoop } = useRenderLoop()
</script>
<style scoped lang='scss'>
.text {
    color: salmon;
    background-color: #fff;
}
</style>