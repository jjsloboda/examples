

class Song {
  constructor(name, filename) {
    this.name = name;
    this.filename = filename;
    this.audio = new Audio(filename);
  }

  play() {
    this.audio.play();
  }

  pause() {
    this.audio.pause();
  }

  stop() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }
}

class Jukebox {
  constructor(songlist) {
    this.songlist = songlist;
    this.currentSong = 0;
  }

  play() {
    this.songlist[this.currentSong].play();
  }

  pause() {
    this.songlist[this.currentSong].pause();
  }

  stop() {
    this.songlist[this.currentSong].stop();
  }

  load(name, filename) {
    let new_song = new Song(name, filename);
    if (new_song.audio.error === null) {
      this.songlist.push(new_song);
    }
  }

  nextTrack() {
    if (this.currentSong < this.songlist.length - 1) {
      this.stop();
      this.currentSong++;
      this.play();
    }
  }

  prevTrack() {
    if (this.currentSong > 0) {
      this.stop();
      this.currentSong--;
      this.play();
    }
  }

  playRandomSong() {
    this.stop();
    this.currentSong = Math.floor(Math.random() * this.songlist.length);
    this.play();
  }
}

/*
let jukebox = new Jukebox([
  new Song('Song Name', 'song_filename.wav')
]);
*/
