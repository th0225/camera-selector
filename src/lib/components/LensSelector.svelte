<script>
  // 選擇鏡頭類型的組件
  export let lensType = 'telecentric';
  import { handleSelect } from '$lib/logic/formHandler';
  import sensorList from '$lib/data/sensors.json';

  let selectedModel = '';
</script>

<div class="bg-calico-secondary dark:bg-dark-secondary rounded-lg p-6 shadow
            flex flex-row gap-12 items-center">
  <div>
    <p class="text-calico-black dark:text-dark-orange mb-2 font-semibold">
      選擇鏡頭類型：
    </p>

    <label class="inline-flex cursor-pointer items-center" for="telecentric">
      <input
        type="radio"
        id="telecentric"
        bind:group={lensType}
        value="telecentric"
        class="form-radio"
      />
      <span class="text-calico-text dark:text-dark-text ml-2">遠心鏡頭</span>
    </label>

    <label class="ml-4 inline-flex cursor-pointer items-center" for="normal">
      <input
        type="radio"
        id="normal"
        bind:group={lensType}
        value="normal"
        class="form-radio"
      />
      <span class="text-calico-text dark:text-dark-text ml-2">一般鏡頭</span>
    </label>
  </div>

  <div>
    <p class="text-calico-black dark:text-dark-orange font-semibold">
      選擇感光元件：
    </p>
    <select
      bind:value={selectedModel}
      on:change={() => handleSelect(selectedModel)}
      class="select-style"
    >
      <option value="">---</option>
      {#each sensorList as sensor}
        <option value={sensor.model}>{sensor.model}</option>
      {/each}
    </select>
  </div>
</div>
