import { get } from 'svelte/store';
import { parameterData, resultData } from '$lib/stores';
import sensorList from '$lib/data/sensors.json';

// 重置表格數據
export function resetTables() {
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

// 提交表單數據並計算
export async function handleSubmit(isTelecentric: boolean) {
  const params = get(parameterData);

  let fieldHeightMM: number, fieldWidthMM: number, resolutionUm: number;
  let fieldWidthInch: number, fieldHeightInch: number, resolutionInch: number;

  if (isTelecentric) {
    fieldHeightMM =
      (+params.pixelHeight * +params.pixelSize) / 1000 / +params.magnification;
    fieldWidthMM =
      (+params.pixelWidth * +params.pixelSize) / 1000 / +params.magnification;
    resolutionUm = (fieldHeightMM / +params.pixelHeight) * 1000;
  } else {
    fieldHeightMM =
      (+params.pixelHeight * +params.pixelSize * +params.workingDistance) /
      1000 /
      +params.focalLength;
    fieldWidthMM =
      (+params.pixelWidth * +params.pixelSize * +params.workingDistance) /
      1000 /
      +params.focalLength;
    resolutionUm = (fieldHeightMM / +params.pixelHeight) * 1000;
  }

  fieldWidthInch = fieldWidthMM / 25.4;
  fieldHeightInch = fieldHeightMM / 25.4;
  resolutionInch = resolutionUm / 1000 / 25.4;

  resultData.set({
    fieldWidthMM: fieldWidthMM.toFixed(6),
    fieldHeightMM: fieldHeightMM.toFixed(6),
    resolutionUm: resolutionUm.toFixed(6),
    fieldWidthInch: fieldWidthInch.toFixed(6),
    fieldHeightInch: fieldHeightInch.toFixed(6),
    resolutionInch: resolutionInch.toFixed(6)
  });
}

export async function handleSelect(model: string) {
  const found = sensorList.find((sensor) => sensor.model === model);
  const current = get(parameterData);

  if (found) {
    parameterData.set({
      pixelWidth: found.width.toString(),
      pixelHeight: found.height.toString(),
      pixelSize: found.pixel_size_um.toString(),
      magnification: current.magnification,
      focalLength: current.focalLength,
      workingDistance: current.workingDistance
    });
  } else {
    parameterData.set({
      pixelWidth: '',
      pixelHeight: '',
      pixelSize: '',
      magnification: current.magnification,
      focalLength: current.focalLength,
      workingDistance: current.workingDistance
    });
  }
}
