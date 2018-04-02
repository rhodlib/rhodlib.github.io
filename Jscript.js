fetch("./links.json")
.then(response => response.json())
.then(imgAndLinks => {
    imgAndLinks.sort((a, b) => a.name > b.name);
    const half = Math.floor(imgAndLinks.length / 2);
    const headerLinks = imgAndLinks.slice(0, half);
    const footerLinks = imgAndLinks.slice(half);

    const header = document.createElement("header");
    const main = document.createElement("main");
    const footer = document.createElement("footer");
    
    const svgns = "http://www.w3.org/2000/svg";
    const xlinkns = "http://www.w3.org/1999/xlink";

    const appendChildren = (children, parent, inverted, delay) =>
        children.forEach((child,index) => {
            const a = document.createElement("a");
            const svg = document.createElementNS(svgns, "svg");
            const use = document.createElementNS(svgns,"use");

            a.setAttribute("href", child.url);
            a.setAttribute("title", child.name);
            a.setAttribute("rel","noopener");
            a.style.fill = child.color ;
            use.setAttributeNS(xlinkns,"href", "./icons/icons.svg#"+ child.svg);
            svg.setAttribute("class", "myIcons");
            svg.setAttribute("viewBox", "0 0 24 24");
            svg.appendChild(use);
            a.appendChild(svg);
            parent.appendChild(a);
            setTimeout(()=>{
                svg.classList.add("animate");
            },delay+(inverted ? children.length - index : index)*300);
        });

    appendChildren(headerLinks, header,false,1000);
    appendChildren(footerLinks, footer, true,1900);

    const svg = document.createElementNS(svgns, "svg");
    const use = document.createElementNS(svgns, "use");
    use.setAttributeNS(xlinkns,"href","./icons/rhodlib.svg#logo")
    svg.setAttribute("class", "myLogo");
    svg.setAttribute("viewBox", "0 0 16 16");
    svg.appendChild(use);
    main.appendChild(svg);
    setTimeout(()=>{
        svg.classList.add("logoAnimate");
    },500);

    document.body.appendChild(header);
    document.body.appendChild(main);
    document.body.appendChild(footer);
}).catch(()=> alert("Error"));
