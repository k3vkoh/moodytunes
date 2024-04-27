import examples from './examples.json';
const playlists = [];

export function generateExamples(num) {
    const randomExamples = [];
    for (let i = 0; i < num; i++) {
        const randomIndex = Math.floor(Math.random() * examples.length);
        randomExamples.push(examples[randomIndex]);
    }
    return randomExamples;
}

export async function addPlaylist(prompt) {
    const newPlaylist = {
        name: `Playlist ${playlists.length}`,
        image: '',
        songs: await generatePlaylist(prompt)
    };
    playlists.unshift(newPlaylist);
    return newPlaylist;
}

async function generatePlaylist(prompt) {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "prompt": prompt
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    let playlist = []
    console.log("Generating playlist...")
    await fetch("https://mt-api.glitch.me/generate", requestOptions)
        .then(response => response.json())
        .then(result => playlist=result)
        .catch(error => console.log('error', error));

    return playlist;
}

export function fetchPlaylists() {
    return playlists;
}