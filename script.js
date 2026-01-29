// const { access } = require("fs");

function click(link, x) {
    x.addEventListener("click", () => {
        window.open(link, "_self");
    });
}

const hamburger = document.querySelector(".hamburger");
const nav = document.getElementById("nav-links");
let isOpen = false;
hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
    isOpen = !isOpen
    if (isOpen) {
        hamburger.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    }
    else {
        hamburger.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    }
})

const spotifyLogo = document.querySelector(".spotifyLogo");
const homeLogo = document.querySelector(".homeLogo");
click("index.html", spotifyLogo);
click("index.html", homeLogo);

const scrollLogo = document.querySelectorAll(".scrollLogo");
scrollLogo.forEach((element) => {
    const container = element.parentElement;
    element.addEventListener("click", () => {
        container.scrollBy({ left: 900, behavior: 'smooth' });
    })
});

const scrollLeft = document.querySelectorAll(".scrollLeft");
scrollLeft.forEach((element) => {
    const container = element.parentElement;
    element.addEventListener("click", () => {
        container.scrollBy({ left: -900, behavior: 'smooth' });
    })
});

//Code to Dynamically add, song details to all sections

function DynamicInput(element, TSi) {
    let artistArray;

    if (Array.isArray(TSi.artist)) {
        artistArray = TSi.artist;
    } else if (typeof TSi.artist === "string" && TSi.artist.includes(',')) {
        artistArray = TSi.artist.split(',').map(name => name.trim());
    } else {
        artistArray = [TSi.artist];
    }

    // Converting each artist into a clickable span

    const artistHTML = artistArray.map(artist => {
        return `<span class="clickable-name" data-name="${artist}">${artist}</span>`;
    }).join(', ');

    element.innerHTML =
        `<div class="image">
        <img src="${TSi.thumbnail}" alt="${TSi.title}" height="160px"> 
        <div class="playbtn">
            <i class="fa-solid fa-play"></i>
        </div>
    </div>
    <div class="songTitle">${TSi.title}</div>
    <div class="artistNames">${artistHTML}
    </div>`

    const clickableNames = element.querySelectorAll('.clickable-name');
    clickableNames.forEach(span => {
        span.addEventListener('click', () => {
            const name = span.getAttribute('data-name');
            if (name != "Artist") {
                window.open(`https://www.google.com/search?q=${name}`, "_self")
            }
            else {
                //it shout no underline the artist word          
            }
        });
    });
}
const TrendingSongs = [
    {
        title: "CourtSide",
        artist: "Karan Aujla, Signature By SB",
        thumbnail: "./requiredMedia/TrendingSongs-Thumbnails/CourtSide.jpeg"
    },
    {
        title: "Jhol - Acoustic",
        artist: "Maanu, Annural Khalid",
        thumbnail: "./requiredMedia/TrendingSongs-Thumbnails/jhol.jpeg"
    },
    {
        title: "Without Prejudice",
        artist: "Guru Randhawa",
        thumbnail: "./requiredMedia/TrendingSongs-Thumbnails/withoutPrejudice.jpeg"
    },
    {
        title: "Minnalvala",
        artist: "Jakes Bejoy, Sid Sriram, Sithara Krishnakumar",
        thumbnail: "./requiredMedia/TrendingSongs-Thumbnails/Minnalvala.jpeg"
    },
    {
        title: "Laal Pari",
        artist: "Yo Yo Honey Singh, Simar Kaur, Alfaaz",
        thumbnail: "./requiredMedia/TrendingSongs-Thumbnails/Laal Pari.jpeg"
    },
    {
        title: "Pretty Little Baby",
        artist: "Connie Francis",
        thumbnail: "./requiredMedia/TrendingSongs-Thumbnails/PreetyLittleBaby.jpeg"
    },
    {
        title: "Capital Rap",
        artist: "Seedhe Maut, Hurricane, DL91 Era, Lil Bhavi",
        thumbnail: "./requiredMedia/TrendingSongs-Thumbnails/CapitalRap.jpeg"
    },
    {
        title: "Espresso",
        artist: "Sabrina Carpenter",
        thumbnail: "./requiredMedia/TrendingSongs-Thumbnails/Espresso.jpeg",
    },
    {
        title: "STFU",
        artist: "AP Dhillon, Shinda Kahlon",
        thumbnail: "./requiredMedia/TrendingSongs-Thumbnails/stfu.jpeg",
    },
    {
        title: "Heat Waves",
        artist: "Glass Animals",
        thumbnail: "./requiredMedia/TrendingSongs-Thumbnails/HeatWaves.jpeg"
    }
];


const BestEnglishSongs = [
    {
        title: "Anxiety",
        thumbnail: "./requiredMedia/BestEnglishSongs-Thumbnails/Anxiety.jpeg",
        artist: "Julia Michaels, Selena Gomez"
    },
    {
        title: "BIRDS OF A FEATHER",
        thumbnail: "./requiredMedia/BestEnglishSongs-Thumbnails/BirdFeather.jpeg",
        artist: "Billie Eilish"
    },
    {
        title: "Die With A Smile",
        thumbnail: "./requiredMedia/BestEnglishSongs-Thumbnails/DieSmile.jpeg",
        artist: "Lady Gaga, Bruno Mars"
    },
    {
        title: "Kiss Me More",
        thumbnail: "./requiredMedia/BestEnglishSongs-Thumbnails/KissMeMore.jpeg",
        artist: "Doja Cat, SZA"
    },
    {
        title: "Loose Control",
        thumbnail: "./requiredMedia/BestEnglishSongs-Thumbnails/LooseControl.jpeg",
        artist: "Meduza, Becky Hill, Goodboys"
    },
    {
        title: "Moon Light",
        thumbnail: "./requiredMedia/BestEnglishSongs-Thumbnails/MoonLight.jpeg",
        artist: "XXXTentacion"
    },
    {
        title: "Ordinary",
        thumbnail: "./requiredMedia/BestEnglishSongs-Thumbnails/Ordinary.jpeg",
        artist: "Alex Warren"
    },
    {
        title: "See You Again",
        thumbnail: "./requiredMedia/BestEnglishSongs-Thumbnails/SeeYouAgain.jpeg",
        artist: "Wiz Khalifa, Charlie Puth"
    },
    {
        title: "That's So True",
        thumbnail: "./requiredMedia/BestEnglishSongs-Thumbnails/That'sSoTrue.jpeg",
        artist: "Gracie Abrams"
    },
    {
        title: "Undressed",
        thumbnail: "./requiredMedia/BestEnglishSongs-Thumbnails/undressed.jpeg",
        artist: "Kim Cesarion"
    }
];


let TS = document.querySelector(".TrendingSongs");
const CE = TS.children;
let childElements = Array.from(CE).slice(1, -1);
childElements.forEach((e, index) => {
    DynamicInput(e, TrendingSongs[index]);
})

let BE = document.querySelector(".BestEnglish");
const childBE = BE.children;
let childBEArray = Array.from(childBE).slice(1, -1);
childBEArray.forEach((e, index) => {
    DynamicInput(e, BestEnglishSongs[index])
})

let audio = document.querySelector(".googleAudioPlayer");
let progressed = document.querySelector(".progressed");
let progress = document.querySelector(".progressBar");
audio.ontimeupdate = function () {
    progressed.style.width = Math.floor((audio.currentTime * 100 / audio.duration)) + "%";
}

progress.addEventListener("click", (e) => {
    audio.currentTime = (e.offsetX / progress.offsetWidth) * audio.duration;
})
let Play = document.getElementById("playButton");
let Pause = document.getElementById("pauseButton");
Play.addEventListener("click", () => {
    audio.play();
    Play.style.display = "none";
    Pause.style.display = "block"
})

// Play.addEventListener("click",()=>{
//     audio.play();
//     Play.style.display="none";
//     Pause.style.display="block"
// })

Pause.addEventListener("click", () => {
    audio.pause();
    Play.style.display = "block";
    Pause.style.display = "none"
})

currentDuration = document.querySelector(".currentDuration")
totalDuration = document.querySelector(".totalDuration")
function updateProgress(e) {
    const rect = progress.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const percent = offsetX / progress.offsetWidth;
    // Clamping percent between 0 and 1
    const clampedPercent = Math.min(1, Math.max(0, percent));
    // audio time
    audio.currentTime = clampedPercent * audio.duration;
    currentDuration.innerHTML = formatTime(audio.currentTime);
    // Updating progress bar visually
    progressed.style.width = (clampedPercent * 100) + "%";
}

let isDragging = false;

progress.addEventListener("mousedown", (e) => {
    isDragging = true;
    updateProgress(e);
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        updateProgress(e);
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});

const volumeBar = document.querySelector(".VolProgressContainer");
const volumeProgress = document.querySelector(".VolProgressed");
let isDraggingVol = false;

volumeBar.addEventListener("mousedown", (e) => {
    isDraggingVol = true;
    updateVolume(e);
});

document.addEventListener("mousemove", (e) => {
    if (isDraggingVol) {
        updateVolume(e);
    }
});

document.addEventListener("mouseup", () => {
    isDraggingVol = false;
});

function updateVolume(e) {
    const rect = volumeBar.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const percentage = Math.min(1, Math.max(0, offsetX / volumeBar.offsetWidth));

    audio.volume = percentage;
    volumeProgress.style.width = (percentage * 100) + "%";

    // Icon handling
    document.getElementById("noVolume").style.display = "none";
    document.getElementById("midVolume").style.display = "none";
    document.getElementById("highVolume").style.display = "none";

    if (percentage === 0) {
        document.getElementById("noVolume").style.display = "block";
    } else if (percentage < 0.6) {
        document.getElementById("midVolume").style.display = "block";
    } else {
        document.getElementById("highVolume").style.display = "block";
    }
}

let currentWidth;
let midVolume = document.getElementById("midVolume");
let noVolume = document.getElementById("noVolume");
let highVolume = document.getElementById("highVolume");
midVolume.addEventListener("click", () => {
    midVolume.style.display = "none";
    audio.volume = 0;
    let computedStyle = window.getComputedStyle(volumeProgress);
    currentWidth = computedStyle.width;
    volumeProgress.style.width = "0%";
    noVolume.style.display = "block";
})
highVolume.addEventListener("click", () => {
    highVolume.style.display = "none";
    audio.volume = 0;
    let computedStyle = window.getComputedStyle(volumeProgress);
    currentWidth = computedStyle.width;
    volumeProgress.style.width = "0%";
    noVolume.style.display = "block";
})
noVolume.addEventListener("click", () => {
    noVolume.style.display = "none";
    volumeProgress.style.width = currentWidth;
    console.log(currentWidth);
    let numericPercent = parseFloat(currentWidth);
    audio.volume = numericPercent / 100;
    if (numericPercent === 0) {
        noVolume.style.display = "block";
    } else if (numericPercent < 60) {
        midVolume.style.display = "block";
    } else {
        highVolume.style.display = "block";
    }
})
// playSong.forEach((e, index = 0) => {
var disabled = document.querySelector(".disabled");
async function playTheMusic(section, selector) {
    let SongDetails2 = document.querySelector(".songDetails2");
    let playSong = document.querySelectorAll(`.${selector}`);
    
    for(const [index, e] of playSong.entries()){
        console.log(section);
        console.log(section[index]);
        console.log(section[index].title); 
        const response = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(section[index].title)}&entity=song&limit=1`);
        const data = await response.json();
        const track = data.results;
        console.log(track);
        e.addEventListener("click", () => {
            disabled.style.opacity = "1";
            disabled.style.cursor = "pointer";
            disabled.style.pointerEvents = "all";
            // console.log(section[index])
            audio.src = track[0]?.previewUrl;
            Play.style.display = "none";
            Pause.style.display = "block";
            audio.play();
            SongDetails2.innerHTML = `
            <div class="imgContainer2">
                <img class="imageN" src="${section[index].thumbnail}" alt="${section[index].title}">
            </div>
            <div class="PlayerSongDetails">
                <div class="titleN">
                    ${section[index].title}
                </div>
                <div class="artistN">
                    ${section[index].artist}
                </div>
            </div>`
        })
    }
}

playTheMusic(TrendingSongs, "song");
playTheMusic(BestEnglishSongs, "englishSong");


// Wait for metadata to load to get total duration

// Helper function to format seconds into MM:SS
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

audio.addEventListener("loadedmetadata", () => {
    totalDuration.textContent = formatTime(audio.duration);
});

// Update current time every second
audio.addEventListener("timeupdate", () => {
    currentDuration.textContent = formatTime(audio.currentTime);
});

NoFeatures = document.querySelectorAll(".createPodcast, .signup, .login, .presudo")
NoFeatures.forEach((e) => {
    e.addEventListener("click", () => {
        alert("This feature is currently unavailable");
    })
})

const searchBar = document.querySelector("#username");
const resultContainer = document.querySelector(".searchResultsContainer");
// const audio = document.querySelector(".googleAudioPlayer");

// Fetch token from backend
// async function getAccessToken() {
//   const res = await fetch("http://localhost:5000/token");
//   const data = await res.json();
//   console.log("🎫 Access token:", data.access_token);
//   return data.access_token;
// }

// Search Spotify tracks and show results
// Replace your Spotify search logic with this

async function searchAndDisplay(query) {
    const response = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=10`);
    const data = await response.json();
    const tracks = data.results;
    console.log(tracks)
    const container = document.querySelector(".searchResultsContainer");
    let SongDetails2 = document.querySelector(".songDetails2");
    container.innerHTML = "";

    if (!tracks.length) {
        container.innerHTML = `<div style="color:white;">No results found for "${query}"</div>`;
        return;
    }

    tracks.forEach(track => {
        const card = document.createElement("div");
        card.classList.add("searchResultCard");
        const highResArt = track.artworkUrl100.replace(/100x100bb\.jpg$/, "300x300bb.jpg");
        card.innerHTML = `
        <img src="${highResArt}" alt="${track.trackName}">
        <div><strong>${track.trackName}</strong></div>
        <div style="color: #b3b3b3">${track.artistName}</div>
      `;

        card.addEventListener("click", () => {
            const audio = document.querySelector(".googleAudioPlayer");
            audio.src = track.previewUrl;
            audio.play();
            disabled.style.opacity = "1";
            disabled.style.pointerEvents = "all";
            disabled.style.cursor = "pointer";
            Pause.style.display = "block";
            Play.style.display = "none";
            SongDetails2.innerHTML = `
            <div class="imgContainer2">
                <img class="imageN" src="${highResArt}" alt="${track.trackName}">
            </div>
            <div class="PlayerSongDetails">
                <div class="titleN">
                    ${track.trackName}
                </div>
                <div class="artistN">
                    ${track.artistName}
                </div>
            </div>`;
        });

        container.appendChild(card);
    });
    resultContainer.style.display = "flex";
}

// Triggering search on Enter
const searchInput = document.querySelector("#username");
const form = document.querySelector("form");
form.addEventListener("submit", e => e.preventDefault());

let debounceTimeout;
searchInput.addEventListener("input", () => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
        const query = searchInput.value.trim();
        if (query) {
            searchAndDisplay(query);
        } else {
            const container = document.querySelector(".searchResultsContainer");
            container.innerHTML = "";
            container.style.display = "none";
        }
    }, 500);
});



