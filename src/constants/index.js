const navLinks = [
    {
        id: "cocktails",
        title: "Cocktails",
    },
    {
        id: "about",
        title: "About Us",
    },
    {
        id: "art",
        title: "The Art",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const winesList = [
    {
        name: "Tussock Jumper Moscato",
        country: "ES",
        detail: "Sweet",
        price: "1400 МКД",
    },
    {
        name: "Lazar Temjanika",
        country: "MK",
        detail: "Dry",
        price: "1500 МКД",
    },
    {
        name: "Sensuale Moscato",
        country: "IT",
        detail: "Fruity",
        price: "1500 МКД",
    },
    {
        name: "Kartal Vranec Barrique",
        country: "MK",
        detail: "Dry",
        price: "1700 МКД",
    },
];

const cocktailList = [
    {
        name: "Amaretto Sour",
        detail: "Amaretto, lemon juice, simple syrup.",
        price: "280 МКД",
    },
    {
        name: "Negroni",
        detail: "Gin, Vermouth Rosso, and Campari",
        price: "280 МКД",
    },
    {
        name: "Paloma",
        detail: "tequila, lime juice, and grapefruit soda.",
        price: "300 МКД",
    },
    {
        name: "Espresso Martini",
        detail: "Espresso, Vodka, coffee liqueur, simple syrup",
        price: "300 МКД",
    },
];

const featureLists = [
    "Poured to perfection",
    "Crafted from the vine",
    "Rich aromas, bold flavors",
    "Elegance in every glass"
];

const goodLists = [
    "Savor the subtle notes",
    "Uncork pure indulgence",
    "From vineyard to table",
    "Timeless taste, redefined"
];

const openingHours = [
    { day: "Mon-Sat", time: "8:00am – 12am" },
    { day: "Sun", time: "9:00am – 12am" },
];

const socials = [
    {
        name: "Instagram",
        icon: "/images/insta.png",
        url: "https://www.instagram.com/oeno_wine_bar/",
    },
    {
        name: "Facebook",
        icon: "/images/fb.png",
        url: "https://www.facebook.com/people/Oeno-Wine-Bar-Deli/100063455534104/#",
    },
];

const sliderLists = [
    {
        id: 1,
        name: "Sensuale Moscato",
        image: "/images/sensuale.png",
        title: "Balanced, Fresh, Full",
        description:
            "Sweet, full-bodied, and harmonious, with a light effervescence that complements its intense fruit flavors",
    },
    {
        id: 2,
        name: "Lazar Temjanika",
        image: "/images/lazar.png",
        title: "A Fruity Classic That Never Fails",
        description:
            "Fruity driven, Medium-high acidity and medium body",
    },
    {
        id: 3,
        name: "T.J Moscato",
        image: "/images/moscato.png",
        title: "Bright, Sweet, Pearly",
        description:
            "pronounced fruit and floral reminiscent of mandarin peel. Sweet lusciousness and refreshing airy bubbles.",
    },
    {
        id: 4,
        name: "Sun Goddess Pino Grigio",
        image: "/images/sung.png",
        title: "Full-bodied, Rich, Pleasantly Sweet",
        description:
            "Intense and complex bouquet, featuring hints of peach, melon, and blackberries",
    },
];

export {
    navLinks,
    winesList,
    cocktailList,
    featureLists,
    goodLists,
    openingHours,
    socials,
    sliderLists,
};