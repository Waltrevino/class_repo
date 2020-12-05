module.exports = function(props){
    const { name, price, awesomeness } = props;
    return `
        <a href="/icecreams">Back</a>
        <h1>${name}</h1>
        <p>It costs $${price}</p>
        <p>It's got an awesome rating of ${awesomeness}</p>
        <p>It's got a value of ${awesomeness/price} dollars per awesome point!</p>
    `
}
