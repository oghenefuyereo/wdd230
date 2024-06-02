document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('article');
    const gridButton = document.getElementById('grid');
    const listButton = document.getElementById('list');

    fetch('data/members.json')
        .then(response => response.json())
        .then(data => displayMembers(data))
        .catch(error => console.error('Error fetching member data:', error));

    gridButton.addEventListener('click', () => {
        display.classList.add('grid');
        display.classList.remove('list');
    });

    listButton.addEventListener('click', () => {
        display.classList.add('list');
        display.classList.remove('grid');
    });

    function displayMembers(members) {
        display.innerHTML = '';
        members.forEach(member => {
            const section = document.createElement('section');
            section.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}" />
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                 <a href="${member.website}" target="_blank">${member.website}</a>
            `;
            display.appendChild(section);
        });
    }
});
