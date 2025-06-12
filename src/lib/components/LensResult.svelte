<script lang="ts">
  import { resultData } from '$lib/stores';
</script>

<div class="flex flex-col gap-4">
  <div
    class="bg-calico-secondary dark:bg-dark-secondary flex flex-col gap-4 rounded-lg p-6 shadow"
  >
    <label class="block">
      <span class="input-text-style">長邊視野範圍 (mm)</span>
      <input
        type="text"
        bind:value={$resultData.fieldWidthMM}
        class="input-style"
        readonly
      />
    </label>

    <label class="block">
      <span class="input-text-style">短邊視野範圍 (mm)</span>
      <input
        type="text"
        bind:value={$resultData.fieldHeightMM}
        class="input-style"
        readonly
      />
    </label>

    <label class="block">
      <span class="input-text-style">像素精度 (um)</span>
      <input
        type="text"
        bind:value={$resultData.resolutionUm}
        class="input-style"
        readonly
      />
    </label>
  </div>

  <div
    class="bg-calico-secondary dark:bg-dark-secondary flex flex-col gap-4 rounded-lg p-6 shadow"
  >
    <label class="block">
      <span class="input-text-style">長邊視野範圍 (inch)</span>
      <input
        type="text"
        bind:value={$resultData.fieldWidthInch}
        class="input-style"
        readonly
      />
    </label>

    <label class="block">
      <span class="input-text-style">短邊視野範圍 (inch)</span>
      <input
        type="text"
        bind:value={$resultData.fieldHeightInch}
        class="input-style"
        readonly
      />
    </label>

    <label class="block">
      <span class="input-text-style">像素精度 (inch)</span>
      <input
        type="text"
        bind:value={$resultData.resolutionInch}
        class="input-style"
        readonly
      />
    </label>
  </div>
</div>
