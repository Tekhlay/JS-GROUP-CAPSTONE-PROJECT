// function to post new comment
const addnewComent = async (id, name, msg) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/VvaW44DsT8GFdgGH7v4y/comments';
  const request = new Request(url);
  await fetch(request, {
    method: 'POST',
    body: JSON.stringify({ item_id: id, username: name, comment: msg }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  // eslint-disable-next-line no-use-before-define
  const arr = await getComments(id);
  const dataCard = document.querySelector('.comment-card');
  // eslint-disable-next-line no-use-before-define
  displayComents(arr, dataCard);
};
const newComment = (id, name, msg) => {
  if (name.value !== '' && msg.value !== '') {
    addnewComent(id, name.value, msg.value);
    name.value = '';
    msg.value = '';
  }
};

const CommentForm = (newcommetId, node) => {
  const commentTitle = document.createElement('div');
  commentTitle.classList.add('form-container');
  commentTitle.innerHTML = '<h4> Add a Comment </h4>';
  const form = document.createElement('form');
  form.classList.add('form-content');
  form.innerHTML = `<input type="text" class="username" placeholder="Your name" required >
    <textarea class="msg" name="msg" id="" cols="30" rows="6" placeholder="Your insights" required ></textarea>
    <button class="btncomment" type="button">Comment</button>`;
  const btncomment = form.querySelector('.btncomment');
  const username = form.querySelector('.username');
  const msg = form.querySelector('.msg');
  btncomment.addEventListener('click', (e) => {
    e.preventDefault();
    newComment(newcommetId, username, msg);
  });
  commentTitle.appendChild(form);
  node.appendChild(commentTitle);
};

// counter for number of comments for a single item
const communtCounter = (comment) => {
  let counter = comment.length;
  if (comment.error) {
    counter = 0;
  }
  return counter;
};

// function to Display comments given for a single item
const displayComents = (data, node) => {
  node.innerHTML = '';
  const head = document.createElement('h4');
  head.innerHTML = `Comments (${communtCounter(data)})`;
  node.appendChild(head);
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

// address for comments API
const link = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/VvaW44DsT8GFdgGH7v4y/comments?item_id=';

// get number of comments from the given API
const getComments = async (id) => {
  const request = new Request(link + id);
  const response = await fetch(request);
  const comment = await response.json();
  return comment;
  // console.log(comment);
};
module.exports = {
  communtCounter, CommentForm, displayComents, getComments 
};