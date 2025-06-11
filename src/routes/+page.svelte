<script>
  import AppBar from '$lib/components/AppBar.svelte';
  import LensSelector from '$lib/components/LensSelector.svelte';
  import LensParameter from '$lib/components/LensParameter.svelte';
  import LensResult from '$lib/components/LensResult.svelte';
  let selectedLensType = 'telecentric';
</script>

<div class="bg-calido-bg dark:bg-dark-bg min-h-screen ">
  <AppBar title="Lens Selector" />
  <LensSelector bind:lensType={selectedLensType} />
  <LensParameter isTelecentric={selectedLensType === 'telecentric'} />
  <LensResult />
</div>
