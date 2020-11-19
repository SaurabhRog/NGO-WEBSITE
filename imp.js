$(document).ready(function(){

    $('#work').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{
            enabled: true
        }
    })

    $('.count').counterUp({
        delay:10,
        // time: 4000
        time: 1000
    });
});