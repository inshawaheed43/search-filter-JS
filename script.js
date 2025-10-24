const users = [
  {
    name: "amisha rathore",
    pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
    bio: "silent chaos in a loud world 🌌 | not for everyone",
  },
  {
    name: "kiara mehta",
    pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
    bio: "main character energy ✨ | coffee > everything ☕",
  },
  {
    name: "isha oberoi",
    pic: "https://images.unsplash.com/photo-1611671111698-d43f3861e8ec?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBpbnRlcmVzdCUyMGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    bio: "walking through dreams in doc martens ☁️ | late night thinker",
  },
  {
    name: "haida oklar",
    pic: "https://plus.unsplash.com/premium_photo-1668896122554-2a4456667f65?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    bio: "art and chaos blend beautifully 🎨 | somewhere between dreams and reality",
  },
  {
    name: "Riya sharma",
    pic: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    bio: "sunshine mixed with a little hurricane ☀️🌪️",
  },
  {
    name: "Angelina",
    pic: "https://images.unsplash.com/photo-1726202998229-d64fa4ad224a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBpbnRlcmVzdCUyMGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000",
    bio: "chasing sunsets and good vibes 🌅 | adventure seeker",
  },
  {
    name: "Meera joshi",
    pic: "https://images.unsplash.com/photo-1726202999878-f3831a3c3fe3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBpbnRlcmVzdCUyMGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    bio: "bookworm with a playlist for every mood 📚🎧",
  },
  {
    name: "Visha patel",
    pic: "https://images.unsplash.com/photo-1704980053717-d8b203912e6b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1005",
    bio: "minimalist soul 🌿 | lover of late-night coding and cold coffee 💻☕",
  },
];

// SARE USERS HSOW KRWANA HAI
// FILTER KRNA INPUT PR
// SHOW KRAWNA FILTERED USERS KO

function showUsers(arr) {
  arr.forEach(function (user) {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = user.pic;
    img.classList.add("bg-img");

    const blurredLayer = document.createElement("div");
    blurredLayer.classList.add("blurred-layer");
    blurredLayer.style.backgroundImage = `url(${user.pic})`;

    const content = document.createElement("div");
    content.classList.add("content");

    const heading = document.createElement("h3");
    heading.textContent = user.name;

    const para = document.createElement("p");
    para.textContent = user.bio;
    // JUST THINK IT AS A BOX, EK DIV HAI JIS MEIN HEADING OR PARA APPEND KIA OR PHIR
    // EK DIV CARD KE NAME SE BNA HAI, JISMEIN, CONTENT (HEAD, PARA) OR IMG OR BLUR LAYER LAGE GI, OR PHIR FINALLY US CARD KO WHOLE BODY MEIN APPEND KRNA HAI

    content.appendChild(heading);
    content.appendChild(para);

    card.appendChild(img);
    card.appendChild(blurredLayer);
    card.appendChild(content);

    document.querySelector(".cards").appendChild(card);
  });
}
showUsers(users);

let inp = document.querySelector(".inp");
inp.style.backgroundColor= "#313131ff"

inp.addEventListener("input", function () {
  let searchValue = inp.value.trim().toLowerCase();

  let newUsers = users.filter((user) => {
    return user.name.toLowerCase().startsWith(searchValue);
  });

  let cardContainer = document.querySelector(".cards");
  cardContainer.innerHTML = "";
  if (newUsers.length > 0) {
    showUsers(newUsers);
  } else {
    cardContainer.innerHTML = `<p style="text-align:center; font-weight: 400; color:wheat; font-size:26px;">No user found</p>`;

  }
});