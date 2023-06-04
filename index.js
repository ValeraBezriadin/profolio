const menuBtn = document.querySelector(".nav__button");
const menuList = document.querySelector(".nav__list");
const menuItem = document.querySelectorAll(".nav__item");
const worksList = document.querySelector(".works__grid");

menuBtn.addEventListener("click", () => {
  menuList.classList.toggle("nav__active");
  menuBtn.classList.toggle("nav__button-active");
});

menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    menuList.classList.remove("nav__active");
    menuBtn.classList.remove("nav__button-active");
  });
});

const menuData = [
  {
    id: 1,
    name: "Про мене",
    slug: "#about",
  },
  {
    id: 2,
    name: "Навички",
    slug: "#skils",
  },
  {
    id: 3,
    name: "Послуги",
    slug: "#service ",
  },
  {
    id: 4,
    name: "Портфоліо",
    slug: "#works ",
  },
  {
    id: 5,
    name: "Відгуки",
    slug: "#statistic ",
  },
  {
    id: 6,
    name: "Контакти",
    slug: "#contacts",
  },
];
const mapMenudata = menuData
  .map(
    (item) => `<li class="nav__item">
<a href="${item.slug} " class="nav__link"> ${item.name}</a>
</li> `
  )
  .join("");
menuList.innerHTML = mapMenudata;
console.log(mapMenudata);

const worksdata = [
  {
    id: 1,
    href: "https://valerabezriadin.github.io/Town/",
    src: "./img/works1.png",
  },
  {
    id: 2,
    href: "https://valerabezriadin.github.io/Neapol/",
    src: "./img/works2.png",
  },
  {
    id: 3,
    href: "https://valerabezriadin.github.io/IFAB/",
    src: "./img/works3.png",
  },
  {
    id: 4,
    href: "#",
    src: "./img/img4.png",
  },
  {
    id: 5,
    href: "#",
    src: "./img/img5.png",
  },
  {
    id: 6,
    href: "#",
    src: "./img/img6.png",
  },
];
const mapworksdata = worksdata
  .map(
    (i) => `<li class="works__item">
<a class="works__link" href="${i.href}" target="_blank">
  <img class="works__image" src="${i.src}" alt="works" />
</a> </li>`
  )
  .join("");
worksList.innerHTML = mapworksdata;

const form = document.querySelector(".contacts__forma");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.elements.name.value;
  const phone = form.elements.phone.value;
  const message = form.elements.message.value;

  const messageMail = `
  Name: ${name}
  Phone: ${phone}
  Message: ${message}
  `;

  const TOKEN = "6154724094:AAGA8VMjamoSrd-FpGab7LM29B831x4r6bY";
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
  const ID = "-1001906257579";

  axios
    .post(URI_API, {
      chat_id: ID,
      parse_mode: "html",
      text: messageMail,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
  window.location.reload();
});
