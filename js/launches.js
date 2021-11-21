const url = "https://api.spacexdata.com/v4/launches";
const subpageContainer = document.querySelector(".subpages-container");
const oldLaunchesContainer = document.querySelector(".old-launches-container");

const createData = async () => {
    try {
        const data = await fetch(url);
        const result = await data.json();
        console.log(result);
        for (let i = result.length - 1; i >= 0; i--) {
            let today = Date.parse(Date());
            let launchTime = Date.parse(result[i].date_local);
            if (launchTime > today) {
                console.log(result[i].details);
                subpageContainer.innerHTML +=
                    `<div class="subpage launch">
                <h1>${result[i].name}</h1>
                <h3>Flight no.: ${result[i].flight_number}</h3>
                <h5>Date: ${result[i].date_local}</h5>
                `;
            } else {
                oldLaunchesContainer.innerHTML +=
                    `<div class="subpage launch">
                <h1>${result[i].name}</h1>
                <h3>Flight no.: ${result[i].flight_number}</h3>
                <h5>Date: ${result[i].date_local}</h5>
                <p>${result[i].details}</p>
                </div>
                `;
            }
        }
    } catch (error) {
        console.log(error);
    }
}

createData();