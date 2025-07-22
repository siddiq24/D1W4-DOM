const profile = {
    nama: "John Doe",
    umur: 30,
    profesi: "Web Developer",
    hobi: ["Reading", "Hiking", "Photography"]
};

// A. bikin elemen div dengan class name profile-card
const profileCard = document.createElement("div");
profileCard.className = "profile-card";

// B. bikin elemen h2 berisi nama profil
const namenye = document.createElement("h2");
namenye.textContent = profile.nama;


// C. bikin elemen p berisi umur dan profile
const umurProfesi = document.createElement("p");
umurProfesi.textContent = `Umur: ${profile.umur}, Profesi: ${profile.profesi}`;


// D. buat hobi menggunakan un-Ordered List
const hobbyList = document.createElement("ul");
profile.hobi.forEach(hobi => {
    const li = document.createElement("li");
    li.textContent = hobi;
    hobbyList.appendChild(li);
});

// E. masukin semua elemen ke div profile-card
profileCard.appendChild(namenye);
profileCard.appendChild(umurProfesi);
profileCard.appendChild(hobbyList);

// F. masukkan elemen div ke body
document.querySelector("body").appendChild(profileCard);