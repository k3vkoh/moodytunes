import examples from './examples.json';

export function generateExamples(num) {
    const randomExamples = [];
    for (let i = 0; i < num; i++) {
        const randomIndex = Math.floor(Math.random() * examples.length);
        randomExamples.push(examples[randomIndex]);
    }
    return randomExamples;
}

export function fetchPlaylists() {
  return [
    {
        'title': 'Playlist 1',
        'image': '',
        'songs': [
            {
                'title': 'Song 1',
                'artist': 'Artist 1',
                'spotify-id': '',
                'image': '/song-1.png'
            },
            {
                'title': 'Song 2',
                'artist': 'Artist 2',
                'spotify-id': '',
                'image': '/song-1.png'
            },
            {
                'title': 'Song 3',
                'artist': 'Artist 3',
                'spotify-id': '',
                'image': '/song-1.png'
            },
            {
                'title': 'Song 4',
                'artist': 'Artist 4',
                'spotify-id': '',
                'image': '/song-1.png'
            },
            {
                'title': 'Song 5',
                'artist': 'Artist 5',
                'spotify-id': '',
                'image': '/song-1.png'
            },
            {
                'title': 'Song 6',
                'artist': 'Artist 6',
                'spotify-id': '',
                'image': '/song-1.png'
            }
        ]
    },
    {
        'title': 'Playlist 2',
        'image': '',
        'songs': [
            {
                'title': 'Song 1',
                'artist': 'Artist 1',
                'spotify-id': '',
                'image': ''
            },
            {
                'title': 'Song 2',
                'artist': 'Artist 2',
                'spotify-id': '',
                'image': ''
            },
            {
                'title': 'Song 3',
                'artist': 'Artist 3',
                'spotify-id': '',
                'image': ''
            }
        ]
    },
    {
        'title': 'Playlist 3',
        'image': '',
        'songs': [
            {
                'title': 'Song 1',
                'artist': 'Artist 1',
                'spotify-id': '',
                'image': ''
            },
            {
                'title': 'Song 2',
                'artist': 'Artist 2',
                'spotify-id': '',
                'image': ''
            },
            {
                'title': 'Song 3',
                'artist': 'Artist 3',
                'spotify-id': '',
                'image': ''
            }
        ]
    },
    {
        'title': 'Playlist 4',
        'image': '',
        'songs': [
            {
                'title': 'Song 1',
                'artist': 'Artist 1',
                'spotify-id': '',
                'image': ''
            },
            {
                'title': 'Song 2',
                'artist': 'Artist 2',
                'spotify-id': '',
                'image': ''
            },
            {
                'title': 'Song 3',
                'artist': 'Artist 3',
                'spotify-id': '',
                'image': ''
            }
        ]
    },
    {
        'title': 'Playlist 5',
        'image': '',
        'songs': [
            {
                'title': 'Song 1',
                'artist': 'Artist 1',
                'spotify-id': '',
                'image': ''
            },
            {
                'title': 'Song 2',
                'artist': 'Artist 2',
                'spotify-id': '',
                'image': ''
            },
            {
                'title': 'Song 3',
                'artist': 'Artist 3',
                'spotify-id': '',
                'image': ''
            }
        ]
    },
    {
        'title': 'Playlist 6',
        'image': '',
        'songs': [
            {
                'title': 'Song 1',
                'artist': 'Artist 1',
                'spotify-id': '',
                'image': ''
            },
            {
                'title': 'Song 2',
                'artist': 'Artist 2',
                'spotify-id': '',
                'image': ''
            },
            {
                'title': 'Song 3',
                'artist': 'Artist 3',
                'spotify-id': '',
                'image': ''
            }
        ]
    },
    {
        'title': 'Playlist 7',
        'image': '',
        'songs': [
            {
                'title': 'Song 1',
                'artist': 'Artist 1',
                'spotify-id': '',
                'image': ''
            },
            {
                'title': 'Song 2',
                'artist': 'Artist 2',
                'spotify-id': '',
                'image': ''
            },
            {
                'title': 'Song 3',
                'artist': 'Artist 3',
                'spotify-id': '',
                'image': ''
            }
        ]
    },
    {
        'title': 'Playlist 8',
        'image': '',
        'songs': [
            {
                'title': 'Song 1',
                'artist': 'Artist 1',
                'spotify-id': '',
                'image': ''
            },
            {
                'title': 'Song 2',
                'artist': 'Artist 2',
                'spotify-id': '',
                'image': ''
            },
            {
                'title': 'Song 3',
                'artist': 'Artist 3',
                'spotify-id': '',
                'image': ''
            }
        ]
    },
    {
        'title': 'Playlist 9',
        'image': '',
        'songs': [
            {
                'title': 'Song 1',
                'artist': 'Artist 1',
                'spotify-id': '',
                'image': ''
            },
            {
                'title': 'Song 2',
                'artist': 'Artist 2',
                'spotify-id': '',
                'image': ''
            },
            {
                'title': 'Song 3',
                'artist': 'Artist 3',
                'spotify-id': '',
                'image': ''
            }
        ]
    },
    {
        'title': 'Playlist 10',
        'image': '',
        'songs': [
            {
                'title': 'Song 1',
                'artist': 'Artist 1',
                'spotify-id': '',
                'image': ''
            },
            {
                'title': 'Song 2',
                'artist': 'Artist 2',
                'spotify-id': '',
                'image': ''
            },
            {
                'title': 'Song 3',
                'artist': 'Artist 3',
                'spotify-id': '',
                'image': ''
            }
        ]
    },
    {
        'title': 'Playlist 11',
        'image': '',
        'songs': [
            {
                'title': 'Song 1',
                'artist': 'Artist 1',
                'spotify-id': '',
                'image': ''
            },
            {
                'title': 'Song 2',
                'artist': 'Artist 2',
                'spotify-id': '',
                'image': ''
            },
            {
                'title': 'Song 3',
                'artist': 'Artist 3',
                'spotify-id': '',
                'image': ''
            }
        ]
    },
    {
        'title': 'Playlist 12',
        'image': '',
        'songs': [
            {
                'title': 'Song 1',
                'artist': 'Artist 1',
                'spotify-id': '',
                'image': ''
            },
            {
                'title': 'Song 2',
                'artist': 'Artist 2',
                'spotify-id': '',
                'image': ''
            },
            {
                'title': 'Song 3',
                'artist': 'Artist 3',
                'spotify-id': '',
                'image': ''
            }
        ]
    },
    {
        'title': 'Playlist 13',
        'image': '',
        'songs': [
            {
                'title': 'Song 1',
                'artist': 'Artist 1',
                'spotify-id': '',
                'image': ''
            },
            {
                'title': 'Song 2',
                'artist': 'Artist 2',
                'spotify-id': '',
                'image': ''
            },
            {
                'title': 'Song 3',
                'artist': 'Artist 3',
                'spotify-id': '',
                'image': ''
            }
        ]
    },
    {
        'title': 'Playlist 14',
        'image': '',
        'songs': [
            {
                'title': 'Song 1',
                'artist': 'Artist 1',
                'spotify-id': '',
                'image': ''
            },
            {
                'title': 'Song 2',
                'artist': 'Artist 2',
                'spotify-id': '',
                'image': ''
            },
            {
                'title': 'Song 3',
                'artist': 'Artist 3',
                'spotify-id': '',
                'image': ''
            }
        ]
    },
    {
        'title': 'Playlist 15',
        'image': '',
        'songs': [
            {
                'title': 'Song 1',
                'artist': 'Artist 1',
                'spotify-id': '',
                'image': ''
            },
            {
                'title': 'Song 2',
                'artist': 'Artist 2',
                'spotify-id': '',
                'image': ''
            },
            {
                'title': 'Song 3',
                'artist': 'Artist 3',
                'spotify-id': '',
                'image': ''
            }
        ]
    },
    {
        'title': 'Playlist 16',
        'image': '',
        'songs': [
            {
                'title': 'Song 1',
                'artist': 'Artist 1',
                'spotify-id': '',
                'image': ''
            },
            {
                'title': 'Song 2',
                'artist': 'Artist 2',
                'spotify-id': '',
                'image': ''
            },
            {
                'title': 'Song 3',
                'artist': 'Artist 3',
                'spotify-id': '',
                'image': ''
            }
        ]
    }
  ]
}