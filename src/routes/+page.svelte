<script>
  import AppBar from '$lib/components/AppBar.svelte';
  import LensSelector from '$lib/components/LensSelector.svelte';
  import LensParameter from '$lib/components/LensParameter.svelte';
  import LensResult from '$lib/components/LensResult.svelte';
  let selectedLensType = 'telecentric';
</script>

<div class="bg-brand-background dark:bg-darkbrand-background min-h-screen ">
  <AppBar title="Lens Selector" />
  <LensSelector bind:lensType={selectedLensType} />
  <LensParameter isTelecentric={selectedLensType === 'telecentric'} />
  <LensResult />
</div>
