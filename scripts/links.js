const baseURL = "https://oghenefuyereo.github.io/wdd230/";
const linksURL = baseURL + "data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data.weeks);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayLinks(weeks) {
    const linksContainer = document.getElementById('activity-links');
    weeks.forEach(week => {
        const weekHeader = document.createElement('h3');
        weekHeader.textContent = week.week;

        const linksList = document.createElement('ul');
        week.links.forEach(link => {
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = baseURL + link.url;
            anchor.textContent = link.title;
            listItem.appendChild(anchor);
            linksList.appendChild(listItem);
        });

        linksContainer.appendChild(weekHeader);
        linksContainer.appendChild(linksList);
    });
}

document.addEventListener('DOMContentLoaded', getLinks);
