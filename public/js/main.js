function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

$(function () {
    $(".dropdown-menu li a").click(function () {
        $(".btn:first-child").text($(this).text());
        $(".btn:first-child").val($(this).text());
    });
});