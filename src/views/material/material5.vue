<template>
    <Suspense>
        <TresCanvas clearColor="#000" ref="ins">
            <TresPerspectiveCamera :position="[3, 3, 3]" :fov="45" :near="0.1" :far="1000" :look-at="[0, 0, 0]" />
            <OrbitControls></OrbitControls>
            <TresAmbientLight :intensity="0.5" />
            <Stars />
            <!-- <Suspense>
                <Environment background
                    :files="['pos-x.jpg', 'neg-x.jpg', 'pos-y.jpg', 'neg-y.jpg', 'pos-z.jpg', 'neg-z.jpg']"
                    path="/images/skyBox/6jpg/" />
            </Suspense> -->
            <Reflector :rotation="[-Math.PI * 0.5, 0, 0]" :position="[0, -0.1, 0]" color="#f7f7f7">
                <TresPlaneGeometry :args="[10, 10]" />
                <!-- <TresMeshBasicMaterial :map="pTexture" /> -->
            </Reflector>
            <TresGridHelper :args="[100, 100]" />
            <TresMesh ref="TreBoxRef" :position="[0, 5, 0]">
                <TresSphereGeometry :args="[1, 32, 32]" />
                <TresMeshBasicMaterial :map="pTexture" />
            </TresMesh>
        </TresCanvas>
    </Suspense>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { OrbitControls, Environment, Reflector, Stars, Plane } from '@tresjs/cientos'
import { useLoader, useTexture } from '@tresjs/core'
import { TextureLoader } from 'three'
const pTexture = ref()
onMounted(() => {
    useTexture({ map: './src/views/material/earth.jpg' }).then(res => {
        console.log(res);
        pTexture.value = res.map
    })
})
</script>
<style scoped lang='scss'></style>