<template>
    <TresCanvas clearColor="#63cdda" ref="tcRef">
        <TresPerspectiveCamera :position="[3, 3, 3]" :fov="45" :near="0.1" :far="1000" :look-at="[0, 0, 0]" />
        <OrbitControls></OrbitControls>
        <TresAmbientLight :intensity="0.5" />
        <TresGridHelper :args="[2, 10]" />
        <TresMesh v-for="item in 30" :key="item">
            <Sphere :args="[item / 30, 100, 100]">
                <TresMeshStandardMaterial
                    :color="[MathUtils.randInt(0.1, 1), MathUtils.randInt(0, 1), MathUtils.randInt(0, 1)]"
                    :side="DoubleSide" :clippingPlanes="clipPlanes" :clipIntersection="true" :roughness="0"
                    :metalness="1" />
            </Sphere>
        </TresMesh>
        <Suspense>
            <Environment background
                :files="['pos-x.jpg', 'neg-x.jpg', 'pos-y.jpg', 'neg-y.jpg', 'pos-z.jpg', 'neg-z.jpg']"
                path="/images/skyBox/6jpg/" />
        </Suspense>
        <TresDirectionalLight :position="[15, 15, 15]" :intensity="1" />
    </TresCanvas>
    <TresLeches key="n" />
</template>
<script setup>
import { ref, watchEffect } from 'vue'
import { OrbitControls, Torus, MeshWobbleMaterial, Sphere, Environment } from '@tresjs/cientos'
import { Plane, Vector3, DoubleSide, MathUtils } from 'three'
import { useRenderLoop } from '@tresjs/core'
import { useControls, TresLeches } from '@tresjs/leches'

import '@tresjs/leches/styles'
const { onLoop } = useRenderLoop()
const tcRef = ref()
let isXYZ = useControls({
    X: {
        value: 0,
        min: -1,
        max: 1,
        step: 0.1
    },
    Y: {
        value: 0,
        min: -1,
        max: 1,
        step: 0.1
    },
    Z: {
        value: 0,
        min: -1,
        max: 1,
        step: 0.1
    },
})
console.log(isXYZ);

const clipPlanes = [new Plane(new Vector3(1, 0, 0), 0), new Plane(new Vector3(0, -1, 0), 0), new Plane(new Vector3(0, 0, -1), 0)]
watchEffect(() => {


    if (tcRef.value && tcRef.value.context) {

        const renderer = tcRef.value.context.renderer.value
        renderer.localClippingEnabled = true
    }
})
onLoop(({ elapsed }) => {
    if (!tcRef.value) return
    clipPlanes[0].constant = isXYZ.X.value.value
    clipPlanes[1].constant = isXYZ.Y.value.value
    clipPlanes[2].constant = isXYZ.Z.value.value
})

</script>
<style scoped lang='scss'></style>