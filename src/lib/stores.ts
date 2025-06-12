import { writable } from 'svelte/store';

export let parameterData = writable({
  pixelWidth: '',
  pixelHeight: '',
  pixelSize: '',
  magnification: '',
  focalLength: '',
  workingDistance: ''
});

export let resultData = writable({
  fieldWidthMM: '',
  fieldHeightMM: '',
  resolutionUm: '',
  fieldWidthInch: '',
  fieldHeightInch: '',
  resolutionInch: ''
});
