// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  const tampilData = [];

  //bacaData file1
  fs.readFile(file1, "utf-8", (err, data) => {
    if (err) {
      return console.log(`error : ${err}`);
    }
    let konten = JSON.parse(data);
    pesan = konten.message;
    tampilData[0] = pesan.split(" ")[1];

    //bacaData file2
    fs.readFile(file2, "utf-8", (err, data) => {
      if (err) {
        return console.log(`error : ${err}`);
      }
      let konten2 = JSON.parse(data);
      pesan2 = konten2[0].message;
      tampilData[1] = pesan2.split(" ")[1];

      //bacaData file3
      fs.readFile(file3, "utf-8", (err, data) => {
        if (err) {
          return console.log(`error : ${err}`);
        }
        let konten3 = JSON.parse(data);
        pesan3 = konten3[0].data.message;
        tampilData[2] = pesan3.split(" ")[1];

        return fnCallback(err, tampilData);
      });
    });
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
