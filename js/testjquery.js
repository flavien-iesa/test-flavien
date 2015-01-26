
jQuery(document).ready(
        function () {

            $('h1').animate({fontSize: 1}, 'slow')
                    .animate({fontSize: 30}, 4000);
            $('ul li').css({
                border: '4px solid black',
                margin: 10,
                padding: '1.2em'
            });
            $('h1').click(function () {
                $('li').hide();
            });
            $('#joligite').focus(function () {
                $('li').hide();
            });
            $('#joligite').blur(function () {
                $('li').show();
            });

            var analyse = function (event) {
                console.log(event);
            };
            $('h1').click(analyse);

        }
);