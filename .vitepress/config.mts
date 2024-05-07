import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '一半科技-文档',
  description: 'hello',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: '首页', link: '/' }],
    sidebar: [
      {
        text: '更新日志',
        items: [
          { text: 'ELN-更新日志', link: '/docs/update-log/eln/index' },
          { text: '设备-更新日志', link: '/docs/update-log/ept/index' },
          { text: '试剂库-更新日志', link: '/docs/update-log/wms/index' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    lastUpdated: {
      text: '更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
})
