module.exports = function(props){
  const {eater, foods} = props;
  return `
    <h1>Lunches for ${eater}</h1>

    <ul>
      ${foods.map(lunch => {
        return `
          <li>${lunch.lunch}</li>
        `
      }).join("")}
    </ul>
  `;
}
