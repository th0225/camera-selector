<script>
  export let isTelecentric = true;
</script>

<form
  class="bg-brand-appbar dark:bg-darkbrand-appbar mx-auto max-w-md rounded-lg p-6 shadow"
>
  <label class="block">
    <span class="text-gray-900">相機長邊解析度 (pixel)</span>
    <input type="text" name="pixelWidth" class="input-style" />
  </label>
  <br />

  <label class="block">
    <span class="text-gray-900">相機短邊解析度 (pixel)</span>
    <input type="text" name="pixelHeight" class="input-style" />
  </label>
  <br />

  <label class="block">
    <span class="text-gray-900">像素尺寸 (um)</span>
    <input type="text" name="pixelSize" class="input-style" />
  </label>
  <br />

  {#if isTelecentric}
    <label class="block">
      <span class="text-gray-900">遠心鏡頭倍率</span>
      <input type="text" name="magnification" class="input-style" />
    </label>
    <br />
  {:else}
    <label class="block">
      <span class="text-gray-900">鏡頭焦距 (mm)</span>
      <input type="text" name="focalLength" class="input-style" />
    </label>
    <br />

    <label class="block">
      <span class="text-gray-900">工作距離 (mm)</span>
      <input type="text" name="workingDistance" class="input-style" />
    </label>
    <br />
  {/if}

  <div class="flex justify-end gap-3">
    <button type="submit" class="btn-primary">計算</button>
    <button type="reset" class="btn-secondary">重置</button>
  </div>
</form>

<br />
