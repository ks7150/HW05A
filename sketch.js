let data;

let DEWPMin;
let DEWPMax;
let TEMPMin;
let TEMPMax;

function preload() {
  data = loadTable("https://dm-gy-6063-2023f-d.github.io/assets/homework/05/Beijing-PM2.5/Beijing-PM2.5.csv", "csv", "header");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < data.getRowCount(); i++) {
    let TEMP = data.getNum(i, "TEMP");
    let DEWP = data.getNum(i, "DEWP");

    DEWPMin = min(DEWPMin, DEWP);
    DEWPMax = max(DEWPMax, DEWP);
    TEMPMin = min(TEMPMin, TEMP);
    TEMPMax = max(TEMPMax, TEMP);
  }
}

function draw() {
  background(0);
  noFill();
  stroke(100, 200, 200);
  for (let i = 0; i < data.getRowCount(); i++) {
    let TEMP = data.get(i, "TEMP");
    let DEWP = data.get(i, "DEWP");

    let t = map(TEMP, TEMPMin, TEMPMax, 0, 1000);
    let d = map(DEWP, DEWPMin, DEWPMax, 0, 1000);
    rect(10, 10 , t, d)

  }
  noLoop();
}
