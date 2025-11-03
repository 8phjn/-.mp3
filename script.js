// Video ID ที่แน่นอนฝัง Embed ได้ 100%
const initialVideos = [
  { id: "3tmd-ClpJxA", title: "Ed Sheeran - Shape of You", channel: "Ed Sheeran" },
  { id: "hT_nvWreIhg", title: "Adele - Hello", channel: "Adele" },
  { id: "fRh_vgS2dFE", title: "Justin Bieber - Sorry", channel: "Justin Bieber" },
  { id: "kJQP7kiw5Fk", title: "Luis Fonsi - Despacito", channel: "Luis Fonsi" }
];

const videoListEl = document.getElementById('videoList');
const videoWrapper = document.getElementById('videoWrapper');
const videoTitle = document.getElementById('videoTitle');

function thumbUrl(id){ return `https://img.youtube.com/vi/${id}/hqdefault.jpg`; }

function renderList(){
  videoListEl.innerHTML = '';
  initialVideos.forEach(v => {
    const li = document.createElement('li');
    li.className = 'video-item';
    li.innerHTML = `
      <div class="thumb"><img src="${thumbUrl(v.id)}" alt=""></div>
      <div class="meta">
        <div class="title">${v.title}</div>
        <div class="channel">${v.channel}</div>
      </div>
    `;
    li.addEventListener('click', () => playVideo(v));
    videoListEl.appendChild(li);
  });
}

function playVideo(v){
  videoTitle.textContent = v.title;
  videoWrapper.innerHTML = `
    <iframe src="https://www.youtube.com/embed/${v.id}?rel=0&autoplay=1" 
      allow="autoplay; encrypted-media" allowfullscreen>
    </iframe>
  `;
}

// initial render
renderList();
