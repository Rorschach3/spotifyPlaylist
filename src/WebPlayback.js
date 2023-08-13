const playlistId = '5Ddv9LRNh98WRtNaO7BTqr';


function webPlayer() {
    return (
        <div>
            <iframe
            title="Spotify Embed: Recommendation Playlist "
            src={`https://open.spotify.com/embed/playlist/5Ddv9LRNh98WRtNaO7BTqr?utm_source=generator&theme=0`}
            width="100%"
            height="100%"
            style={{ minHeight: '360px' }}
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            />
            
        </div>
    )
}

export default webPlayer;