
function refreshSongList(jb) {
  let elListo = document.getElementById('song_list');

  // clear the current list of songs
  while (elListo.firstChild) {
    elListo.removeChild(elListo.firstChild);
  }

  // adds all the songs that are in the Jukebox (which is the jb parameter)
  for (let i=0; i<jb.songlist.length; i++) {
    let listItem = document.createElement("LI");
    let text = document.createTextNode(jb.songlist[i].name);
    listItem.appendChild(text);
    elListo.appendChild(listItem);
  }
}

// Takes a jukebox as a parameter, and adds a song using the "song_name" and "song_filename" text fields.
function addSong(jb) {
  let elNameo = document.getElementById('song_name');
  let elFilenameo = document.getElementById('song_filename');
  jb.load(elNameo.value, elFilenameo.value);
  refreshSongList(jb);
}
