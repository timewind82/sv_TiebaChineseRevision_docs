import type { DefaultTheme } from 'vitepress'

export const nav = (): DefaultTheme.Config['nav'] => {
  return [
    { text: '更新日志', link: '/about/changelog' },
    { text: '贡献者', link: '/team/' },
  {
    text: '发布页面',
    items: [
      { text: 'Nexus', link: 'https://www.nexusmods.com/stardewvalley/mods/2936' },
      { text: '贴吧', link: 'https://tieba.baidu.com/p/7240245085' },
      { text: 'Github', link: 'https://github.com/timewind82/sv_TiebaChineseRevision' },
    ]
  }
  ]
}