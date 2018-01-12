function fetchAlbums() {
  fetch("https://rallycoding.herokuapp.com/api/music_albums") //first promise
    .then(res => res.json) //second promise
    .then(json => console.log(json));
}

// async equivalent:
// add an await infront of each promise
//add async infront of the function

async function fetchAlbums() {
  const res = await fetch("https://rallycoding.herokuapp.com/api/music_albums");
  const json = await res.json;
  console.log(json);
}

fetchAlbums();
