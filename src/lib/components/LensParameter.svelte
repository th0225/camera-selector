<script lang="ts">
  import { calculate } from '$lib/client';
  import { calculationResult } from '$lib/stores';

  export let isTelecentric = true;

  let formData = {
    pixelWidth: '',
    pixelHeight: '',
    pixelSize: '',
    magnification: '',
    focalLength: '',
    workingDistance: ''
  };

  const handleSubmit = async () => {
    const data = {
      pixelWidth: +formData.pixelWidth,
      pixelHeight: +formData.pixelHeight,
      pixelSize: +formData.pixelSize,
      magnification: isTelecentric ? +formData.magnification : undefined,
      focalLength: isTelecentric ? undefined : +formData.focalLength,
      workingDistance: isTelecentric ? undefined : +formData.workingDistance
    };

    const result = await calculate(data);

    console.log(result);

    calculationResult.set(result);
  };
</script>

<form
  on:submit={handleSubmit}
  class="bg-calico-secondary dark:bg-dark-secondary flex flex-col justify-center gap-4
          rounded-lg p-6 shadow"
>
  <label class="block">
    <span class="input-text-style">相機長邊解析度 (pixel)</span>
    <input type="text" bind:value={formData.pixelWidth} class="input-style" />
  </label>

  <label class="block">
    <span class="input-text-style">相機短邊解析度 (pixel)</span>
    <input type="text" bind:value={formData.pixelHeight} class="input-style" />
  </label>

  <label class="block">
    <span class="input-text-style">像素尺寸 (um)</span>
    <input type="text" bind:value={formData.pixelSize} class="input-style" />
  </label>

  {#if isTelecentric}
    <label class="block">
      <span class="input-text-style">遠心鏡頭倍率</span>
      <input
        type="text"
        bind:value={formData.magnification}
        class="input-style"
      />
    </label>
  {:else}
    <label class="block">
      <span class="input-text-style">鏡頭焦距 (mm)</span>
      <input
        type="text"
        bind:value={formData.focalLength}
        class="input-style"
      />
    </label>

    <label class="block">
      <span class="input-text-style">工作距離 (mm)</span>
      <input
        type="text"
        bind:value={formData.workingDistance}
        class="input-style"
      />
    </label>
  {/if}

  <div class="mt-4 flex justify-end gap-3">
    <button
      type="submit"
      class="bg-calico-orange dark:bg-dark-orange text-calico-text dark:text-dark-bg
              rounded px-4
              py-2
              hover:bg-[#ff9944] active:bg-[#e88433]
              dark:hover:bg-[#ff9d55] dark:active:bg-[#dd7b2b]"
    >
      計算</button
    >
    <button
      type="reset"
      class="rounded bg-gray-200 px-4 py-2 text-gray-800
              transition transition-transform duration-100
              hover:bg-gray-300 active:bg-gray-400">重置</button
    >
  </div>
</form>
