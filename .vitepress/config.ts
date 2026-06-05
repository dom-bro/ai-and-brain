import { defineConfig } from 'vitepress'
import pkg from '../package.json'

export default defineConfig({
  lang: 'zh-CN',
  title: '📖《AI与大脑》',
  description: '一本关于 AI 与大脑的小书',
  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    sidebar: {
      '/ai/current-state': [
        {
          text: '🤖 AI狂飙之路',
          items: [
            { text: '最好的时代亦是最坏的时代', link: '/ai/current-state' },
          ],
        },
      ],
      // '/brain/': [
      //   {
      //     text: '🧠 大脑的奥秘',
      //     items: [
      //       { text: '本章导读', link: '/brain/' },
      //     ],
      //   },
      // ],
      // '/future/': [
      //   {
      //     text: '🌌 未来',
      //     items: [
      //       { text: '本章导读', link: '/future/' },
      //     ],
      //   },
      // ],
    },

    outline: {
      level: [2, 3],
      label: '本页大纲',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    lastUpdated: {
      text: '最后更新',
      formatOptions: { dateStyle: 'short', timeStyle: 'short' },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dom-bro/ai-and-brain' },
    ]
  },
  base: `/${pkg.name}/`,
  srcDir: `./docs`,
  outDir: `./.vitepress/dist/${pkg.name}`,
})
