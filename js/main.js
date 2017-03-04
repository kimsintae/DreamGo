//메뉴바 클릭시 효과
$(document).ready(function () {
    $(".active").removeClass("active");
    $("[href='#']").parent().addClass("active");
});

function openCity(evt, searchType) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(searchType).style.display = "block";
    evt.currentTarget.className += " active";
}