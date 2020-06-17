<?php
extract($_POST);
?>


<div class="card">
    <div class='card-content'>
        <span class='card-title center'><?php echo $name; ?></span>
        <br /> <br />
        <div class='row center'>
            <div class='col s6'>
                <i>Height</i> : <?php echo $height; ?> decimetres
            </div>
            <div class='col s6'>
                <i>Weight</i> : <?php echo $weight; ?> hectograms
            </div>
        </div>
        <br />
        <div class='row'>
            <i>Types</i> : <br />
            <div class='row center'>
                <?php foreach ($types as $oneType) {
                    $infoType = $oneType['type'];
                ?>
                    <span class='badge dark-text' style='background-color: <?php echo getColor($infoType['name']); ?>'>
                        <?php echo $infoType['name']; ?>
                    </span>
                <?php
                } ?>

            </div>
        </div>
        <br />
        <div class='row center'>


            <?php if (
                key_exists('back_default', $sprites) && key_exists('front_default', $sprites) &&
                $sprites['back_default'] != null && $sprites['front_default'] != null
            ) {
            ?>

                <div class='row center'>
                    <i><?php echo $name; ?></i>
                    <br />
                    <div class='col s6'>
                        <img class="responsive-img" src="<?php echo $sprites['front_default']; ?>">
                    </div>
                    <div class='col s6'>
                        <img class="responsive-img" src="<?php echo $sprites['back_default']; ?>">
                    </div>
                </div>
                <br />

            <?php
            }
            ?>

            <?php if (
                key_exists('back_female', $sprites) && key_exists('front_female', $sprites) &&
                $sprites['back_female'] != null && $sprites['front_female'] != null
            ) {
            ?>

                <div class='row center'>
                    <i>Female <?php echo $name; ?></i>
                    <br />
                    <div class='col s6'>
                        <img class="responsive-img" src="<?php echo $sprites['front_female']; ?>">
                    </div>
                    <div class='col s6'>
                        <img class="responsive-img" src="<?php echo $sprites['back_female']; ?>">
                    </div>
                </div>
                <br />

            <?php
            }
            ?>


            <?php if (
                key_exists('back_shiny', $sprites) && key_exists('front_shiny', $sprites) &&
                $sprites['back_shiny'] != null && $sprites['front_shiny'] != null
            ) {
            ?>

                <div class='row center'>
                    <i>Shiny <?php echo $name; ?></i>
                    <br />
                    <div class='col s6'>
                        <img class="responsive-img" src="<?php echo $sprites['front_shiny']; ?>">
                    </div>
                    <div class='col s6'>
                        <img class="responsive-img" src="<?php echo $sprites['back_shiny']; ?>">
                    </div>
                </div>
                <br />

            <?php
            }
            ?>


            <?php if (
                key_exists('back_shiny_female', $sprites) && key_exists('front_shiny_female', $sprites) &&
                $sprites['back_shiny_female'] != null && $sprites['front_shiny_female'] != null
            ) {
            ?>

                <div class='row center'>
                    <i>Shiny female <?php echo $name; ?></i>
                    <br />
                    <div class='col s6'>
                        <img class="responsive-img" src="<?php echo $sprites['front_shiny_female']; ?>">
                    </div>
                    <div class='col s6'>
                        <img class="responsive-img" src="<?php echo $sprites['back_shiny_female']; ?>">
                    </div>
                </div>
                <br />

            <?php
            }
            ?>


        </div>
    </div>
</div>








<?php

function getColor($nameOfType)
{
    switch ($nameOfType) {
        case 'normal':
            return '#A8A878';
            break;
        case 'fighting':
            return '#C03028';
            break;

        case 'flying':
            return '#A890F0';
            break;

        case 'poison':
            return '#A040A0';
            break;

        case 'ground':
            return '#E0C068';
            break;

        case 'rock':
            return '#B8A038';
            break;

        case 'bug':
            return '#A8B820';
            break;

        case 'ghost':
            return '#705898';
            break;

        case 'steel':
            return '#B8B8D0';
            break;

        case 'fire':
            return '#E24242';
            break;

        case 'water':
            return '#5BC7E5';
            break;

        case 'grass':
            return '#7DB808';
            break;

        case 'electric':
            return '#FAB536';
            break;

        case 'psychic':
            return '#A65E9A';
            break;

        case 'ice':
            return '#98D8D8';
            break;

        case 'dragon':
            return '#4924A1';
            break;

        case 'dark':
            return '#2C2E2B';
            break;

        case 'fairy':
            return '#E03A83';
            break;

        case 'unknown':
            return '#68A090';
            break;

        case 'shadow':
            return 'dark';
            break;
    }
}

?>