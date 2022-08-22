import { defaultTheme } from '@vuepress/theme-default'
import { navbarDefault } from './navbarDefault'
import { sidebarDefault } from './sidebarDefault'

export default defaultTheme({
    logo: 'logo.png',
    repo: 'zogsha/physique-chimie-vuepress',
    docsDir: 'docs',
    navbar: navbarDefault,
    sidebar: sidebarDefault,
})