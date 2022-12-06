---
prev: '使用指南'
---


# 可能会出现的一些问题

当你确保按照正确安装步骤操作后依然安装失败，以下的说明可能可以帮到你

## 1.未解压或解压不正确

此时SMAPI会因为解压不正确而导致无法正常识别MOD，请务必确保解压正确完成。


## 2.未更新

从3.3.0版本起，我们将版本下限的要求从原来的`CP1.10.0，SMAPI2.6.0`改为了`CP1.26.5，SMAPI3.14.0`，此更新操作可能会导致部分老版本玩家在更新中文修订3.3.0并使用时遇到问题，所以请在使用3.3.0前务必保证你的CP和SMAPI均已更新至上述版本及之后。

由于未更新而导致的错误，SMAPI控制台可能会输出如下红色报错信息：

```
[SMAPI] Found 2 mod with warnings:
[SMAPI]    Skipped mods
[SMAPI]    --------------------------------------------------
[SMAPI]       These mods could not be added to your game.

[SMAPI]       - 贴吧官方中文修订 3.3.0 because it needs SMAPI 3.14.0 or later. Please update SMAPI to the latest version to use this mod.
[SMAPI]       - 贴吧官方中文修订 3.3.0 because it needs newer versions of some mods: Content Patcher (needs 1.26.5 or later).
```

此时按照报错指示，将二者更新至要求版本及之后即可。

本mod使用Content Patcher的定向修改功能，基本不会和其他mod冲突。

::: danger ⚠️警告！

一定不要自行更改manifest文件使之强行符合当前所需版本，中文修订3.3.0必须依赖于这二者的要求版本才能正常运行，否则可能会出现各种不可预料的错误！

:::