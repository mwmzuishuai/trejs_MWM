<template>
    <primitive :object="ol.group" />
</template>

<script setup lang="ts">
import * as THREE from 'three'
import { useTresContext } from '@tresjs/core'
import { Outlines } from '@pmndrs/vanilla'
import { onMounted, watchEffect } from 'vue'

const props = withDefaults(
    defineProps<{
        color?: string
        thickness?: number
        screenspace?: boolean
    }>(),
    {
        color: '#ffffff',
        thickness: 0.1,
        screenspace: false,
    },
)

const { renderer } = useTresContext()
const ol = Outlines({
    color: new THREE.Color(props.color),
    thickness: props.thickness,
    screenspace: props.screenspace,
    gl: renderer.value,
})

onMounted(() => {
    ol.generate()
})

watchEffect(() => {
    ol.updateProps({
        color: new THREE.Color(props.color),
        thickness: props.thickness,
        screenspace: props.screenspace,
    })
})
</script>
