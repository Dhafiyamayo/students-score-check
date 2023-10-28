//untuk meng-convert nilai siswa menjadi Grade/huruf
function nilaiToHuruf(nilai) {
    if (nilai >= 85 && nilai <= 100) {
        return "A";
    } else if (nilai >= 75 && nilai <= 84) {
        return "B";
    } else if (nilai >= 60 && nilai <= 74) {
        return "C";
    } else {
        return "D";
    }
  }
  
  //untuk mengecek apakah nilai siswa tersebut bil.Ganjil atau Genap
  function isGenap(nilai) {
    return nilai % 2 === 0;
  }
  
  //Nilai Siswa = 70
  let nilai = 70;
  console.log("Nilai angka: " + nilai);
  
  const nilaiHuruf = nilaiToHuruf(nilai);
  console.log("Nilai huruf: " + nilaiHuruf);
  
  const bilangan = isGenap(nilai) ? "Genap" : "Ganjil";
  console.log("Bilangan " + bilangan);
  