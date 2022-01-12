$(document).ready(function () {
    $(document).on('input', '.number-formator', function (e) {
        if (/^[0-9.,]+$/.test($(this).val())) {
            $(this).val(
                $(this).val());
        } else {
            $(this).val(
                $(this)
                    .val()
                    .substring(0, $(this).val().length - 1)
            );
        }
    });
});
