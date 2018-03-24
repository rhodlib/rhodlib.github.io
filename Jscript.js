(() => {
    const imgAndLinks = [{
        name: "facebook",
        img: "facebook.svg",
        url: "https://www.facebook.com/rhodlib"
    }, {
        name: "gmail",
        img: "gmail.svg",
        url: "mailto:rhodlib@gmail.com"
    }, {
        name: "instagram",
        img: "instagram.svg",
        url: "https://www.instagram.com/rhodlib_/"
    }, {
        name: "twitter",
        img: "twitter.svg",
        url: "https://twitter.com/rhodlib"
    }, {
        name: "steam",
        img: "steam.svg",
        url: "http://steamcommunity.com/id/rhodlib/"
    }, {
        name: "telegram",
        img: "telegram.svg",
        url: "https://t.me/rhodlib"
    }, {
        name: "twitch",
        img: "twitch.svg",
        url: "https://www.twitch.tv/rhodlib"
    }, {
        name: "stackoverflow",
        img: "stackoverflow.svg",
        url: "https://stackoverflow.com/users/9347753/rodo-talibs"
    },
    ];

    imgAndLinks.sort((a, b) => a.name > b.name);
    const half = Math.floor(imgAndLinks.length / 2);
    const headerLinks = imgAndLinks.slice(0, half);
    const footerLinks = imgAndLinks.slice(half);

    const header = document.createElement("header");
    const main = document.createElement("main");
    const footer = document.createElement("footer");

    const appendChildren = (children, parent) =>
        children.forEach(child => {
            const a = document.createElement("a");
            const img = document.createElement("img");

            a.setAttribute("href", child.url);
            a.setAttribute("title", child.name);
            img.setAttribute("src", "./icons/" + child.img);
            img.setAttribute("alt", child.name);
            a.appendChild(img);
            parent.appendChild(a);
        });

    appendChildren(headerLinks, header);
    appendChildren(footerLinks, footer);

    const logo = document.createElement("img");
    logo.setAttribute("src", "./icons/rhodlib.png");
    main.appendChild(logo);

    document.body.appendChild(header);
    document.body.appendChild(main);
    document.body.appendChild(footer);
})();   
