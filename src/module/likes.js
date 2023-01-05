const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/VvaW44DsT8GFdgGH7v4y/likes';
// add new likes
const addLikes = async (id) => {
  const request = new Request(url);
  const response = await fetch(request, {
    method: 'POST',
    body: JSON.stringify({ item_id: `${id}` }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};

// get number of likes
const getLikes = async () => {
  const request = new Request(url);
  const response = await fetch(request);
  const like = await response.json();
  return like;
};
module.exports = { addLikes, getLikes };
