// Key Enter press, search the pokemon !
$('#name').keypress(function(e) {      
    if (e.keyCode === 13) {

        var search = false;

        if ($("#name").val().length === undefined || $("#name").val().length === 0) {
            M.toast({ html: 'No Pokemon search...' });
        } else {
            $.get(
                'https://pokeapi.co/api/v2/pokemon/' + $('#name').val().toLocaleLowerCase(),
                function(data) {
                    search = true;
                    data = JSON.parse(data);
                    var name = data['name'];
                    var weight = data['weight'];
                    var height = data['height'];
                    var types = data['types'];
                    var sprites = data['sprites'];

                    $.post(
                        'assets/js/pokemonSearch.php', {
                            name: name,
                            weight: weight,
                            height: height,
                            types: types,
                            sprites: sprites,
                        },
                        function(html_result) {
                            $("#result").html(html_result);
                        },
                        'html'
                    );



                },
                'html'
            );

            if (search == false) {
                $("#result").html("");
                M.toast({ html: 'Error ...' });
            }
        }
    }
});





var dataAuto = {};
$.get(
    'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1000',
    function(data) {
        var pokedex = data['results'];
        pokedex.forEach(element => {



            $.get(
                'https://pokeapi.co/api/v2/pokemon-form/' + element['name'],
                function(e) {
                    if (e['sprites']['front_default'] != null) {
                        dataAuto[element['name']] = e['sprites']['front_default'];
                    } else {
                        dataAuto[element['name']] = null;
                    }
                }
            );

        });
    }
);

$('#name').autocomplete({
    data: dataAuto,
});