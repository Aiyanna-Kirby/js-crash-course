// DRY - Don't repeat yourself

async function firstSixIncomplete(userId) {
  const promise = await fetch("https://jsonplaceholder.typicode.com/todos");

  const result = await promise.json()

  const incompleteTasks = result.filter(elm => !elm.completed).slice(0, 6)

  console.log(incompleteTasks)
}

firstSixIncomplete(false)