document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded. Fetching members.json...');
    fetch('data/members.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Data fetched successfully:', data);
            const members = data;
            displaySpotlight(members);
        })
        .catch(error => console.error('Error fetching members:', error));
});

function getRandomSpotlightMembers(members, count) {
    const silverGoldMembers = members.filter(member => 
        member.membershipLevel === 'Silver' || member.membershipLevel === 'Gold'
    );
    console.log('Silver and Gold members:', silverGoldMembers);

    const selectedMembers = [];
    while (selectedMembers.length < count && silverGoldMembers.length > 0) {
        const randomIndex = Math.floor(Math.random() * silverGoldMembers.length);
        selectedMembers.push(silverGoldMembers.splice(randomIndex, 1)[0]);
    }
    console.log('Selected spotlight members:', selectedMembers);
    return selectedMembers;
}

function displaySpotlight(members) {
    console.log('Displaying spotlight members...');
    const spotlightContainer = document.getElementById('spotlight-members');
    const spotlightMembers = getRandomSpotlightMembers(members, 3);

    spotlightMembers.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.className = 'spotlight-member';
        memberDiv.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">${member.website}</a>
            <p>${member.additionalInfo}</p>
        `;
        spotlightContainer.appendChild(memberDiv);
    });
    console.log('Spotlight members displayed.');
}
