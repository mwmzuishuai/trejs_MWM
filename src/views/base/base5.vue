<template>
    <TresCanvas clearColor="#201919" shadows>
        <TresPerspectiveCamera :position="[15, 15, 15]" :fov="45" :near="0.1" :far="1000" :look-at="[0, 0, 0]" />
        <OrbitControls></OrbitControls>
        <Stars />
        <Plane :args="[20, 20]" :position-y="-4" receive-shadow>
            <TresMeshToonMaterial />
        </Plane>
        <TresPoints>
            <TresBufferGeometry :position="[positionArray, 3]" :a-scale="[scaleArray, 1]" />
            <TresShaderMaterial v-bind="shader" />
        </TresPoints>
        <TresDirectionalLight ref="TDirectionalLight" :position="[10, 8, 4]" :intensity="1" cast-shadow />
        <TresGridHelper :position-y="4" :args="[20, 20]" />
    </TresCanvas>
</template>
<script setup>
import { ref } from 'vue'
import { OrbitControls, Box, Plane, Stars } from '@tresjs/cientos'
import { useRenderLoop } from '@tresjs/core'
import { AdditiveBlending } from 'three'
const shader = {
    transparent: true,
    blending: AdditiveBlending,
    depthWrite: false,

    vertexShader: `
  uniform float uPixelRatio;
  uniform float uSize;
  uniform float uTime;
  attribute float aScale;

  void main()
  {
      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      modelPosition.y += sin(uTime + modelPosition.x * 100.0) * aScale * 0.2;
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectionPosition = projectionMatrix * viewPosition;

      gl_Position = projectionPosition;
      gl_PointSize = aScale * uSize * uPixelRatio;
      gl_PointSize *= (1.0 / - viewPosition.z);
  }
  `,
    fragmentShader: `
  void main()
    {
      float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
      float strength = 0.05 / distanceToCenter - 0.1;

      gl_FragColor = vec4(1.0, 1.0, 1.0, strength);
    }
  `,
    uniforms: {
        uSize: { value: 100 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
        uTime: { value: 0 },
    },
}

const firefliesCount = 3000
const positionArray = new Float32Array(firefliesCount * 3)
const scaleArray = new Float32Array(firefliesCount)

for (let i = 0; i < firefliesCount; i++) {
    positionArray[i * 3 + 0] = Math.random() * 9
    positionArray[i * 3 + 1] = Math.random() * 9
    positionArray[i * 3 + 2] = Math.random() * 9
    scaleArray[i] = Math.random()
}
console.log(positionArray);
console.log(scaleArray);


const { onLoop } = useRenderLoop()

onLoop(({ elapsed }) => {
    shader.uniforms.uTime.value = elapsed
})

</script>
<style scoped lang='scss'></style>