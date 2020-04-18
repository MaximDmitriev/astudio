$('document').ready(function() {
    var placeholder = '';
    $('input, textarea').on('focus', function() {
        placeholder = $(this).attr('placeholder');
        $(this).attr('placeholder', '');
    }).on('blur', function() {
        $(this).attr('placeholder', placeholder);
    });
    //=require ../elements/**/*.js
});