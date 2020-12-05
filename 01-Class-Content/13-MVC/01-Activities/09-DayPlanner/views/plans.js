module.exports = function(props){
  return `
    <h1>Day Planner</h1>

    <ul>
      ${props.plans.map(plan => {
        return `
        <li>
          <p>
            ${plan.id}. ${plan.plan}
            <button data-planid="${plan.id}" class="delplan">Delete Plan!</button>
          </p>
        </li>
        `
      }).join("\n")}
    </ul>

    <h2>Create a Plan</h2>
    <form id="createplan" class="button-size">
      <textarea type="text" name="plan"></textarea>
      <button type="submit">Save Plan!</button>
    </form>

    <h2>Update a Plan</h2>
    <form id="updateplan" class="button-size">
      <select name="id">
        ${props.plans.map(plan => {
          return `
          <option value="${plan.id}">${plan.plan}</option>
          `
        }).join("")}
      </select>
      <textarea type="text" name="plan" placeholder="plan"></textarea>
      <button type="submit">Update Plan!</button>
    </form>

    <script type="text/javascript" src="/js/logic.js"></script>
`
}
