# Real aerial photos for the detection tests

`vegas-parking-lot.png` is a crop of a shopping-centre parking lot in Las Vegas, NV (WorldView-3
satellite image, 22 Oct 2015, pan-sharpened RGB, resampled to 0.30 m per pixel), from the
**SpaceNet** dataset on the AWS Registry of Open Data
(`s3://spacenet-dataset/AOIs/AOI_2_Vegas/PS-RGB/15OCT22183656-S2AS_R2C7-056155973040_01_P001_COG.TIF`,
window at column 4950, row 1180, 620 x 240 source pixels).

- Source: SpaceNet on Amazon Web Services (AWS), "The SpaceNet Catalog", https://spacenet.ai,
  imagery courtesy of Maxar Technologies.
- License: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). This crop (contrast
  stretched for display, resampled) is shared under the same license.

`vegas-parking-lot.json` holds the hand labels used by `tests/e2e/detect.spec.ts`: the centres of
clearly visible cars, and boxes that hold no car (bare stalls, tree crowns, planters, a curb, a cart
corral).
