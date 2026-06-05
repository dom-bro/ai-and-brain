import { defineConfig } from 'vitepress'
import pkg from '../package.json'

export default defineConfig({
  lang: 'zh-CN',
  title: '📖《AI与大脑》',
  description: '一本关于 AI 与大脑的小书',
  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    nav: [
    ],

    sidebar: {
      '/s1-AI/': [
        {
          text: '🤖 AI狂飙之路',
          items: [
            { text: '本章导读', link: '/01-ai/' },
          ],
        },
      ],
      '/s2-brain/': [
        {
          text: '🧠 大脑的奥秘',
          items: [
            { text: '本章导读', link: '/02-brain/' },
          ],
        },
      ],
      '/s3-future/': [
        {
          text: '🌌 未来',
          items: [
            { text: '本章导读', link: '/03-future/' },
          ],
        },
      ],
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

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
              },
            },
          },
        },
      },
    },
  },
  base: `/${pkg.name}/`,
  srcDir: `./docs`,
  outDir: `./.vitepress/dist/${pkg.name}`,
})
