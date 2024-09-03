<!-- # 介绍

This page demonstrates some of the built-in markdown extensions provided by VitePress. -->
<script setup>
// import { VTCodeGroup, VTCodeGroupTab } from '@vue/theme'
</script>

# 介绍

fnm 是一个快速、简单且高效的 Node.js 版本管理器，它用 Rust 编写，提供了跨平台支持。
<text>
fnm 是一个现代化、高效的 Node.js 版本管理工具，适用于需要在不同 Node.js 版本间快速切换的开发环境。其跨平台支持和基于 Rust 的开发保证了速度与兼容性。
</text>

## 安装

<VTCodeGroup>
  <VTCodeGroupTab label="General（推荐）">

```sh
choco install fnm
```

  </VTCodeGroupTab>
  <VTCodeGroupTab label="macOS/Linux">

```sh
##使用 Homebrew
brew install fnm
```

  </VTCodeGroupTab>

  <VTCodeGroupTab label="Windows">

```sh
##使用 Winget
winget install Schniz.fnm

## 或者 使用 Scoop
scoop install fnm
```

  </VTCodeGroupTab>
</VTCodeGroup>

### 使用发布二进制文件 （Linux/macOS/Windows）

下载适用于您的系统的最新版本二进制文件
使其在环境变量上全局可用 PATH
为 fnm 设置 shell

## API

```sh
 fnm [OPTIONS] <COMMAND>
```

<FunctionsList />

**Input**

````md
```js{4}
export default {
  data() {
    return {
      msg: "Highlighted!",
    };
  },
};
```
````

**Output**

```js{4}
export default {
  data() {
    return {
      msg: "Highlighted!",
    };
  },
};
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
