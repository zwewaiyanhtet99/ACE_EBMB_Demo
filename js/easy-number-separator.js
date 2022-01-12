$(document).ready(function () {
    $(document).on('input', '.number-separator', function (e) {
        if (/^[0-9.,]+$/.test($(this).val())) {
            $(this).val(
                $(this).val().replace(/(?!\.)\D/g, "").replace(/(?<=\..*)\./g, "").replace(/(?<=\.\d\d).*/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            );
        } else {
            $(this).val(
                $(this)
                    .val()
                    .substring(0, $(this).val().length - 1)
            );
        }
    });
});
