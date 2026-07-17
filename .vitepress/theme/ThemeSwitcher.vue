<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

interface Theme {
  id: string
  name: string
  swatch: string
}

const THEMES: Theme[] = [
  { id: 'default', name: 'Ocean', swatch: '#2563eb' },
  { id: 'midnight', name: 'Midnight', swatch: '#7c3aed' },
  { id: 'forest', name: 'Forest', swatch: '#059669' },
  { id: 'rose', name: 'Rose', swatch: '#e11d48' },
  { id: 'slate', name: 'Slate', swatch: '#475569' },
]

const STORAGE_KEY = 'cyberassure-theme'

const theme = ref('default')
const open = ref(false)
const root = ref<HTMLElement | null>(null)

const active = computed(
  () => THEMES.find((t) => t.id === theme.value) ?? THEMES[0]
)

function applyTheme(id: string) {
  theme.value = id
  open.value = false
  document.documentElement.dataset.theme = id
  try {
    localStorage.setItem(STORAGE_KEY, id)
  } catch {
    /* ignore storage errors */
  }
}

function onClickOutside(e: MouseEvent) {
  if (open.value && root.value && !root.value.contains(e.target as Node)) {
    open.value = false
  }
}

onMounted(() => {
  let saved: string | null = null
  try {
    saved = localStorage.getItem(STORAGE_KEY)
  } catch {
    /* ignore */
  }
  if (saved && THEMES.some((t) => t.id === saved)) {
    theme.value = saved
  }
  document.documentElement.dataset.theme = theme.value
  document.addEventListener('click', onClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onClickOutside)
})
</script>

<template>
  <div ref="root" class="ca-theme-switcher">
    <button
      class="ca-ts-trigger"
      :aria-expanded="open"
      aria-label="Change theme"
      @click="open = !open"
    >
      <span class="ca-ts-swatch" :style="{ backgroundColor: active.swatch }" />
      <span class="ca-ts-name">{{ active.name }}</span>
      <svg class="ca-ts-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <div v-if="open" class="ca-ts-menu">
      <button
        v-for="t in THEMES"
        :key="t.id"
        class="ca-ts-item"
        :class="{ 'ca-ts-item--active': t.id === theme }"
        @click="applyTheme(t.id)"
      >
        <span class="ca-ts-swatch" :style="{ backgroundColor: t.swatch }" />
        <span>{{ t.name }}</span>
        <span v-if="t.id === theme" class="ca-ts-check">✓</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.ca-theme-switcher {
  position: fixed;
  right: 1rem;
  top: 0.7rem;
  z-index: 60;
}

.ca-ts-trigger {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.75rem;
  border-radius: 9999px;
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-size: 0.75rem;
  font-weight: 600;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: background-color 0.15s, border-color 0.15s;
}
.ca-ts-trigger:hover {
  background-color: var(--vp-c-bg);
  border-color: var(--vp-c-brand-1);
}

.ca-ts-swatch {
  width: 0.875rem;
  height: 0.875rem;
  border-radius: 9999px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  flex-shrink: 0;
}

.ca-ts-caret {
  width: 0.75rem;
  height: 0.75rem;
  opacity: 0.6;
}

.ca-ts-menu {
  position: absolute;
  right: 0;
  top: calc(100% + 0.5rem);
  width: 10rem;
  border-radius: 0.75rem;
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  overflow: hidden;
  padding: 0.25rem;
}

.ca-ts-item {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 0.625rem;
  padding: 0.5rem 0.6rem;
  border-radius: 0.5rem;
  text-align: left;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s;
}
.ca-ts-item:hover {
  background-color: var(--vp-c-bg-soft);
}
.ca-ts-item--active {
  font-weight: 600;
  color: var(--vp-c-text-1);
}
.ca-ts-check {
  margin-left: auto;
  font-size: 0.75rem;
  color: var(--vp-c-brand-1);
}

@media (max-width: 640px) {
  .ca-ts-name {
    display: none;
  }
}
</style>
