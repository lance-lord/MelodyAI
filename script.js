// popular songs js section
let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
let pop_song = document.getElementsByClassName("pop_songs")[0];

pop_song_right.addEventListener("click", () => {
  pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener("click", () => {
  pop_song.scrollLeft -= 330;
});
// popular songs js section

let pop_art_left = document.getElementById("pop_art_left");
let pop_art_right = document.getElementById("pop_art_right");
let Artists_bx = document.getElementsByClassName("Artists_bx")[0];

pop_art_right.addEventListener("click", () => {
  Artists_bx.scrollLeft += 330;
});
pop_art_left.addEventListener("click", () => {
  Artists_bx.scrollLeft -= 330;
});

const songs = [
  {
    id: 1,
    songName: `On My Way<br>
      <div class="subtitle">Alan Walker</div>`,
    poster: "Musicplayer/img/1.jpg"
  },
  {
    id: 2,
    songName: `Faded<br>
        <div class="subtitle">Alan Walker</div>`,
    poster: 'Musicplayer/img/2.jpg'
  },
  {
    id: 3,
    songName: `Cartoon<br>
    <div class="subtitle">Mas Y Mas ft.Daniel Levi</div>`,
    poster: 'Musicplayer/img/3.jpg'
  },
  {
    id: 4,
    songName: `Warriko<br>
    <div class="subtitle">Blaura Brehm</div>`,
    poster: 'Musicplayer/img/4.jpg'
  },
  {
    id: 5,
    songName: `Unknown1<br>
    <div class="subtitle">Unknown1</div>`,
    poster: 'Musicplayer/img/5.jpg'
  },
  {
    id: 6,
    songName: `Unknown2<br>
    <div class="subtitle">Unknown2</div>`,
    poster: 'Musicplayer/img/6.jpg'
  },
  {
    id: 7,
    songName: `Unknown3<br>
    <div class="subtitle">Unknown3</div>`,
    poster: 'Musicplayer/img/7.jpg'
  },
  {
    id: 8,
    songName: `Unknown4<br>
    <div class="subtitle">Unknown4</div>`,
    poster: 'Musicplayer/img/8.jpg'
  },
  {
    id: 9,
    songName: `Unknown5<br>
    <div class="subtitle">Unknown5</div>`,
    poster: 'Musicplayer/img/9.jpg'
  },
  {
    id: 10,
    songName: `Unknown6<br>
    <div class="subtitle">Unknown6</div>`,
    poster: 'Musicplayer/img/10.jpg'
  },
  {
    id: 11,
    songName: `Unknown7<br>
    <div class="subtitle">Unknown7</div>`,
    poster: 'Musicplayer/img/11.jpg'
  },
  {
    id: 12,
    songName: `Unknown8<br>
    <div class="subtitle">Unknown8</div>`,
    poster: 'Musicplayer/img/12.jpg'
  },
  {
    id: 13,
    songName: `Unknown9<br>
    <div class="subtitle">Unknown9</div>`,
    poster: 'Musicplayer/img/13.jpg'
  },
  {
    id: 14,
    songName: `Unknown10<br>
    <div class="subtitle">Unknown10</div>`,
    poster: 'Musicplayer/img/14.jpg'
  },
  {
    id: 15,
    songName: `Unknown11<br>
    <div class="subtitle">Unknown11</div>`,
    poster: 'Musicplayer/img/15.jpg'
  },
  {
    id: 16,
    songName: `Unknown12<br>
    <div class="subtitle">Unknown12</div>`,
    poster: 'Musicplayer/img/16.jpg'
  },
  {
    id: 17,
    songName: `Unknown10<br>
    <div class="subtitle">Unknown10</div>`,
    poster: 'Musicplayer/img/17.jpg'
  },
  {
    id: 18,
    songName: `Unknown10<br>
    <div class="subtitle">Unknown10</div>`,
    poster: 'Musicplayer/img/18.jpg'
  },
  {
    id: 19,
    songName: `Unknown10<br>
    <div class="subtitle">Unknown10</div>`,
    poster: 'Musicplayer/img/19.jpg'
  },
  {
    id: 20,
    songName: `Unknown10<br>
    <div class="subtitle">Unknown10</div>`,
    poster: 'Musicplayer/img/20.jpg'
  },
]

// search data start
let search_results = document.getElementsByClassName('search_results')[0];

songs.forEach(Element => {
  const {id,songName,poster} = Element;
  let card = document.createElement('a');
  card.classList.add('card');
  card.href= "#"+id
  card.innerHTML = `<img src="${poster}" alt="">
              <div class="content">
                ${songName}
              </div>`;
  search_results.appendChild(card);
}); 
let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup', () => {
  let input_value = input.value.toUpperCase();
  let items = search_results.getElementsByTagName('a');
  for(let i=0;i<items.length;i++){
    let as = items[i].getElementsByClassName('content')[0];
    let text = as.textContent || as.innerHTML;
    if(text.toUpperCase().indexOf(input_value) > -1){
      items[i].style.display = 'flex';
    } else {
      items[i].style.display = 'none';
    }
  }
});
// search data end

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
  e.getElementsByTagName('img')[0].src = songs[i].poster;
  e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});


const music = new Audio('Musicplayer/audio/1.mp3');
// music player js section
let player = document.getElementById('play');
let wave = document.getElementById('wave');
play.addEventListener('click', () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    wave.classList.add('active1');
    player.classList.add('bi-pause-fill');
    player.classList.remove('bi-play-fill');
  } else {
    music.pause();
    player.classList.remove('bi-pause-fill');
    player.classList.add('bi-play-fill');
    wave.classList.remove('active1');
  }
});
let songItem = document.getElementsByClassName('songItem');
let playlistPlay = document.getElementsByClassName('playlistPlay');

const makeAllBackground = () => {
  Array.from(songItem).forEach((e) => {
    e.style.background = 'rgb(105, 105, 105, .0)';
  });
};
const makeAllPlays = () => {
  Array.from(playlistPlay).forEach((e) => {
    e.classList.remove('bi-pause-circle-fill');
    e.classList.add('bi-play-circle-fill');
  });
};

let back = document.getElementById('back');
let next = document.getElementById('next');
let repeat = document.getElementById('repeat');
let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', () => {
  let a = shuffle.innerHTML;

  switch (a) {
    case 'next':
      shuffle.classList.remove('bi-repeat');
      shuffle.classList.remove('bi-shuffle');
      shuffle.classList.add('bi-repeat-1');
      shuffle.innerHTML = 'repeat';
      break;
    case 'repeat':
      shuffle.classList.remove('bi-repeat');
      shuffle.classList.add('bi-shuffle');
      shuffle.classList.remove('bi-repeat-1');
      shuffle.innerHTML = 'random';
      break;
    case 'random':
      shuffle.classList.add('bi-repeat');
      shuffle.classList.remove('bi-shuffle');
      shuffle.classList.remove('bi-repeat-1');
      shuffle.innerHTML = 'next';
      break;
  }
});

let index = 0;
let poster_player = document.getElementById('poster_player');
Array.from(document.getElementsByClassName('playlistPlay')).forEach((e) => {
  e.addEventListener('click', (el) => {
    let index = el.target.id;
    // console.log(abc)
    music.src = `Musicplayer/audio/${index}.mp3`;
    poster_player.src = `Musicplayer/img/${index}.jpg`;
    music.play();
    player.classList.add('bi-pause-fill');
    player.classList.remove('bi-play-fill');
    let songTitles = songs.filter((el) => {
      return el.id == index;
    });
    songTitles.forEach((els) => {
      let { songName } = els;
      title.innerHTML = songName;
    });
    makeAllBackground();
    Array.from(songItem)[index - 1].style.background = 'rgb(105, 105, 105, .1)';
    makeAllPlays();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');
    wave.classList.add('active1');
    // console.log(index);
    back.addEventListener('click', () => {
      index -= 1;
      if (index < 1) {
        index = Array.from(songItem).length;
      }
      music.src = `Musicplayer/audio/${index}.mp3`;
      poster_player.src = `Musicplayer/img/${index}.jpg`;
      music.play();
      player.classList.add('bi-pause-fill');
      player.classList.remove('bi-play-fill');
      let songTitles = songs.filter((el) => {
        return el.id == index;
      });
      songTitles.forEach((els) => {
        let { songName } = els;
        title.innerHTML = songName;
      });
      makeAllBackground();
      Array.from(songItem)[index - 1].style.background = 'rgb(105, 105, 105, .1)';
      makeAllPlays();
      el.target.classList.add('bi-pause-circle-fill');
      el.target.classList.remove('bi-play-circle-fill');
      wave.classList.add('active1');
    });
    next.addEventListener('click', () => {
      index++;
      if (index > Array.from(songItem).length) {
        index = 1;
      }
      music.src = `Musicplayer/audio/${index}.mp3`;
      poster_player.src = `Musicplayer/img/${index}.jpg`;
      music.play();
      player.classList.add('bi-pause-fill');
      player.classList.remove('bi-play-fill');
      let songTitles = songs.filter((el) => {
        return el.id == index;
      });
      songTitles.forEach((els) => {
        let { songName } = els;
        title.innerHTML = songName;
      });
      makeAllBackground();
      Array.from(songItem)[index - 1].style.background = 'rgb(105, 105, 105, .1)';
      makeAllPlays();
      el.target.classList.add('bi-pause-circle-fill');
      el.target.classList.remove('bi-play-circle-fill');
      wave.classList.add('active1');
    });
    const repeat_music = () => {
      index;
      music.src = `Musicplayer/audio/${index}.mp3`;
      poster_player.src = `Musicplayer/img/${index}.jpg`;
      music.play();
      player.classList.add('bi-pause-fill');
      player.classList.remove('bi-play-fill');
      let songTitles = songs.filter((el) => {
        return el.id == index;
      });
      songTitles.forEach((els) => {
        let { songName } = els;
        title.innerHTML = songName;
      });
      makeAllBackground();
      Array.from(songItem)[index - 1].style.background = 'rgb(105, 105, 105, .1)';
      makeAllPlays();
      el.target.classList.add('bi-pause-circle-fill');
      el.target.classList.remove('bi-play-circle-fill');
      wave.classList.add('active1');
    };
    const next_music = () => {
      index++;
      if (index > Array.from(songItem).length) {
        index = 1;
      }
      music.src = `Musicplayer/audio/${index}.mp3`;
      poster_player.src = `Musicplayer/img/${index}.jpg`;
      music.play();
      player.classList.add('bi-pause-fill');
      player.classList.remove('bi-play-fill');
      let songTitles = songs.filter((el) => {
        return el.id == index;
      });
      songTitles.forEach((els) => {
        let { songName } = els;
        title.innerHTML = songName;
      });
      makeAllBackground();
      Array.from(songItem)[index - 1].style.background = 'rgb(105, 105, 105, .1)';
      makeAllPlays();
      el.target.classList.add('bi-pause-circle-fill');
      el.target.classList.remove('bi-play-circle-fill');
      wave.classList.add('active1');
    };
    const random_music = () => {
      if (index == songs.length) {
        index = 1;
      } else {
        index = Math.floor((Math.random() * songs.length) + 1);
      };
      music.src = `Musicplayer/audio/${index}.mp3`;
      poster_player.src = `Musicplayer/img/${index}.jpg`;
      music.play();
      player.classList.add('bi-pause-fill');
      player.classList.remove('bi-play-fill');
      let songTitles = songs.filter((el) => {
        return el.id == index;
      });
      songTitles.forEach((els) => {
        let { songName } = els;
        title.innerHTML = songName;
      });
      makeAllBackground();
      Array.from(songItem)[index - 1].style.background = 'rgb(105, 105, 105, .1)';
      makeAllPlays();
      el.target.classList.add('bi-pause-circle-fill');
      el.target.classList.remove('bi-play-circle-fill');
      wave.classList.add('active1');
    }
    music.addEventListener('ended', () => {
      let b = shuffle.innerHTML;
      switch (b) {
        case 'next':
          next_music();
          break;
        case 'repeat':
          repeat_music();
          break;
        case 'random':
          random_music();
          break;
      };
    });
  });
});

let current_start = document.getElementById('current_start');
let current_end = document.getElementById('current_end');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
  let music_current = music.currentTime;
  let music_duration = music.duration;
  let min1 = Math.floor(music_duration / 60);
  let sec1 = Math.floor(music_duration % 60);
  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }
  current_end.innerText = `${min1}:${sec1}`;

  let min2 = Math.floor(music_current / 60);
  let sec2 = Math.floor(music_current % 60);
  if (sec2 < 10) {
    sec2 = `0${sec2}`;
  }
  current_start.innerText = `${min2}:${sec2}`;

  let progress_bar = parseInt((music_current / music_duration) * 100);
  seek.value = progress_bar;
  let seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;

  seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
  });
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
// bi-volume-up-fill

vol.addEventListener('change', () => {
  if (vol.value == 0) {
    vol_icon.classList.remove('bi-volume-up-fill');
    vol_icon.classList.remove('bi-volume-down-fill');
    vol_icon.classList.add('bi-volume-mute-fill');
  }
  if (vol.value > 0 && vol.value < 50) {
    vol_icon.classList.remove('bi-volume-up-fill');
    vol_icon.classList.remove('bi-volume-mute-fill');
    vol_icon.classList.add('bi-volume-down-fill');
  }
  if (vol.value > 50) {
    vol_icon.classList.remove('bi-volume-mute-fill');
    vol_icon.classList.remove('bi-volume-down-fill');
    vol_icon.classList.add('bi-volume-up-fill');
  }
  let vol_a = vol.value;
  vol_bar.style.width = `${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`;
  music.volume = vol_a / 100;

});















