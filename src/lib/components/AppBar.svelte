<script lang="ts">
  // 引入icon
  import { Camera, Sun, Moon, Github } from '@lucide/svelte';
  import { toggleTheme } from '$lib/theme';
  // Appbar名稱
  export let title = 'My App';
  // 是否為深色模式
  let isDark = false;
  // 切換主題顏色
  function changeTheme() {
    toggleTheme();
    isDark = document.documentElement.classList.contains('dark');
  }
  // 在組件掛載時檢查當前主題
  import { onMount } from 'svelte';
  onMount(() => {
    isDark = document.documentElement.classList.contains('dark');
  });
</script>

<!-- Appbar -->
<nav
  class="bg-calico-secondary dark:bg-dark-secondary
        text-calico-black dark:text-dark-black mb-4 px-4 py-3"
>
  <div class="container mx-auto flex items-center justify-between">
    <!-- 左側logo -->
    <div class="flex items-center gap-2 text-xl font-semibold">
      <Camera size="24" />
      <span class="text-xl font-semibold">{title}</span>
    </div>

    <!-- 主題顏色切換 -->
    <div class="flex items-center gap-6">
      <button
        on:click={changeTheme}
        class="flex cursor-pointer items-center gap-2 hover:text-gray-500"
      >
        {#if isDark}
          <Moon size="24" />
        {:else}
          <Sun size="24" />
        {/if}
      </button>
      <a
        href="https://github.com/th0225/camera-selector"
        class="block flex items-center gap-2 hover:text-gray-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github size="24" />
      </a>
    </div>
  </div>
</nav>
