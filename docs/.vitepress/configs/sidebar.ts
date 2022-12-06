import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Sidebar = {

  '/': [
    {
      text: '指南',
      items: [
        {
          text: '使用指南',
          link: '/guide/',
        },
        {
          text: '问题解答',
          link: '/guide/faq',
        },
        {
          text: '进阶指南',
          link: '/guide/pro',
        }
      ],
    },
    {
      text: '关于',
      items: [
        {
            text: '更新日志',
            link: '/about/changelog',
          },
        {
            text: '关于此指南',
            link: '/about/',
        },
        {
            text: '贡献者',
            link: '/team/',
        }
      ],
    },
  ],
}