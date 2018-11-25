var fakedba = {
    "data": [
        {
            "id": 1,
            "nome": "Avenged Seven Fold",
            "formation": "1999",
            "genre": "Metal Core",
            "cover": "img/avenged-sevenfold.jpg",
            "members":"M.Shadows, Synyster gates, Johnny Christ,Zacky Vengeance , Brooks Wackerman ",
            "albums":"Sounding the 7th Trumpet, Walkin the Fallen , City of Evil, Avenged Seven Fold, Nightmare, Hail to the King,The Stage"

        },
        {
            "id": 2,
            "nome": "Muse",
            "formation": "1994",
            "genre": "Rock Alternativo",
            "cover": "img/muse.jpg",
            "members":" Matthew Bellamy, Christopher Wolstenholme, Dominic Howard",
            "albums":"Simulation Theory , Drones, Absolutin , Second Law, The Resistance"
        },
        {
            "id": 3,
            "nome": "Slipknot",
            "formation": "1995",
            "genre": "Nu Metal",
            "cover": "img/slipknot.jpg",
            "members":" Corey Taylor, Joey Jordison, Paul Gray, James Root",
            "albums":" Iowa, All Hope Is Gone, Vol. 3: (The Subliminal Verses)"
        },
        {
            "id": 4,
            "nome": "Chevelle",
            "formation": "1995",
            "genre": "Metal Alternativo",
            "cover": "img/chevelle.jpg",
            "members":" Pete Loeffler, Sam Loeffler, Dean Bernardini",
            "albums":"Sci-Fi crimes, Wonder Whats Next ,The North Corridor, !2 Bloody Spiders"
        },
        {
            "id": 5,
            "nome": "Metallica",
            "formation": "1981",
            "genre": "Heavy Metal", 
            "cover": "img/metallica.jpg",
            "members":"Roberto Trujillo, James Hetfield, Lars Ulrich, Kirk Hammett,",
            "albums":" Master of Puppets, Metallica, Ride the Lightning, Death Magnet"
        }
    ]
};


var fakedb = JSON.parse(localStorage.getItem('fakedb'));
if (!fakedb) {
    fakedb = fakedba;
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

// INSERIR UMA BANDA
function insertBand(banda) {
    // Calcula novo Id a partir do último código existente no array
    let novoId = fakedb.data[fakedb.data.length - 1].id + 1;
    let novaBanda = {
        "id": novoId,
        "nome": banda.nome,
        "formation":banda.formation,
        "genre": banda.genre,
        "cover": banda.cover,
        "members": banda.members,
        "albums": banda.albums
    };

     // Insere o novo objeto no array
     fakedb.data.push(novaBanda);
     displayMessage("Sua banda foi inserida com sucesso");
 
     // Atualiza os dados no Local Storage
     localStorage.setItem('fakedb', JSON.stringify(fakedb));
 }

//ALTERAR UMA BANDA
 function updateBand(id, banda) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = fakedb.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
        fakedb.data[index].nome = banda.nome,
        fakedb.data[index].formation = banda.formation,
        fakedb.data[index].genre = banda.genre,
        fakedb.data[index].cover = banda.cover,
        fakedb.data[index].members = banda.members,
        fakedb.data[index].albums = banda.albums,

    displayMessage("Banda alterada com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('fakedb', JSON.stringify(fakedb));
}


function deleteBand(id) {
    // Filtra o array removendo o elemento com o id passado
    fakedb.data = fakedb.data.filter(function (element) {
        return element.id != id
    });

    displayMessage("Banda removida com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('fakedb', JSON.stringify(fakedb));

    // Limpa o formulario
    $("#form-banda")[0].reset();
}