function getType(name) {
    $.get(
        'https://pokeapi.co/api/v2/type',
        function(e) {
            var tabType = e['results'];
            switch (name) {
                case 'normal':
                    tabType.forEach(element => {
                        if (element.name == name) {
                            tabType = element;
                        }
                    });
                    tabType.color = '#A8A878';
                    return tabType;
                    break;

                case 'fighting':

                    tabType.forEach(element => {
                        if (element.name == name) {
                            tabType = element;
                        }
                    });
                    tabType.color = '#C03028';
                    return tabType;
                    break;

                case 'flying':

                    tabType.forEach(element => {
                        if (element.name == name) {
                            tabType = element;
                        }
                    });
                    tabType.color = '#A890F0';
                    return tabType;
                    break;

                case 'poison':

                    tabType.forEach(element => {
                        if (element.name == name) {
                            tabType = element;
                        }
                    });
                    tabType.color = '#A040A0';
                    return tabType;
                    break;

                case 'ground':

                    tabType.forEach(element => {
                        if (element.name == name) {
                            tabType = element;
                        }
                    });
                    tabType.color = '#E0C068';
                    return tabType;
                    break;

                case 'rock':

                    tabType.forEach(element => {
                        if (element.name == name) {
                            tabType = element;
                        }
                    });
                    tabType.color = '#B8A038';
                    return tabType;
                    break;

                case 'bug':

                    tabType.forEach(element => {
                        if (element.name == name) {
                            tabType = element;
                        }
                    });
                    tabType.color = '#A8B820';
                    return tabType;
                    break;

                case 'ghost':

                    tabType.forEach(element => {
                        if (element.name == name) {
                            tabType = element;
                        }
                    });
                    tabType.color = '#705898';
                    return tabType;
                    break;

                case 'steel':

                    tabType.forEach(element => {
                        if (element.name == name) {
                            tabType = element;
                        }
                    });
                    tabType.color = '#B8B8D0';
                    return tabType;
                    break;

                case 'fire':

                    tabType.forEach(element => {
                        if (element.name == name) {
                            tabType = element;
                        }
                    });
                    tabType.color = '#E24242';
                    return tabType;
                    break;

                case 'water':

                    tabType.forEach(element => {
                        if (element.name == name) {
                            tabType = element;
                        }
                    });
                    tabType.color = '#5BC7E5';
                    return tabType;
                    break;

                case 'grass':

                    tabType.forEach(element => {
                        if (element.name == name) {
                            tabType = element;
                        }
                    });
                    tabType.color = '#7DB808';
                    return tabType;
                    break;

                case 'electric':

                    tabType.forEach(element => {
                        if (element.name == name) {
                            tabType = element;
                        }
                    });
                    tabType.color = '#FAB536';
                    return tabType;
                    break;

                case 'psychic':

                    tabType.forEach(element => {
                        if (element.name == name) {
                            tabType = element;
                        }
                    });
                    tabType.color = '#A65E9A';
                    return tabType;
                    break;

                case 'ice':

                    tabType.forEach(element => {
                        if (element.name == name) {
                            tabType = element;
                        }
                    });
                    tabType.color = '#98D8D8';
                    return tabType;
                    break;

                case 'dragon':

                    tabType.forEach(element => {
                        if (element.name == name) {
                            tabType = element;
                        }
                    });
                    tabType.color = '#4924A1';
                    return tabType;
                    break;

                case 'dark':

                    tabType.forEach(element => {
                        if (element.name == name) {
                            tabType = element;
                        }
                    });
                    tabType.color = '#2C2E2B';
                    return tabType;
                    break;

                case 'fairy':

                    tabType.forEach(element => {
                        if (element.name == name) {
                            tabType = element;
                        }
                    });
                    tabType.color = '#E03A83';
                    return tabType;
                    break;

                case 'unknown':

                    tabType.forEach(element => {
                        if (element.name == name) {
                            tabType = element;
                        }
                    });
                    tabType.color = '#68A090';
                    return tabType;
                    break;

                case 'shadow':

                    tabType.forEach(element => {
                        if (element.name == name) {
                            tabType = element;
                        }
                    });
                    tabType.color = 'dark';
                    return tabType;
                    break;
            }


        }
    );
}