<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'

const { adUnits } = useData().site.value.themeConfig
const { Layout } = DefaultTheme
</script>

<template>
    <Layout>
        <template #doc-before>
            <div v-if="adUnits.length" :id="`waldo-tag-${adUnits[0]}`"></div>
        </template>
        <template #doc-after>
            <div v-if="adUnits.length" :id="`waldo-tag-${adUnits[1]}`"></div>
        </template>
    </Layout>
</template>