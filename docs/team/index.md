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
    { avatar: 'https://files.timewind.fun/2022/12/tb.1.3cdf3409.jpg', name: '@起名十分困难' },
    { avatar: 'https://files.timewind.fun/2022/12/tb.1.c654bfea.jpg', name: '@🐏🔯😈f' },
    { avatar: 'https://gss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portrait/item/tb.1.438312f4.WvHl9KPTz65e4F53Pdj63w?t=1480936054', name: '@Mars叔' },
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
