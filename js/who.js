const url = "http://api.open-notify.org/astros.json";
const subpageContainer = document.querySelector(".subpages-container");

const createData = async () => {
    try {
        const data = await fetch(url);
        const result = await data.json();
        for (let i = 1; i < result.people.length; i++) {
            let path = `img/who${i}.png`;
            // result.people.forEach(function (people) {
            subpageContainer.innerHTML +=
                `<div class="subpage">
                <div class="astronaut"><img src="${path}" alt="astronaut"></div>
                <h2>${result.people[i].name}</h2>
                <h4>CRAFT: ${result.people[i].craft}</h4>
                </div>
                `;
        }
    }
    catch (error) {
        console.log(error);
    }
}

createData();