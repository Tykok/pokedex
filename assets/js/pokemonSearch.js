// Key Enter press, search the pokemon !
$('#name').keypress(function(e) {      
    if (e.keyCode === 13) {

        $.get(
            'https://pokeapi.co/api/v2/pokemon/' + $('#name').val().toLocaleLowerCase(),
            function(data) {
                console.log(data);
                /*
                var pokedex = JSON.parse(data);
                pokedex = pokedex['results'];
                var htmlData = "";

                pokedex.forEach(element => {
                    htmlData += element['name'] + "<br/>";
                });
*/
                $("#result").html(data);
            },
            'html'
        );

    }
});



// Auto complete input
$(document).ready(function() {

    var dataAuto = {};
    $.get(
        'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1000',
        function(data) {
            var pokedex = data['results'];
            pokedex.forEach(element => {
                dataAuto[element['name']] = null;
            });
        }
    );


    $('#name').autocomplete({
        data: dataAuto,
    });
});