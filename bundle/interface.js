"use strict";
function createIntel(processor) {
    console.log(`
    ----
    terimakasih ${processor.brand}
    ----
    anda telah berhasil membuat processor dengan detail berikut:

    nama base model: ${processor.baseModel}
    nama model: ${processor.modelName}
    total core: ${processor.coreTotal}
    kecepatan clock: ${processor.clockSpeed}
    turbo boost enabled? ${processor.turboBoost}
    `);
}
function createAMD(processor) {
    console.log(`
    ----
    terimakasih ${processor.brand}
    ----
    anda telah berhasil membuat processor dengan detail berikut:

    nama base model: ${processor.baseModel}
    nama model: ${processor.modelName}
    total core: ${processor.coreTotal}
    kecepatan clock: ${processor.clockSpeed}
    precision boost enabled? ${processor.precisionBoost ? processor.precisionBoost : "Tidak ada"}
    `);
}
const corei5 = {
    brand: "Intel",
    baseModel: "core i5",
    modelName: "i5-11350F",
    clockSpeed: 4,
    coreTotal: 2,
    turboBoost: false,
};
const ryzen1 = {
    brand: "AMD",
    baseModel: "ryzen-3",
    modelName: "r-5570x",
    clockSpeed: 6,
    coreTotal: 8,
};
const ryzen3 = {
    brand: "AMD",
    baseModel: "ryzen-3",
    modelName: "r-5570x",
    clockSpeed: 6,
    coreTotal: 8,
    precisionBoost: true,
};
createIntel(corei5);
createAMD(ryzen1);
createAMD(ryzen3);
