// kita buat sebuah fungsi yang akan memuncukjan modal

const showModal = () => {
  //kita ambil element yang akan di tampilkan ( show )
  let modal = document.querySelector(".modalMenu");

  //kita atur style dari element tersebut
  //jadikan dia terlihat
  modal.style.display = "flex";
};

//kita buat fungsi untuk hide element
const hideModal = () => {
  //kita ambil element yang akan di show
  let modal = document.querySelector(".modalMenu");

  //kita atus Style dari element tersebut
  //jadikan dia tersembunyi
  modal.style.display = "none";
};

const hideaboutAlert = () => {
  //kita ambil element yang akan di show
  let aboutAlert = document.querySelector(".aboutAlert");

  aboutAlert.style.display = "none";
};

//kita akan buat element html
//menggunakan javascript

//tangkap element HtmL
let gallery = document.getElementById("container-gallery");
let img = 13;
//INSERT HTML SYNTAX into gallery

for (let i = 0; i <= 10; i++) {
  gallery.innerHTML += `

<img src = "https://picsum.photos/seed/${img++}/200">
        
`;
}
