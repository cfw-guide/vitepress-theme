/*
  Copyright (C) 2024 Nintendo Homebrew
  SPDX-License-Identifier: MIT
*/

import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'

/* FontAwesome stuff */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnet } from '@fortawesome/free-solid-svg-icons'
library.add(faMagnet)

import Tab from './components/Tab.vue'
import Tabs from './components/Tabs.vue'

import Btn from './components/Btn.vue'
import BtnToggler from './components/BtnToggler.vue'

import Layout from './Layout.vue'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app, router, siteData }) {
    app.component('font-awesome-icon', FontAwesomeIcon),
    app.component('Tab', Tab),
    app.component('Tabs', Tabs),
    app.component('Btn', Btn),
    app.component('BtnToggler', BtnToggler)
  }
}