// function biasa
function tambah(a, b) {
  return a + b;
}

// arrow function
const tambahArrow= (a, b) => a + b;

// default parameter
const sapa = (nama = "Teman") => "Halo, " + nama;
console.log(sapa());        // Halo, Teman
console.log(sapa("fikri"));  // Halo, fikri