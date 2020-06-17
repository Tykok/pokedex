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
                    data = JSON.parse(data);
                    var name = data['name'];
                    var types = data['types'];
                    var sprites = data['sprites'];

                    var htmlData = "<div class='card'>";
                    htmlData += "<div class='card-content'>";
                    htmlData += "<span class='card-title center'>" + name + "</span>";
                    htmlData += "<br/> <br/>";
                    htmlData += "<div class='row center'>";
                    htmlData += "<div class='col s6'>";
                    htmlData += "<i>Height</i> : " + data.height + " decimetres";
                    htmlData += "</div>";
                    htmlData += "<div class='col s6'>";
                    htmlData += "<i>Weight</i> : " + data.weight + " hectograms";
                    htmlData += "</div>";
                    htmlData += "</div>";
                    htmlData += "<br/>";
                    htmlData += "<div class='row'>";
                    htmlData += "<i>Types</i> : <br/>";
                    htmlData += "<div class='row center'>";

                    types.forEach(element => {
                        element = element['type'];
                        element = getType(element['name']);
                        //console.log(element);
                    });

                    htmlData += "<span class='new badge' style='background-color: #A8B820'>The Type</span>";
                    htmlData += "<span class='new badge' style='background-color: #A8B820'>The Type</span>";


                    htmlData += "</div>";
                    htmlData += "</div>";
                    htmlData += "<br/>";
                    htmlData += "<div class='row center'>";
                    htmlData += "<div class='row'>";
                    htmlData += "<i>Male</i>";
                    htmlData += "<br/>";
                    htmlData += "<div class='col s6'>";
                    htmlData += "</div>";
                    htmlData += "<div class='col s6'>";
                    htmlData += "</div>";
                    htmlData += "</div>";
                    htmlData += "<br/>";
                    htmlData += "<div class='row'><i>Female</i>";
                    htmlData += "<br/>";
                    htmlData += "<div class='col s6'>";
                    htmlData += "</div>";
                    htmlData += "<div class='col s6'>";
                    htmlData += "</div>";
                    htmlData += "</div>";
                    htmlData += "<br/>";
                    htmlData += "<div class='row'><i>Shiny Male</i>";
                    htmlData += "<br/>";
                    htmlData += "<div class='col s6'>";
                    htmlData += "</div>";
                    htmlData += "<div class='col s6'>";
                    htmlData += "</div>";
                    htmlData += "</div>";
                    htmlData += "<br/>";
                    htmlData += "<div class='row'><i>Shiny Female</i>";
                    htmlData += "<br/>";
                    htmlData += "<div class='col s6'>";
                    htmlData += "</div>";
                    htmlData += "<div class='col s6'>";
                    htmlData += "</div>";
                    htmlData += "</div>";
                    htmlData += "<br/>";
                    htmlData += "</div>";
                    htmlData += "</div>";
                    htmlData += "</div>";

                    search = true;
                    $("#result").html(htmlData);
                },
                'html'
            );

            if (search === false) {
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



$.get(
    'https://pokeapi.co/api/v2/pokemon/bulbasaur',
    function(data) {
        var types = data['types'];

        types.forEach(element => {
            var theType = getType((new String(element.type.name)));
            console.log(theType);
        });
    },
    'html'
);