module.exports = function(props){
  const { flavors} = props;
  return `
  <ul>
    ${ flavors.map(flavor => {
      return `
      <li>
          <a href="/icecream/${flavor.name}">${flavor.name}</a>
      </li>
      `;
    }).join("")}
  </ul>
  `
}