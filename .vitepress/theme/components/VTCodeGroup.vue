<script lang="js" setup>
import  VTCodeGroupTab from './VTCodeGroupTab.vue';
import { useSlots, ref } from 'vue'
const activeTabIndex = ref(0)
const children = useSlots().default?.()
const tabs = children?.filter(({ type }) => type === VTCodeGroupTab)
</script>

<template>
  <div class="vt-code-group">
    <div class="vt-code-group-tabs">
      <div
        v-for="tab, idx in tabs"
        @click="activeTabIndex = idx"
        class="vt-code-group-tab"
        :class="{
          'vt-code-group-tab-active': activeTabIndex === idx
        }"
        :key="idx"
      >{{ tab.props?.label }}</div>
    </div>
    <div class="vt-code-group-contents">
      <component
      :key="idx"
        v-for="tab, idx in tabs"
        v-show="activeTabIndex === idx"
        :is="tab"
        :active="activeTabIndex === idx"
      />
    </div>
  </div>
</template>

<style >
.vt-code-group {
  display: flex;
  flex-direction: column;
  
}

.vt-code-group-contents .vt-code-group-content div[class*='language-'] {
  margin-top: 0;
  border-top-left-radius: 0;
}

.vt-code-group-tabs {
  display: flex;
  overflow: auto;
}

.vt-code-group-tab {
  color: #fff;
  white-space: pre;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #292d3ef0;
  border-bottom-color: rgba(255,255,255,0.3);
  padding: 6px 24px;
  border-width: 2px;
  border-style: solid;
  border-top: transparent;
  border-right: transparent;
  border-left: transparent;
  cursor: pointer;
  transition: border, background-color .2s;
    transition-property: border, background-color;
    transition-duration: 0.2s, 0.2s;
    transition-timing-function: ease, ease;
    transition-delay: 0s, 0s;
}

.vt-code-group-tab.vt-code-group-tab-active {
  background: #292d3e;
  border-bottom: 2px solid var(--vt-c-brand);
}

.vt-code-group-tab:first-child {
  border-top-left-radius: 8px;
}

.vt-code-group-tab:last-child {
  border-top-right-radius: 8px;
}

.dark .vt-code-group-tab {
  color: var(--vt-c-text-1);
}

.dark .vt-code-group-tab:not(.vt-code-group-tab-active) {
  border-bottom: 2px solid rgba(255,255,255,.2);
  background: var(--vt-c-black-mute);
}

.dark .vt-code-group-tab.vt-code-group-tab-active {
  background: var(--vt-c-black-soft);
}

@media (max-width: 639px) {
  .vt-code-group-tabs {
    margin: 0 -24px;
  }

  .vt-code-group-tab, .vt-code-group-tab:first-child, .vt-code-group-tab:last-child {
    flex-grow: 1;
    border-radius: 0;
  }
}

</style>
