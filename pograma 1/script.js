window.addEventListener('DOMContentLoaded', () => {
    const select = window.document.getElementById('mainSelect');

    select.addEventListener('change', () => {
        const elementName = `opcoesDisc${select.value}`;
        const displayElement = window.document.getElementById(elementName);
        const displayElementStyle = getComputedStyle(displayElement);

        deletePreviousElements();
    
        if (displayElementStyle.display === 'none') {
            displayElement.style.display = 'block';
        };
    });
});

function deletePreviousElements() {
    const possibleElements = ['DS', 'ENF', 'ADM', 'RH'];

    for (let i = 0; possibleElements.length >= i; i++) {
        const name = `opcoesDisc${possibleElements[i]}`; 
        const element = window.document.getElementById(name);
        if (element) {
            element.style.display = 'none';
        };
    };
};