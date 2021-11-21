const url = "https://api.spacexdata.com/v4/launches";
const subpageContainer = document.querySelector(".subpages-container");

const createData = async () => {
    try {
        const data = await fetch(url);
        const result = await data.json();
        console.log(result);
        for (let i = result.length - 1; i >= 0; i--) {
            console.log(result[i].name);
            subpageContainer.innerHTML +=
                `<div class="subpage">
                <h1>${result[i].name}</h1>
                <h3>Flight number: ${result[i].flight_number}</h3>
                <h5>${result[i].date_local}</h5>
                <div class="buttonContainer"><button class="more" data-product=${result[i].details}>Details</button></div>
                </div>
                `;
        }
    } catch (error) {
        console.log(error);
    }
}

createData();