<script>
  import { Menu, X, Camera, Sun, Moon, Github } from '@lucide/svelte';
  let isOpen = false;
  export let title = 'My App';
</script>

<nav class="bg-gray-800 px-4 py-3 text-white shadow-md">
  <div class="container mx-auto flex items-center justify-between">
    <!-- 左側logo -->
    <div class="flex items-center gap-2 text-xl font-semibold">
      <Camera size="24" />
      <a href="/">{title}</a>
    </div>

    <!-- 右側Icon -->
    <div class="hidden items-center space-x-6 md:flex">
      <a href="/" class="block flex items-center gap-2 hover:text-gray-300">
        <Sun size="24" />
      </a>
      <a href="/github" class="block flex items-center gap-2 hover:text-gray-300">
        <Github size="24" />
      </a>
    </div>
  </div>
</nav>
