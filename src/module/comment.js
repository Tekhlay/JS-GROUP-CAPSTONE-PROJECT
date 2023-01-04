const displayComents = (data, node) => {
  node.innerHTML = '';
  const commentitem = document.createElement('div');
  commentitem.classList.add('comment-items');
  if (!data.error) {
    data.forEach((element) => {
      const item = document.createElement('p');
      item.innerHTML = `<span>${element.creation_date} ${element.username}: ${element.comment}</span>`;
      commentitem.appendChild(item);
    });
  }
  node.appendChild(commentitem);
};
const link = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/VvaW44DsT8GFdgGH7v4y/comments?item_id=';
const getComments = async (id) => {
  const request = new Request(link + id);
  const response = await fetch(request);
  const comment = await response.json();
  return comment;
  // console.log(comment);
};
module.exports = { displayComents, getComments };