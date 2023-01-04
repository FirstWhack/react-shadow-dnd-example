export default function blendColors(color1: string, color2: string, percentage: number = 0.5) {
  if (color1.length !== 4 && color1.length !== 7)
    throw new Error('colors must be provided as hexes');

  if (color2.length !== 4 && color2.length !== 7)
    throw new Error('colors must be provided as hexes');

  if (percentage > 1 || percentage < 0) throw new Error('percentage must be between 0 and 1');

  if (color1.length === 4)
    color1 = color1[1] + color1[1] + color1[2] + color1[2] + color1[3] + color1[3];
  else color1 = color1.substring(1);
  if (color2.length === 4)
    color2 = color2[1] + color2[1] + color2[2] + color2[2] + color2[3] + color2[3];
  else color2 = color2.substring(1);

  const color1RGB = [
    parseInt(color1[0] + color1[1], 16),
    parseInt(color1[2] + color1[3], 16),
    parseInt(color1[4] + color1[5], 16),
  ];
  const color2RGB = [
    parseInt(color2[0] + color2[1], 16),
    parseInt(color2[2] + color2[3], 16),
    parseInt(color2[4] + color2[5], 16),
  ];

  const color3 = [
    (1 - percentage) * color1RGB[0] + percentage * color2RGB[0],
    (1 - percentage) * color1RGB[1] + percentage * color2RGB[1],
    (1 - percentage) * color1RGB[2] + percentage * color2RGB[2],
  ];
  return '#' + hexFromInt(color3[0]) + hexFromInt(color3[1]) + hexFromInt(color3[2]);
}

function hexFromInt(num: number) {
  let hex = Math.round(num).toString(16);
  if (hex.length === 1) hex = '0' + hex;
  return hex;
}
