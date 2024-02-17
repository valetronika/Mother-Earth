const footer__data = {
    company: [
        "About",
        "Press",
        "Blog",
        "Careers",
        "Security",
        "Driver",
        "Centre",
    ],
    information: [
        "Our Story",
        "Recipes",
        "Nutrition",
        "Resources",
        "Newsletter",
        "Contact",
    ],
    Information: [
        " Customer service",
        "Recommend a restaurant",
        "Signup a restaurant",
        "Jobs",
        "Press",
        "Terms of use",
    ],
};
const inspirations__data = [
    {
        id:1,
        backgound: "/assets/inspirations/backgrounds/grid1.svg",
        title: "A Guide To Rocky Mountain Vacations",

        category: "DESTINATIONS",
        avatar: ['/assets/inspirations/avatars/ava1.svg','/assets/inspirations/avatars/ava2.svg','/assets/inspirations/avatars/ava3.svg',],
        // якщо не false то play або button
        button_type: 'button',
        // тут або ім'я або посилання на картинку
        button: "featured",
    },
    {
        id:2,

        backgound: "../assets/inspirations/backgrounds/grid2.svg",
        title: "Traveling To Barcelona",

        category: "DESTINATIONS",
        avatar: ['/assets/inspirations/avatars/ava4.svg','/assets/inspirations/avatars/ava5.svg',],
        // якщо не false то play або button
        button_type: 'play',
        // тут або ім'я або посилання на картинку
        button: "/assets/inspirations/play.svg",
    },
    {
        id:3,

        backgound: "../assets/inspirations/backgrounds/grid3.svg",
        title: "Party Jokes Startling But Unnecessary",
        category: "DESTINATIONS",
        avatar: ['/assets/inspirations/avatars/ava6.svg','/assets/inspirations/avatars/ava7.svg'],
        // якщо не false то play або button
        button_type: false,
        // тут або ім'я або посилання на картинку
        button: "",
    },
    {
        id:4,

        backgound: "../assets/inspirations/backgrounds/grid4.svg",
        title: "Maui By Air The Best Way Around The Island",
        category: false,
        avatar: ['/assets/inspirations/avatars/ava8.svg','/assets/inspirations/avatars/ava9.svg'],
        // якщо не false то play або button
        button_type: false,
        // тут або ім'я або посилання на картинку
        button: "",
    },
    {
        id:5,

        backgound: "../assets/inspirations/backgrounds/grid5.svg",
        title: "Andre Gide Man cannot discover new oceans unless he has the courage to lose sight of the shore.",
        category: "Andre Gide",
        avatar: ['/assets/inspirations/avatars/ava10.svg','/assets/inspirations/avatars/ava11.svg'],
        // якщо не false то play або button
        button_type: false,
        // тут або ім'я або посилання на картинку
        button: "",
    },
    {
        id:6,

        backgound: "../assets/inspirations/backgrounds/grid6.svg",
        title: "Traveling To Barcelona",
        category: "DESTINATIONS",
        avatar: ['/assets/inspirations/avatars/ava12.svg','/assets/inspirations/avatars/ava13.svg'],
        // якщо не false то play або button
        button_type: 'play',
        // тут або ім'я або посилання на картинку
        button: "/assets/inspirations/play.svg",
    },
    {
        id:7,

        backgound: "../assets/inspirations/backgrounds/grid7.svg",
        title: "A Guide To Rocky Mountain Vacations",
        category: false,
        avatar: ['/Mother-Earth/assets/inspirations/avatars/ava14.svg','/Mother-Earth/assets/inspirations/avatars/ava15.svg','/Mother-Earth/assets/inspirations/avatars/ava16.svg',],
        // якщо не false то play або button
        button_type: false,
        // тут або ім'я або посилання на картинку
        button: "",
    },
];

// =========HEADER========

const header__nav = document.querySelector(".header__nav");

const header__burger = document.querySelector(".header__burger");

const burger_toggle = () =>{
    header__nav.classList.toggle("header__nav_active");
    header__nav.classList.toggle("header__nav_inactive");
    header__burger.classList.toggle("header__burger_active");
    header__burger.classList.toggle("header__burger_inactive");
}

header__burger.addEventListener("click",burger_toggle);


//- =========navigation  ========


const navigation = document.querySelectorAll("li");
console.log(navigation);

navigation.forEach((el) =>{
    el.addEventListener("click",scrollToSection);
})

function scrollToSection(e){
    e.preventDefault();
    const sectionId = this.dataset.section;
    const section = document.querySelector(`#${sectionId}`);
    section.scrollIntoView({behavior: "smooth"});

    header__nav.classList.toggle("header__nav_active");
    header__nav.classList.toggle("header__nav_inactive");
    header__burger.classList.toggle("header__burger_active");
    header__burger.classList.toggle("header__burger_inactive");

}

// =========INSPIRATIONS========
const inspirations__grid = document.querySelector(".inspirations__grid");

inspirations__data.forEach((el,index) =>{
    const inspirations_grid_element = document.createElement("div");
    inspirations_grid_element.classList.add(`inspirations__grid${index+1}`);
    // inspirations_grid_element.style.backgroundImage = `url(${el.backgound})`;
    
    const inspirations_grid_title = document.createElement("h2");
    inspirations_grid_title.textContent = el.title;

    const inspirations_grid_category = document.createElement('h5');
    if(el.category ){

        inspirations_grid_category.textContent =  el.category ;
    }

    if(el.button_type=== 'play' ){
        const inspirations_btn = document.createElement('div');
        inspirations_btn.classList.add('button__play');
        inspirations_btn.classList.add('btn_animation');

        const inspirations_play = document.createElement('img');
        inspirations_play.src = el.button;
        inspirations_play.alt = 'button play';

        inspirations_btn.append(inspirations_play);
        inspirations_grid_element.append(inspirations_btn);
    } else if(el.button_type=== 'button'){
        const inspirations_btn = document.createElement('button');

        inspirations_btn.textContent = el.button;
        inspirations_btn.classList.add('button__mini');
        inspirations_btn.classList.add('btn_animation');

        inspirations_grid_element.append(inspirations_btn);

    }
    const inspirations_grid_avatars = document.createElement("div");
    const avatar_box = document.createElement("div")
    avatar_box.classList.add("insp_container")

    el.avatar.forEach((el,index) =>{
        const avatar_img = document.createElement("img");
        avatar_img.src= el;
        avatar_img.alt = 'avatar';
        avatar_img.classList.add('insp_img', `insp_img${index}`);

        avatar_box.append(avatar_img);
        inspirations_grid_avatars.append(avatar_box);
    })

    inspirations_grid_element.append( inspirations_grid_category,inspirations_grid_title, inspirations_grid_avatars)
    inspirations__grid.append(inspirations_grid_element)
})




// =========FOOTER==============
const footer__company = document.querySelector(".footer__company");
const footer__information1 = document.querySelector(".footer__information1");
const footer__information2 = document.querySelector(".footer__information2");


footer__data.company.forEach((element) => {
    const paragrph = document.createElement("p");
    paragrph.textContent = element;

    footer__company.appendChild(paragrph);
});
footer__data.information.forEach((el) => {
    const paragrph = document.createElement("p");
    paragrph.textContent = el;
    footer__information1.append(paragrph);
});

footer__data.Information.forEach((el) => {
    const paragrph = document.createElement("p");
    paragrph.textContent = el;
    footer__information2.append(paragrph);
});

//---------- general ----------//

const btn_animation = document.querySelectorAll(".btn_animation");


const scale_animation = (element,e)=>{


    element.classList.add("animation__click");
    console.log('animation__click added');
    setTimeout(()=>{
    element.classList.remove("animation__click");
    console.log('animation__click removed');

    },100)
};

btn_animation.forEach((element)=>{
    element.onclick =()=> scale_animation(element);
});