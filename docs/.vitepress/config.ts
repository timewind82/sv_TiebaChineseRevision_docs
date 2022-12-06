import { defineConfig } from 'vitepress'

import { nav } from './configs/nav'
import { sidebar } from './configs/sidebar'

export default defineConfig({
  lang: 'zh-CN',
  title: '星露谷物语贴吧中文修订MOD',
  description: '修订在星露谷物语游戏中遇到的翻译错误等问题。',

  lastUpdated: true,

  themeConfig: {
    socialLinks: [
      {
        icon: 'github', link: 'https://github.com/timewind82/sv_TiebaChineseRevision_docs',
      }
    ],

    nav: nav(),
    sidebar,

    footer: {
      message: '转载请联系作者，必须注明来源百度星露谷物语吧',  
      copyright: 'Copyright © 2018-现在 星露谷物语贴吧吧务团队',
    },
  },

})