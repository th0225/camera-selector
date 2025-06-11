<script lang="ts">
  import { calculationResult } from '$lib/stores';
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';

  let result: any = null;

  $: result = $calculationResult;
</script>

<div class="flex flex-col gap-4">
  <div
    class="bg-calico-secondary dark:bg-dark-secondary flex flex-col gap-4 rounded-lg p-6 shadow"
  >
    <label class="block">
      <span class="input-text-style">長邊視野範圍 (mm)</span>
      <input
        type="text"
        value={result?.fieldWidthMM ?? ''}
        class="input-style"
        readonly
      />
    </label>

    <label class="block">
      <span class="input-text-style">短邊視野範圍 (mm)</span>
      <input
        type="text"
        value={result?.fieldHeightMM ?? ''}
        class="input-style"
        readonly
      />
    </label>

    <label class="block">
      <span class="input-text-style">像素精度 (um)</span>
      <input
        type="text"
        value={result?.resolutionUm ?? ''}
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
        value={result?.fieldWidthInch ?? ''}
        class="input-style"
        readonly
      />
    </label>

    <label class="block">
      <span class="input-text-style">短邊視野範圍 (inch)</span>
      <input
        type="text"
        value={result?.fieldHeightInch ?? ''}
        class="input-style"
        readonly
      />
    </label>

    <label class="block">
      <span class="input-text-style">像素精度 (inch)</span>
      <input
        type="text"
        value={result?.resolutionInch ?? ''}
        class="input-style"
        readonly
      />
    </label>
  </div>
</div>
