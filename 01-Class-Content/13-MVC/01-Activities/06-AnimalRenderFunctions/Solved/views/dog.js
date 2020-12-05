module.exports = function(props){
    const {animalType, pet:isPet, fierceness} = props;
    return `
    <!-- 4. Output the animalType string, pet boolean, and fierceness number to the page -->
    <h1>${animalType}</h1>
    <p>This animal ${
        isPet ? "is a pet"
              : "is not a pet"
    }</p>
    <p>This animal is ${
        fierceness > 7 ? "quite fierce"
                       : "manageable"
    }!</p>
    `
}

