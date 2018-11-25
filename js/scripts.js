var fakedb = JSON.parse(localStorage.getItem('fakedb'));
if (!fakedb) {
    fakedb = fakedb;
}

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
        "cover": banda.cover

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