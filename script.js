let search = document.getElementById("search");
let button = document.getElementById("btn");

button.addEventListener("click", function(){
    let search = document.getElementById("search").value;
    fetch('https://api.lyrics.ovh/suggest/'+search)
    .then(response => response.json())
    .then(data => {
        titleNameGet("title_0", "album_0", "lyric_0", 0);
        titleNameGet("title_1", "album_1", "lyric_1", 1);
        titleNameGet("title_2", "album_2", "lyric_2", 2);
        titleNameGet("title_3", "album_3", "lyric_3", 3);
        titleNameGet("title_4", "album_4", "lyric_4", 4);
        titleNameGet("title_5", "album_5", "lyric_5", 5);
        titleNameGet("title_6", "album_6", "lyric_6", 6);
        titleNameGet("title_7", "album_7", "lyric_7", 7);
        titleNameGet("title_8", "album_8", "lyric_8", 8);
        titleNameGet("title_9", "album_9", "lyric_9", 9);

        function titleNameGet(title_no, album_no, lyric_no, No){
            document.getElementById(title_no).innerText = data.data[No].title + ", " + data.data[No].album.title;
            document.getElementById(album_no).innerText = data.data[No].artist.name;
            document.getElementById(lyric_no).addEventListener("click", function(){
                document.getElementById("song-tittle").innerText = data.data[No].title;
                fetch("https://api.lyrics.ovh/v1/"+data.data[No].artist.name+"/"+data.data[No].title)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    document.getElementById("lyrics-text").innerText = data.lyrics;
                })
            })
        }
        
    })
    .catch(error => console.log(error));
})