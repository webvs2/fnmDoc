import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fnm",
  description: "fnm 中文文档",

  themeConfig: {
    
    search: {
      provider: 'local'
    },
    outline:false,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '入门', link: '/error' },

    ],

    sidebar: [
      { text: '入门', link: '/introduction' },
      { text: '常见错误', link: '/introduction' },

      {
        text: '基础',
        items: [
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'list-remote', link: '/api/list-remote' },
          { text: 'list', link: '/api/list' },
          { text: 'install', link: '/api/install' },
          { text: 'use', link: '/api/use' },
          { text: 'env ', link: '/api/env' },
          { text: 'completions', link: '/api-examples' },
          { text: 'alias', link: '/api/alias' },
          // { text: 'unalias ', link: '/api-examples' },
          { text: 'default ', link: '/api-examples' },
          { text: 'current ', link: '/api-examples' },
          { text: 'exec  ', link: '/api-examples' },
          // { text: 'uninstall  ', link: '/api-examples' },


        ]
      },
      {
        text: '进阶',
        items: [
          { text: '配置', link: '/markdown-examples' },
          
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
