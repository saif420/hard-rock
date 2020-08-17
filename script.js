let search = document.getElementById("search");
let button = document.getElementById("btn");

button.addEventListener("click", function(){
    let search = document.getElementById("search").value;
    fetch('https://api.lyrics.ovh/suggest/'+search)
    .then(response => response.json())
    .then(data => {
        titleNameGet("title-0", "album-0", "lyric-0", 0);
        titleNameGet("title-1", "album-1", "lyric-1", 1);
        titleNameGet("title-2", "album-2", "lyric-2", 2);
        titleNameGet("title-3", "album-3", "lyric-3", 3);
        titleNameGet("title-4", "album-4", "lyric-4", 4);
        titleNameGet("title-5", "album-5", "lyric-5", 5);
        titleNameGet("title-6", "album-6", "lyric-6", 6);
        titleNameGet("title-7", "album-7", "lyric-7", 7);
        titleNameGet("title-8", "album-8", "lyric-8", 8);
        titleNameGet("title-9", "album-9", "lyric-9", 9);

        function titleNameGet(title-no, album-no, lyric-no, No){
            document.getElementById(title-no).innerText = data.data[No].title + ", " + data.data[No].album.title;
            document.getElementById(album-no).innerText = data.data[No].artist.name;
            document.getElementById(lyric-no).addEventListener("click", function(){
                document.getElementById("song-tittle").innerText = data.data[No].title;
                fetch("https://api.lyrics.ovh/v1/"+data.data[No].artist.name+"/"+data.data[No].title)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    document.getElementById("lyricsText").innerText = data.lyrics;
                })
            })
        }
        
    })
    .catch(error => console.log(error));
})