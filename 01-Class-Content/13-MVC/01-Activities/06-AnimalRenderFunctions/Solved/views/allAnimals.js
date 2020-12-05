function renderAnimalItem(props){
    const { animalType, pet, fierceness} = props;
    return `
    <li class="${pet ? "pet" : "not-pet"}">
        <h2>${animalType}</h2>
        <p>Pet: ${pet}</p>
        <p>Fierceness: ${fierceness}</p>
    </li>
    `
}

module.exports = function(props){
    const { animals } = props;
    return `
        <!-- 5. Output the animalType string, pet boolean, and fierceness number to the page for all the pets. -->
        <ul>

            ${
                animals.map(animal => renderAnimalItem(animal)).join("")
            }
        </ul>
    `
}