---
layout: page
---

<center><font color = #6495ED>十分感谢以下各位的贡献，修订是一件很庞大且繁琐的事情，是一件需要持之以恒的事情，不积小流，无以成江海。</font></center>

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'
const coreMembers = [
    { avatar: 'https://files.timewind.fun/2022/12/tieba_logo.webp', name: '星露谷物语贴吧吧务团队' },


]
const partners = [
    { avatar: 'https://gss0.baidu.com/7Ls0a8Sm2Q5IlBGlnYG/sys/portrait/item/tb.1.3cdf3409.ju7E4DdWAkYrR9OGw0yngQ', name: '@起名十分困难' },
    { avatar: 'https://gss0.baidu.com/7Ls0a8Sm2Q5IlBGlnYG/sys/portrait/item/tb.1.c654bfea.PlSmYgXKtiS33wrvAPZiZg?t=1624580305', name: '@🐏🔯😈f' },
    { avatar: 'https://gss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portrait/item/tb.1.438312f4.WvHl9KPTz65e4F53Pdj63w?t=1480936054', name: '@Mars叔' },
    { avatar: 'https://gss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portrait/item/tb.1.4ff70d75.Xxt2eBF7m8WscTocNrm_Ag?t=1547438615', name: '@MZzz娘' },
    { avatar: 'https://gss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portrait/item/tb.1.c2c4a14e.Eo6opn2moUz_VOHxQQSfsA?t=1644423829', name: '@攻城狮Leo' },
    { avatar: 'https://gss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portrait/item/tb.1.4d107c87.bICMd6qrFZxbEaqd7h3jjA?t=1631856795', name: '@霸王' },
    { avatar: 'https://gss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portrait/item/tb.1.da70387.iA9twoePHxvGBwWSwnLe9Q?t=1406483614', name: '@炽天使瞬魂' },
    { avatar: 'https://gss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portrait/item/tb.1.7b7bf792.mCFB-rkK9FSqfRrmI32wGA?t=1448634115', name: '@瓜子要不啦' },
    { avatar: 'https://gss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portrait/item/tb.1.dbdff727.hcWVs2oT7GomLV04u_sPWw?t=1559932151', name: '@百浪多息' },
    { avatar: 'https://gss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portrait/item/tb.1.cefe9656.vNmUyip44vndz05_y3ihTg?t=1532323232', name: '@不会卖萌的喵呜' },
    { avatar: 'https://gss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portrait/item/tb.1.adba47af.1fYc9YAPBw97TbJTH_XQ0Q?t=1387088731', name: '@寿司迷糊皮卡丘' },
    { avatar: 'https://gss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portrait/item/tb.1.15328d7c.0oinTsehkOzmrwGYMLRXUw?t=1470200317', name: '@亚佩特之眼' },
    { avatar: 'https://gss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portrait/item/tb.1.f38eba5c.YVig2B0iPJrqGUKdtzy1sQ?t=1408081821', name: '@爱恨情愁都不休' },
    { avatar: 'https://gss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portrait/item/tb.1.7333c2e4.Kw6wHC-SjboFkj4WTFgzbw?t=1659092100', name: '@PEACHNOSE' },
    { avatar: 'https://gss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portrait/item/tb.1.f928362b.LibdYcLvLOUfvGeijLrpIA', name: '@夜末黎明' },
    { avatar: 'https://gss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portrait/item/tb.1.13e231d0.UWgLsbDwdGsN9KQI9mONwg', name: '@柜子里的芝士' },
    { avatar: 'https://gss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portrait/item/tb.1.2acde27.B2I9xtpkzo2oK84dgfTTDQ?t=1586355804', name: '@蘑菇王' },
    { avatar: 'https://gss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portrait/item/tb.1.4bfd3f36.L7S_TNDqjkH6G-NCRWtybw?t=1656609936', name: '@卷起千堆雪11' },
    { avatar: 'https://gss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portrait/item/tb.1.23236029.rroQZygrIig4L4J6aafqqw?t=1639653819', name: '@SithLord2000' },
    { avatar: 'https://gss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portrait/item/tb.1.7b1cec34.Wo-w9jjhGM2ARYXs_5yT0g?t=1665826272', name: '@深海红炎' },
    { avatar: 'https://gss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portrait/item/tb.1.4d08cbdb.-mHyLGf12nOOKIyH7IKkJA?t=1645291621', name: '@Катюша' },
    { avatar: 'https://gss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portrait/item/tb.1.9a475018.sYUmpqZm4P1I9DwTTJqW5Q?t=1583290507', name: '@housegatty' },
    { avatar: 'https://gss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portrait/item/tb.1.4ec29051.2uPANq6ehvdSfy3y-e-6mg?t=1662497983', name: '@三千零五十' },
    { avatar: 'https://gss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portrait/item/tb.1.b292f92a.DDVx08okvvLx3_bIxHzIbA?t=1490585546', name: '@scua菌' },
    { avatar: 'https://gss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portrait/item/tb.1.cffbfaa4.3t9olXHKD5510qLcfnocYw?t=1597093603', name: '@Elonaplus' },
]


</script>
<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>核心成员</template>
    <template #lead>来自星露谷物语贴吧吧务团队的各位</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="coreMembers" />
  <VPTeamPageSection>
    <template #title>社区成员</template>
    <template #lead>贴吧吧友、各个群友等</template>
    <template #members>
      <VPTeamMembers size="small" :members="partners" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
