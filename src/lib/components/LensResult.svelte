<script lang="ts">
  import { resultData } from '$lib/stores';
</script>

<div class="flex flex-col gap-4">
  <div
    class="bg-calico-secondary dark:bg-dark-secondary flex flex-col gap-4 rounded-lg p-6 shadow"
  >
    <label class="block" for="fieldWidthMM">
      <span class="input-text-style">長邊視野範圍 (mm)</span>
      <input
        type="text"
        id="fieldWidthMM"
        bind:value={$resultData.fieldWidthMM}
        class="input-style"
        readonly
      />
    </label>

    <label class="block" for="fieldHeightMM">
      <span class="input-text-style">短邊視野範圍 (mm)</span>
      <input
        type="text"
        id="fieldHeightMM"
        bind:value={$resultData.fieldHeightMM}
        class="input-style"
        readonly
      />
    </label>

    <label class="block" for="resolutionUm">
      <span class="input-text-style">像素精度 (um)</span>
      <input
        type="text"
        id="resolutionUm"
        bind:value={$resultData.resolutionUm}
        class="input-style"
        readonly
      />
    </label>
  </div>

  <div
    class="bg-calico-secondary dark:bg-dark-secondary flex flex-col gap-4 rounded-lg p-6 shadow"
  >
    <label class="block" for="fieldWidthInch">
      <span class="input-text-style">長邊視野範圍 (inch)</span>
      <input
        type="text"
        id="fieldWidthInch"
        bind:value={$resultData.fieldWidthInch}
        class="input-style"
        readonly
      />
    </label>

    <label class="block" for="fieldHeightInch">
      <span class="input-text-style">短邊視野範圍 (inch)</span>
      <input
        type="text"
        id="fieldHeightInch"
        bind:value={$resultData.fieldHeightInch}
        class="input-style"
        readonly
      />
    </label>

    <label class="block" for="resolutionInch">
      <span class="input-text-style">像素精度 (inch)</span>
      <input
        type="text"
        id="resolutionInch"
        bind:value={$resultData.resolutionInch}
        class="input-style"
        readonly
      />
    </label>
  </div>
</div>
