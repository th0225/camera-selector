<script lang="ts">
  import AppBar from '$lib/components/AppBar.svelte';
  import LensSelector from '$lib/components/LensSelector.svelte';
  import LensParameter from '$lib/components/LensParameter.svelte';
  import LensResult from '$lib/components/LensResult.svelte';
  let selectedLensType = 'telecentric';
</script>

<div class="bg-calido-bg dark:bg-dark-bg min-h-screen">
  <AppBar title="Pixel Scope" />

  <div class="mx-auto max-w-4xl space-y-6 px-4">
    <LensSelector bind:lensType={selectedLensType} />

    <div class="flex flex-col gap-4 md:flex-row md:justify-between">
      <LensParameter isTelecentric={selectedLensType === 'telecentric'} />
      <LensResult />
    </div>
  </div>
</div>
