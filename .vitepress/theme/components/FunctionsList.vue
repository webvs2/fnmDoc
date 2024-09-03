<template>
<div>
  <p class="function-item" v-for="item in list" :key="item">

    <span class="code">
      <code>
        {{ item.code }}
      </code>
      —
    </span>
    
    <span class="info">
{{  item.info }}
    </span>
  </p>
</div>
  

</template>
<script setup lang="js">
import {ref } from 'vue'
// `list-remote` 列出所有远程 Node.js 版本[别名:ls-remote]
// list 列出所有本地安装的 Node.js 版本[别名:ls]
// install 安装一个新的 Node.js 版本
// use 更改 Node.js 版本
// env 查看并设置 fnm 所需的环境变量
// completions 将 shell 完成打印到 stdout
// alias 将版本别名为通用名称
// unalias Remove an alias definition
// default 将某个版本设置为默认版本
// current 打印当前 Node.js 版本
// exec 在 fnm 上下文中运行命令
// uninstall 卸载 Node.js 版本
const list =ref([
  {
    code: 'list-remote',
    info: '列出所有远程 Node.js 版本[别名：ls-remote]'
  },
  {
    code: 'list',
    info: '列出所有本地安装的 Node.js 版本[别名：ls]'
  },
  {
    code: 'install',
    info: '安装一个新的 Node.js 版本'
  },
  {
    code: 'use',
    info: '更改 Node.js 版本'
  },
  {
    code: 'env',
    info: '查看并设置 fnm 所需的环境变量'
  },
  {
    code: 'completions',
    info: '将 shell 完成打印到 stdout'
  },
  {
    code: 'alias',
    info: '将版本别名为通用名称'
  },
  {
    code: 'unalias',
    info: '移除别名定义'
  },
  {
    code: 'default',
    info: '将某个版本设置为默认版本'
  },
  {
    code: 'current',
    info: '打印当前 Node.js 版本'
  },
  {
    code: 'exec',
    info: '在 fnm 上下文中运行命令'
  },
  {
    code: 'uninstall',
    info: '卸载 Node.js 版本'
  }
]
)
</script>
<style lang="scss">
.function-item{
  display: inline-flex;
  width: 100%;
  margin: 0 !important;
  padding: 0;
  padding-top: 5px;
  align-items: flex-end;
  .info {
    display: inline-block;
    margin-left: 10px;
    font-size: 14px;
    //color: #303133;
  }
  // border: solid red 1px;
  
}
</style>