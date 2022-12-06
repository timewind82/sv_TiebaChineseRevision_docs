# 使用指南

![chr.webp](https://files.timewind.fun/2022/12/chr.webp)

[[toc]]

::: tip

贴吧中文修订MOD同样也属于众多星露谷物语MOD中的一种，所以在开始之前请首先确保你已正确安装并学会使用SMAPI。

:::

本文将详细介绍贴吧中文修订MOD的安装与使用。

Nexus上的星露谷物语贴吧中文修订MOD：https://www.nexusmods.com/stardewvalley/mods/2936

星露谷物语百度贴吧中的帖子介绍：https://tieba.baidu.com/p/7240245085

反馈、补充翻译问题等请前往[1.5中文翻译错误收集帖子](https://tieba.baidu.com/p/7162730798)进行回帖说明。

## 快速开始

### 安装MOD

### 安装前的准备

::: warning

- 已在星露谷物语原版游戏的基础上安装SMAPI

[百度贴吧SMAPI安装教程贴](https://tieba.baidu.com/p/6035600429)

[星露谷物语中文WIKI的SMAPI条目](https://zh.stardewvalleywiki.com/%E6%A8%A1%E7%BB%84:%E5%9C%A8Windows%E4%B8%8A%E5%AE%89%E8%A3%85SMAPI)

- 已安装前置模组 Content Patcher

[Content Patcher的Nexus下载链接](https://www.nexusmods.com/stardewvalley/mods/1915)

:::

#### Content Patcher Mod下载安装方式
将下载完的Content Patcher Mod，**zip解压**，将**解压**出来得到的**文件夹**放到：

```
你的Steam所在盘\steam\steamapps\common\Stardew Valley\Mods
```

**前提是你已安装SMAPI，否则没有这个文件夹。**

解压的Content Patcher Mod文件夹内应该如下，否则解压可能不正确：

```
ContentPatcher/
 ├─ config.json
 ├─ ContentPatcher.dll
 ├─ ContentPatcher.pdb
 └─ manifest.json
```

![cp.png](https://files.timewind.fun/2022/12/cp.png)

### 安装MOD

目前的中文修订MOD一共有以下几种下载方式，不管哪个下载方式，我们都会同步第一时间进行上传更新，无需担心个别渠道会有滞后现象，所以请挑选适合自己（即可以流畅正常下载）的方式进行下载：

从国内下载环境出发，推荐度由上到下为：

- 蓝奏云 [点此前往下载页](https://wwub.lanzoue.com/i59jI05u4p0f) 密码:eozv
> 蓝奏云有时会因为自身原因导致原下载链接失效，请自行尝试更换官方最新链接进行下载。

- 百度网盘 [点此前往下载页](https://pan.baidu.com/s/1W7615ZiYV4Q5Rk1mJ-hmbw?pwd=an06) 提取码:an06

- Nexus，N网 [点此前往下载页](https://www.nexusmods.com/stardewvalley/mods/2936?tab=files)

- Github [点此前往下载页](https://github.com/timewind82/sv_TiebaChineseRevision/releases)

将下载完的星露谷物语贴吧中文修订MOD，**zip解压**，将**解压**出来得到的**文件夹**放到：

```
你的Steam所在盘\steam\steamapps\common\Stardew Valley\Mods
```

解压的星露谷物语贴吧中文修订Mod文件夹内应该如下，否则解压可能不正确：

```
[CP]贴吧官方中文修订x.x.x/
 ├─ [CP]贴吧官方中文修订/
 └─ 额外信息请戳我/
```

![chr.png](https://files.timewind.fun/2022/12/chr.png)

::: tip

此时可以直接将整个文件夹放至Mods文件夹内，也可以选择舍弃额外信息文件夹，单独将[CP]贴吧官方中文修订MOD本体文件夹放至Mods文件夹内，都不影响SMAPI读取运行。

注：从3.3.1版本起，将不再附带“额外信息请戳我”文件夹，故可能导致不一，无需担心。

:::

正确进行完以上几步后，此时的Mods文件夹内应该如下，否则可能上述步骤中存在错误：

```
/steam/steamapps/common/Stardew Valley/Mods/
 ├─ [CP]贴吧官方中文修订x.x.x/
     ├─ [CP]贴吧官方中文修订/
     └─ 额外信息请戳我/
 ├─ ErrorHandler/
 ├─ SaveBackup/
 ├─ ConsoleCommands/
 ├─ ContentPatcher/
 └─ 你的其他MOD
```

![chr2.png](https://files.timewind.fun/2022/12/chr2.png)

### 控制台输出

确定以上所有步骤都正确执行过之后，就可以启动SMAPI开始运行游戏了，见到SMAPI控制台输出类似如下的信息时，代表MOD安装成功：

```
[SMAPI] Loaded 4 mods:
[SMAPI]    Console Commands 3.14.6 by SMAPI | Adds SMAPI console commands that let you manipulate the game.
[SMAPI]    Content Patcher 1.26.5 by Pathoschild | Loads content packs which edit game data, images, and maps without changing the game files.
[SMAPI]    Error Handler 3.14.6 by SMAPI | Handles some common vanilla errors to log more useful info or avoid breaking the game.
[SMAPI]    Save Backup 3.14.6 by SMAPI | Automatically backs up all your saves once per day into its folder.
[SMAPI] Loaded 1 content packs:
[SMAPI]    贴吧官方中文修订 3.3.0 by 星露谷贴吧模组编写团队 戳破你个荷包蛋、Q星海之城、我时光 | for Content Patcher | 对中文版星露谷的错误及不恰当文本进行了修订
```