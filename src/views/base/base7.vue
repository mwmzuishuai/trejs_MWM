<template>
    <TresCanvas clearColor="#201919" shadows>
        <TresPerspectiveCamera :position="[15, 15, 15]" :fov="45" :near="0.1" :far="1000" :look-at="[0, 0, 0]" />
        <OrbitControls></OrbitControls>
        <TresGridHelper :position-y="0.1" />
        <Plane :args="[20, 20]" receive-shadow>
            <TresMeshToonMaterial />
        </Plane>
        <Sphere :args="[1, 500, 500]" :position="[4, 4, 4]" :position-y="y">
            <TresMeshToonMaterial color="#3f55e3" />
        </Sphere>
        <Box :args="[1, 1, 1]" :position="[-2, 2, -2]" ref="box">
            <TresMeshToonMaterial color="#fff200" />
        </Box>
        <Precipitation :speed="0.1" :area="[100, 100, 100]" :count="2000" ref="ddd" :size="0.2" />
        <TresDirectionalLight :position="[10, 8, 4]" :intensity="3" cast-shadow />
    </TresCanvas>

</template>
<script setup>
import { ref } from 'vue'
import { OrbitControls, Box, Plane, Sphere, Precipitation } from '@tresjs/cientos'
import { useRenderLoop } from '@tresjs/core'
const { onLoop } = useRenderLoop()
const box = ref()
const y = ref()
const ddd = ref()
onLoop(({ elapsed }) => {
    y.value = Math.sin(elapsed) + 2
    box.value.instance.rotation.y += 0.02
    box.value.instance.rotation.x += 0.02
    // console.log(ddd.value);

})
</script>
<style scoped lang='scss'></style>
<!-- <template>
    <div class="box">
        <div class="box1"></div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
</script>
<style scoped lang='scss'>
.box {
    width: 40vw;
    height: 40vh;
    background-color: cadetblue;
    overflow: auto;

    .box1 {
        width: 300px;
        height: 300px;
        background-color: #fff;

    }
}
</style> -->