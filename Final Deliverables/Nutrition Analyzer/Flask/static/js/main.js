$(document).ready(function () {

    $('#result').hide();
    $('.loader').hide();      

    $('#predict').click(function () {
        $(this).hide();
        $('#formdiv').hide();
        $('.loader').show();
        console.log("done!")
        var form_data = new FormData($('#imageForm')[0]);
        $.ajax({
            type: 'POST',
            url: '/predict',
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            async: true,
            success: function (data) {

                $('.loader').hide();
                $('#rowclass').addClass("row");
                $('#colleft').addClass("col-6");
                $('#colright').addClass("col-6");
                $('#formdiv').show();
                $('#result').fadeIn(400);
                $('#result').html(data);
                console.log('Success!');
            },
        });
    });

});
