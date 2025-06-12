<script lang="ts">
  import { calculate } from '$lib/client';
  import { resultData, parameterData } from '$lib/stores';

  export let isTelecentric = true;

  // 重置表格數據
  function resetTables() {
    parameterData.set({
      pixelWidth: '',
      pixelHeight: '',
      pixelSize: '',
      magnification: '',
      focalLength: '',
      workingDistance: ''
    });

    resultData.set({
      fieldWidthMM: '',
      fieldHeightMM: '',
      resolutionUm: '',
      fieldWidthInch: '',
      fieldHeightInch: '',
      resolutionInch: ''
    });
  }

  // 提交表單數據並交由後端計算
  const handleSubmit = async () => {
    const data = {
      pixelWidth: +$parameterData.pixelWidth,
      pixelHeight: +$parameterData.pixelHeight,
      pixelSize: +$parameterData.pixelSize,
      magnification: isTelecentric ? +$parameterData.magnification : undefined,
      focalLength: isTelecentric ? undefined : +$parameterData.focalLength,
      workingDistance: isTelecentric
        ? undefined
        : +$parameterData.workingDistance
    };
    // 取得計算結果
    const result = await calculate(data);
    // 顯示結果至表格
    resultData.set({
      fieldWidthMM: result.fieldWidthMM,
      fieldHeightMM: result.fieldHeightMM,
      resolutionUm: result.resolutionUm,
      fieldWidthInch: result.fieldWidthInch,
      fieldHeightInch: result.fieldHeightInch,
      resolutionInch: result.resolutionInch
    });
  };
</script>

<form
  on:submit={handleSubmit}
  class="bg-calico-secondary dark:bg-dark-secondary flex flex-col justify-center gap-4
          rounded-lg p-6 shadow"
>
  <label class="block" for="pixelWidth">
    <span class="input-text-style">相機長邊解析度 (pixel)</span>
    <input
      type="text"
      id="pixelWidth"
      placeholder="2448"
      bind:value={$parameterData.pixelWidth}
      class="input-style"
    />
  </label>

  <label class="block" for="pixelHeight">
    <span class="input-text-style">相機短邊解析度 (pixel)</span>
    <input
      type="text"
      id="pixelHeight"
      placeholder="2048"
      bind:value={$parameterData.pixelHeight}
      class="input-style"
    />
  </label>

  <label class="block" for="pixelSize">
    <span class="input-text-style">像素尺寸 (um)</span>
    <input
      type="text"
      id="pixelSize"
      placeholder="3.45"
      bind:value={$parameterData.pixelSize}
      class="input-style"
    />
  </label>

  {#if isTelecentric}
    <label class="block" for="magnification">
      <span class="input-text-style">遠心鏡頭倍率</span>
      <input
        type="text"
        id="magnification"
        placeholder="0.8"
        bind:value={$parameterData.magnification}
        class="input-style"
      />
    </label>
  {:else}
    <label class="block" for="focalLength">
      <span class="input-text-style">鏡頭焦距 (mm)</span>
      <input
        type="text"
        id="focalLength"
        placeholder="25"
        bind:value={$parameterData.focalLength}
        class="input-style"
      />
    </label>

    <label class="block" for="workingDistance">
      <span class="input-text-style">工作距離 (mm)</span>
      <input
        type="text"
        id="workingDistance"
        placeholder="100"
        bind:value={$parameterData.workingDistance}
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
      on:click={resetTables}
      class="rounded bg-gray-200 px-4 py-2 text-gray-800
              transition transition-transform duration-100
              hover:bg-gray-300 active:bg-gray-400">重置</button
    >
  </div>
</form>
