module.exports = function(props){
    return `
    <li>
  		<p><span class="label">ID:</span> ${props.id}</p>
        <p><span class="label">Quote:</span> ${props.quote}</p>
        <p><span class="label">Author:</span> ${props.author}</p>

        <button data-id="${props.id}" class="delquote">Delete</button>

        <a href="/${props.id}">Update this quote</a>
    </li>
    `
}