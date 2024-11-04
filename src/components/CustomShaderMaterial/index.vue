<template>
    <TresInstancedMesh ref="tmRef" :args="[null!, null!, 100]">
        <TresSphereGeometry :args="[1, 400, 400]" />
        <CustomShaderMaterial :baseMaterial="THREE.MeshPhysicalMaterial" :vertexShader="shader.vertex"
            :fragmentShader="shader.fragment" :uniforms="uniforms" transparent />
    </TresInstancedMesh>

</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import * as THREE from 'three'
import { CustomShaderMaterial, Sphere } from '@tresjs/cientos'
import { useRenderLoop } from '@tresjs/core'
const tmRef = ref(null)
const dummy = new THREE.Object3D()
const { onLoop } = useRenderLoop()
const uniforms = {
    uTime: {
        value: 0,
    },
}
const shader = {
    vertex: `
    uniform float uTime;
		varying vec3 vPosition;
// Precision-adjusted variations of https://www.shadertoy.com/view/4djSRW
float hash(float p) { p = fract(p * 0.011); p *= p + 7.5; p *= p + p; return fract(p); }
float hash(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.13); p3 += dot(p3, p3.yzx + 3.333); return fract((p3.x + p3.y) * p3.z); }

float noise(vec3 x) {
        const vec3 step = vec3(110, 241, 171);

    vec3 i = floor(x);
    vec3 f = fract(x);

    // For performance, compute the base input to a 1D hash from the integer part of the argument and the
    // incremental change to the 1D based on the 3D -> 1D wrapping
    float n = dot(i, step);

    vec3 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(mix(hash(n + dot(step, vec3(0, 0, 0))), hash(n + dot(step, vec3(1, 0, 0))), u.x),
            mix(hash(n + dot(step, vec3(0, 1, 0))), hash(n + dot(step, vec3(1, 1, 0))), u.x), u.y),
            mix(mix(hash(n + dot(step, vec3(0, 0, 1))), hash(n + dot(step, vec3(1, 0, 1))), u.x),
                mix(hash(n + dot(step, vec3(0, 1, 1))), hash(n + dot(step, vec3(1, 1, 1))), u.x), u.y), u.z);
    }

    vec3 displace(vec3 point) {
      vec3 instancePosition = (instanceMatrix * vec4(point, 1.)).xyz;
      return instancePosition + (normal * noise((instancePosition * 3.) + uTime) * 0.8);
    }  

    vec3 orthogonal(vec3 v) {
      return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0)
      : vec3(0.0, -v.z, v.y));
    }

    vec3 recalcNormals(vec3 newPos) {
      float offset = 0.001;
      vec3 tangent = orthogonal(normal);
      vec3 bitangent = normalize(cross(normal, tangent));
      vec3 neighbour1 = position + tangent * offset;
      vec3 neighbour2 = position + bitangent * offset;

      vec3 displacedNeighbour1 = displace(neighbour1);
      vec3 displacedNeighbour2 = displace(neighbour2);

      vec3 displacedTangent = displacedNeighbour1 - newPos;
      vec3 displacedBitangent = displacedNeighbour2 - newPos;

      return normalize(cross(displacedTangent, displacedBitangent));
    }

    void main() {
			vPosition = position;
      vec3 p = displace(position);
      csm_PositionRaw = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(p, 1.);
      csm_Normal = recalcNormals(p);
    }
    `,
    fragment: `
		varying vec3 vPosition;
		// 函数将 HSL 转换为 RGB
		vec3 hsl2rgb(float h, float s, float l) {
				float c = (1.0 - abs(2.0 * l - 1.0)) * s;
				float x = c * (1.0 - abs(mod(h * 6.0, 2.0) - 1.0));
				float m = l - c / 2.0;
				vec3 rgb;
				if (0.0 <= h && h < 1.0 / 6.0) {
						rgb = vec3(c, x, 0.0);
				} else if (1.0 / 6.0 <= h && h < 2.0 / 6.0) {
						rgb = vec3(x, c, 0.0);
				} else if (2.0 / 6.0 <= h && h < 3.0 / 6.0) {
						rgb = vec3(0.0, c, x);
				} else if (3.0 / 6.0 <= h && h < 4.0 / 6.0) {
						rgb = vec3(0.0, x, c);
				} else if (4.0 / 6.0 <= h && h < 5.0 / 6.0) {
						rgb = vec3(x, 0.0, c);
				} else if (5.0 / 6.0 <= h && h < 6.0 / 6.0) {
						rgb = vec3(c, 0.0, x);
				} else {
						rgb = vec3(0.0, 0.0, 0.0);
				}
				rgb += vec3(m);
				return rgb;
		}
    void main() {
      // csm_DiffuseColor = vec4(1.,1.,1.,1.);
			float h = mod(vPosition.x + vPosition.y + vPosition.z, 1.0); // 色相 H: [0, 1)
			float s = 0.9; // 饱和度 S: 固定为 0.8
			float l = 0.4; // 亮度 L: 固定为 0.5
			vec3 rgb = hsl2rgb(h, s, l);
			csm_DiffuseColor = vec4(rgb,1.);
    }
    `,
}
watch(
    () => tmRef.value,
    (newVal) => {
        if (newVal) {
            let i = 0
            for (let x = 0; x < 100; x++) {
                dummy.position.set(Math.random(), Math.random(), Math.random())
                dummy.rotation.set(Math.random(), Math.random(), Math.random())
                dummy.position.multiplyScalar(10)

                dummy.position.x -= 5
                dummy.position.y -= 5
                dummy.position.z -= 5

                dummy.updateMatrix()
                newVal.setMatrixAt(i++, dummy.matrix)
            }
            newVal.instanceMatrix.needsUpdate = true
        }
    },
)
onLoop(({ elapsed }) => {
    uniforms.uTime.value = elapsed
})
</script>
<style scoped lang='scss'></style>