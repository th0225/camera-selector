<script>
  // 選擇鏡頭類型的組件
  export let lensType = 'telecentric';
</script>

<div
  class="bg-calico-secondary dark:bg-dark-secondary
          mx-auto max-w-md rounded-lg p-6 shadow"
>
  <p class="text-calico-black dark:text-dark-black mb-2 font-semibold">
    選擇鏡頭類型：
  </p>

  <label class="inline-flex cursor-pointer items-center">
    <input
      type="radio"
      bind:group={lensType}
      value="telecentric"
      class="form-radio"
    />
    <span class="text-calico-text dark:text-dark-text ml-2">遠心鏡頭</span>
  </label>

  <label class="ml-4 inline-flex cursor-pointer items-center">
    <input
      type="radio"
      bind:group={lensType}
      value="normal"
      class="form-radio"
    />
    <span class="text-calico-text dark:text-dark-text ml-2">一般鏡頭</span>
  </label>
</div>
<br />
