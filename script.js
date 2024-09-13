const url = 'https://jsonplaceholder.typicode.com/posts';
const getPosts = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const postsContainer = document.getElementById('post-data');
    const listItems = data.map(post =>
      `<li><strong>${post.title}</strong><p>${post.body}</p></li>`
    ).join('');
    postsContainer.innerHTML = `<ul>${listItems}</ul>`
  } catch (error) {
    console.error("Error", error);
  }
}