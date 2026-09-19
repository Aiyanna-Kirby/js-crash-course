// DRY - Don't repeat yourself

async function postByUser(userId) {
  const promise = await fetch ('https://jsonplaceholder.typicode.com/posts')

  const result = await promise.json()

  const posts = result.filter(elm => elm.userId === userId)

  console.log(posts)
}

postByUser(4)