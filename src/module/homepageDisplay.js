
const likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YIEriIMYnNi1oBUgubDR/likes/';
const getLikes = async () => {
  const resolve = await fetch(likesUrl);
  const data = await resolve.json();
  return data;
};

const postLikes = async (likesUrl, id) => {
  const response = await fetch(likesUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  const data = await response.json();
  return data;
};

const addLike = async (e) => {
  const liked = e.target;
  const id = liked.dataset;

  const likesP = liked.nextElementSibling;
  if (liked) {
    postLikes(likesUrl, id);
    let likesArr = await getLikes();
    likesArr = likesArr.filter((item) => item.item_id === id);
    console.log(item);
  }
};

const itemsCounter = ((arr) => arr.length);

export {addLike, itemsCounter};