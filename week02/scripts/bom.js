document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector('#favchap');
    const button = document.querySelector('#addButton');
    const list = document.querySelector('#list');

    button.addEventListener('click', function () {
        if (input.value !== '') {
            const li = document.createElement('li');
            const deleteButton = document.createElement('button');
            li.textContent = input.value;
            deleteButton.textContent = '❌';
            li.appendChild(deleteButton);
            list.appendChild(li);

            deleteButton.addEventListener('click', function () {
                list.removeChild(li);
                input.focus();
            });

            input.value = '';
            input.focus();
        } else {
            alert('Please enter a value.');
            input.focus();
        }
    });

    input.focus();
});
