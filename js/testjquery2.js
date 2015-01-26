
jQuery(document).ready(
        function () {

            $("#go").click(function () {


                // fonction html pour remplacer un contenu
                $('p').html("Ceci est un <em>texte</em>");

                // $('p').prepend('<img id="gauche" src="./img/0.png">');
                // $('p').append('<img id="gauche" src="./img/1.png">');

                // fonction wrap pour ajouter une div wrap
                // <div><p>.....</p></div>
                $('p').wrap('<div>');
                $('div').css({
                    'border': '4px solid black',
                    'margin': '2px'
                });

                // fonction wrapInner pour ajouter qqc dans un wrap
                // <div><p><strong>.....</strong></p></div>
                $('p').wrapInner('<strong>');

                // $('ul').remove();

                //$('ul').html('');

                /*
                 for (var i = 0; i <= 12; i++) {
                 $('ul').append('<li><img src="./img/'+i+'.png"></li>');
                 }
                 */

            });

            // ne permet pas de rendre cliquables 
            // les boutons qui n'existaient pas 
            // au chargement de la page
            
            $(".zoup").click(function () {
                $("#zoupzone").append('Zoup');
                $("#boutons").append('<button class="zoup">Re-Zoup</button>');
            });

            // permet de rendre cliquables 
            // les boutons générés dynamiquement 
            // après le chargement de la page

            $(document).on('click', '.zoup', function () {
                $("#zoupzone").append('Zoup');
                $("#boutons").append('<button class="zoup">Re-Zoup</button>');
            });

            
        }
);