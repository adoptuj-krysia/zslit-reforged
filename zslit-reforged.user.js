// ==UserScript==
// @name         ZSLiT Tuchola - Reforged
// @namespace    http://tampermonkey.net/
// @version      1.6
// @description  Alternatywny wygląd strony ZSLiT Tuchola.
// @author       Adoptuj Krysia Entertainment
// @match        http://*.zslit-tuchola.pl/*
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==


//Customowy kod CSS, który zostanie załadowany na stronie
var css = `
<style>
/*Usuwa życzenia wielkanocne :)*/
div[data-id='a9065bf'] {
    display: none;
}

#elementor-tab-content-1812 a,
#elementor-tab-content-1812 a:visited,
#elementor-tab-content-1812 a:link,
#elementor-tab-content-1813 a {
    color: black;
}

body {
    margin: 0;
    overflow-x: hidden;
}

.tg-container--boxed .tg-site {
    margin: 0 auto;
}

.elementor-element-05922a3   {
    background: yellow !imporant;
}

.ha-btn {
    background: #2f3842 !important;
}

#colophon, .tg-page-header.tg-page-header--left {
     width: 100vw;
     position: relative;
     margin-left: -50vw;
     left: 50%;
}

.elementor-widget-heading.elementor-widget-heading .elementor-heading-title {
    color: black;
}

.elementor-element-839275f {
    background: url("https://raw.githubusercontent.com/adoptuj-krysia/zslit-reforged/master/bg.png");
}

.elementor-element-8469481,
.elementor-element-05922a3 {
    width: 70% !important;
    margin: 0 auto !important;
    display: block;
    background-color: white !important;
    overflow-x: visible;
}

/*Dodaje większy margines dla sekcji z newsami*/
@media only screen and (min-width: 1199px) {
.elementor-element-4f39574 {
    margin: 80px auto;
    overflow-x: visible;
    width: 100%;
}

.elementor-element-cfdd56a {
    border: 1px solid #cccccc;
    padding-top: 40px;
    background: #fefefe !important;
    box-shadow: 1px;
}
}

@media only screen and (max-width: 1199px) {
.elementor-element-8469481,
.elementor-element-05922a3 {
    display: none;
}
}

.elementor-widget-container {
    background-color: transparent !important;
}

.elementor-tab-title  {
    background-color: #2f3842 !important;
    color: white !imporant;
}

.elementor-351 .elementor-element.elementor-element-acff7a5 .elementor-accordion .elementor-tab-title,
.elementor-tab-title.elementor-active,
.elementor-element.elementor-element-acff7a5,
.elementor-351 .elementor-element.elementor-element-acff7a5 .elementor-active a,
.elementor-351 .elementor-element.elementor-element-acff7a5  {
    color: white;
}

.home .tg-site-footer .tg-footer-widget-container {
    padding: 100px 0 25px;
    line-height: 1.2;
    text-align: center;
}

footer table {
    max-width: 50vw;
    margin: auto;
}

/*Aktywny element listy rozwijanej na stronie głównej*/
.elementor-351 .elementor-element.elementor-element-acff7a5 .elementor-accordion .elementor-tab-title.elementor-active {
    color: white;
}

@media only screen and (min-width: 1000px) {
  .elementor-element-9cdf2fb,
  .elementor-element-afbdf93,
  .elementor-element-0e935a7  {
      height: calc(10%);
      width: calc(75%);
      margin: 0 auto;
   }
}


/*Zmniejsza rozmiary tytułów kafelków nawigacyjnych*/
.elementor-351 .elementor-element.elementor-element-083aad4 .ha-card-title,
.elementor-351 .elementor-element.elementor-element-3fa410d .ha-card-title,
.elementor-351 .elementor-element.elementor-element-dac3acd .ha-card-title,
.elementor-351 .elementor-element.elementor-element-58c0f41 .ha-card-title,
.elementor-351 .elementor-element.elementor-element-8ddf2ce .ha-card-title,
.elementor-351 .elementor-element.elementor-element-9ab9d92 .ha-card-title,
.elementor-351 .elementor-element.elementor-element-de8aeff .ha-card-title,
.elementor-351 .elementor-element.elementor-element-b581f46 .ha-card-title,
.elementor-351 .elementor-element.elementor-element-482808e .ha-card-title{
    font-size: 17px;
}

.ha-card-figure img
 {
    height: 50px;
}

#content {
    padding-top: 0;
}

.ha-card-figure {
    position: relative;
    height: 50px;
}

a:hover {
    color: #346967 !important;
}

#main-header-top {
    background: url("https://www.toptal.com/designers/subtlepatterns/patterns/country-quilt-dark.png");
    display: flex;
    color: white;
    padding: 18px;
}


.topbar-part:nth-child(1) {
    width: 10%;
    text-align: left;
}

.topbar-part:nth-child(2) {
    width: 90%;
    text-align: right;
}

.topbar-part a, .topbar-part a:visited, .topbar-part a:hover {
    color: inherit !important;
    display: inline-block;
    margin-left: 15px;
    font-weight: bold;
}

#main-header {
    border-bottom: 3px solid #dadada;
    font-family: 'Calibri';
    font-size: 1.3em;
    line-height: 1.1;
    padding: 95px 20px;
    background-image: url("https://raw.githubusercontent.com/adoptuj-krysia/zslit-reforged/main/images/bg.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    text-align: center;
    text-shadow: 2px 2px 2px #212121;
}

#plugin-author-info {
    color: lightgray; font-size: 0.8em;
}

#main-header a, #main-header a:visited {
    display: inline-block;
    color: white;
    font-weight: bold;
    margin-top: 8px;
    margin-left: 4px;
    margin-right: 4px;
    padding: 6px;
    border-radius: 6px;
    border: 1px solid black;
    background: #121212;
}

#main-header a:hover {
    color: inherit !important;
}

#conowego {
    text-align: center;
}

.elementor-tab-content.elementor-clearfix {
    display: block;
}

body {
    font-family: Merriweather;
    font-size: 1.03em;
    line-height: 1.8;
    font-weight: 400;
    font-style: normal;
}

img {
    max-width: 50%;
}

.entry-title {
    font-size: 1.5rem;
}

.tg-page-header.tg-page-header--left {
    text-shadow: 2px 2px 2px #212121;
    background: url("https://raw.githubusercontent.com/adoptuj-krysia/zslit-reforged/main/images/bg.jpg");
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
}

.elementor-653 .elementor-element.elementor-element-9a234ec > .elementor-element-populated,
.elementor-653 .elementor-element.elementor-element-55e898d > .elementor-widget-container,
.elementor-653 .elementor-element.elementor-element-bf8a0a1 > .elementor-widget-container,
.elementor-653 .elementor-element.elementor-element-be66ebc > .elementor-widget-container {
    box-shadow: none;
}

.elementor-widget:not(:last-child) {
    margin-bottom: 0;
}

.elementor-element-3e1f7bf .elementor-text-editor  {
    text-align: center !important;
    padding-top: 20px;
}

.elementor-button-link.elementor-button.elementor-size-sm.elementor-animation-wobble-horizontal {
   background-color: white !important;
}

.footer-adv-overlay, .footer-adv-overlay *
.site-footer .widget-title, .site-footer *, .widget-title * {
    background: black;
    color: white;
    margin: auto;
    text-align: center;
}

#elementor-tab-title-1811 a {
    color: white;
}

.elementor-351 .elementor-element.elementor-element-acff7a5 .elementor-active a {
    color: black;
}

.elementor-accordion-icon.elementor-accordion-icon-left,
.elementor-tab-title * {
    color: white !important;
}

.gallery-icon {
   border: none;
}

img.attachment-thumbnail.size-thumbnail {
    border: 2px solid white;
}

.elementor-1126 .elementor-element.elementor-element-392c9f6:not(.elementor-motion-effects-element-type-background), .elementor-1126 .elementor-element.elementor-element-392c9f6 > .elementor-motion-effects-container > .elementor-motion-effects-layer {
    background: white;
}

.elementor-widget-image-box .elementor-image-box-content .elementor-image-box-title {
     color: black;
}

.elementor-1126 .elementor-element.elementor-element-bc4696c > .elementor-element-populated,
.elementor-1126 .elementor-element.elementor-element-f40abd1 > .elementor-element-populated,
.elementor-1126 .elementor-element.elementor-element-2f33cc3 > .elementor-element-populated {
    box-shadow: none;
}

.elementor-1126 .elementor-element.elementor-element-b21f6f2 .elementor-image-box-content .elementor-image-box-description,
.elementor-1126 .elementor-element.elementor-element-758dc62 .elementor-image-box-content .elementor-image-box-description,
.elementor-1126 .elementor-element.elementor-element-af1b63e .elementor-image-box-content .elementor-image-box-description,
.entry-content h3,
.elementor-heading-title.elementor-size-default,
.elementor-icon-list-text {
    color: #212121 !important;
}

.elementor-widget-wrap *,
elementor-element.elementor-element-7ae9749.elementor-widget.elementor-widget-heading,
.elementor-icon-list-items .elementor-icon-list-item,
.elementor-icon-list-items {
    text-align: center !important;
}

.elementor-icon-list-items, .elementor-icon-list-item {
    display: block !important;
    text-align: center !important;
    padding-left: 10px;
}

.elementor-element-0b9f85c * {
    list-style-type: none;
    text-align: right !important;
}

.elementor-element-0b9f85c li:after {
    content: ", ";
}

#content, #content > * {
    background: white;
}

@media only screen and (min-width: 1199px) {
.elementor-element-4f39574 {
    margin: 35px auto;
}
}
\n
`;

var headerbar = `
<nav>
    <div id="main-header-top">
        <div class="topbar-part">
            <a href="http://zslit-tuchola.pl">ZSLiT Reforged</a>
        </div>

        <div class="topbar-part">
            <a href="http://zslit-tuchola.pl">Start</a>
            <a href="http://zslit-tuchola.pl/blog/">Aktualności (blog)</a>
            <a href="http://zslit-tuchola.pl/archiwum/">Archiwum</a>
            <a href="http://zslit-tuchola.pl/contact/">Kontakt</a>
        </div>
    </div>
</nav>
`;

var headerbar_moodle = `
<nav>
    <div id="main-header-top">
        <div class="topbar-part">
            <a href="http://moodle.zslit-tuchola.pl/">Moodle Reforged</a>
        </div>

        <div class="topbar-part">
            <a href="http://zslit-tuchola.pl">Kliknij, by powrócić do strony szkoły</a>
        </div>
    </div>
</nav>
`;

var headerbox = `
<header id="main-header">
   <b>Zespół Szkół Licealnych i Technicznych<br/>
   imienia Ziemi Tucholskiej w Tucholi</b>
   <br/>
   czyli jak zniszczyć sobie życie w 4 lata lub mniej
   <br/><br/>

   Przydatne linki:
   <br/>
   <a href="http://zslit-tuchola.pl/dokumenty-szkolne/" title="Uwaga, jest często łamany!">Statut</a>
   <a href="https://uonetplus.vulcan.net.pl/powiattucholski/">Dziennik elektroniczny</a>
   <a href="#conowego">Co nowego?</a>

   <br/><br/>
   <span id="plugin-author-info">Wtyczka by Adoptuj Krysia Entertainment</span>
</header>
`;

var css_moodle = `
<style>
* {
    font-family: Calibri, Halvetica, Arial, sans-serif;
    font-size: 1.003em;
    line-height: 1.2;
}

.box.generalbox.categorybox,
.content {
    background: white !important;
}

.header {
    background: #dadada;
}

.block {
    border-top: none;
}

a, a:link, a:visited, .headermain {
    color: #024f42;
}

a:hover {
    color: lightblue;
}

button, input[type="submit"] {
    background: white;
    border: 1px solid black;
    padding: 1px 4px;
}
</style>`;

//Funkcja która zostanie wykonana przy załadowaniu strony
(function() {
    //Dodaje do kodu strony customowego CSS'a
    document.head.innerHTML += css;

    //Dodaje do sekcji head informacje o autorze wtyczki
    document.head.innerHTML += "<meta author=\"Adoptuj Krysia Entertainment\"/>";

    //Zmienia tytuł strony (znacznik title)
    document.title = "ZSLiT Tuchola - Reforged";

    //Kasuje z kodu HTML strony niepotrzebne elementy
    $(".elementor-element-de7cb16").remove()
    $("#site-navigation").remove();
    $(".elementor-divider-separator").remove();
    $(".footer-sidebar-1").remove();
    $(".tg-site-header-bottom").remove();
    $(".ast-small-footer.footer-sml-layout-1").remove();
    $(".ast-flex.main-header-container").parent().remove();
    $("#cookie-notice").remove();

    //Wypierdala link do Facebooka
    $(".aspexifblikebox").remove();

    //Podmienia literówki
    $(".ha-btn-text").html(function(i,el) { return el.replace("Czytaj wiecej", "Czytaj więcej"); });
    $(".ha-card-title").html(function(i,el) { return el.replace("Zdjecia szkolne", "Zdjęcia szkolne"); });
    $(".ha-card-text").html(function(i,el) { return el.replace("Skontaktuj sie", "Skontaktuj się"); });
    $(".ha-card-text").html(function(i,el) { return el.replace("Pomoc psychologiczno-pedagogiczna", "Będzie ci potrzebny"); });

    //Dodaje bibliotekę jQuery Modal
    $("head").append('<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>');
    $("head").append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css" />');

    //Naprawia link do statutu (w sumie podejrzane, że to akurat statut miał popsuty link)
    $("a[href='http://dokumenty-szkolne']").attr("href", "http://zslit-tuchola.pl/dokumenty-szkolne/");

    //Dodaje do stopki informację o autorze wtyczki
    $(".tg-site-footer-bar p").html("Autor wtyczki upiększającej: Adoptuj Krysia Entertainment");

    //Dodaje panelowi z newsami ID, tak by można było do niego utworzyć link
    $(".elementor-element-4f39574").attr("id", "conowego");

    //Zmienia obrazki w nawigacji na kolorowy pasek
    //Głownie dlatego, że te obrazki zajmowały 90% miejsca na 20-calowym ekranie
    var images = $("figure .attachment-medium_large.size-medium_large");
    for(var i = 0; i < images.length; i++) {
        images[i].setAttribute("src", "https://www.htmlcsscolor.com/preview/gallery/2F3842.png");
        images[i].setAttribute("srcset", "https://www.htmlcsscolor.com/preview/gallery/2F3842.png");
    }

    //Dodaje do kodu HTML pasek górny + ewentualną stronę startową
    var url = window.location.href.replace(/\/#.*/, "");
    if(url.endsWith("zslit-tuchola.pl") || url.endsWith("zslit-tuchola.pl/")) {
        if(!url.includes("moodle"))
            $("body").prepend(headerbar, headerbox);
        $(".elementor-element").first().remove();
    }
    else {
        if(!url.includes("moodle"))
            $("body").prepend(headerbar);
    }

    //Linijki ekskluzywne dla platformy Moodle
    if(url.includes("moodle")) {
        $("body").prepend(headerbar_moodle);
        document.title = "Moodle - Refordged";
        document.head.innerHTML += css_moodle;
        $("body").css("padding", "0");
        $("html").css("background", "white");
        $("a[title='Moodle']").text("Moodle Reforged by Adoptuj Krysia Entertainment");
    }

    //Naprawia sekcję z rekrutacją (ktoś ustawił przekierowanie HTTPS na stronie bez HTTPS)
    $("*[href^='https://zslit-tuchola.pl']").each(function() {
        $(this).attr("href", $(this).attr("href").replace("https://", "http://"));
    });
    $("*[src^='https://zslit-tuchola.pl']").each(function() {
        $(this).attr("src", $(this).attr("src").replace("https://", "http://"));
    });

    $("a.ha-btn[target='_blank']").attr("target", "_self");


    if(window.location.pathname == "/dyrekcja-i-sekretariat/" || window.location.pathname == "/dyrekcja-i-sekretariat") {
        $("h4.elementor-heading-title.elementor-size-default").first().css("text-align", "left");
        $("h4.elementor-heading-title.elementor-size-default").first().next().css("text-align", "right");

        var dokumenty = $("ul.elementor-icon-list-items .elementor-icon-list-item a .elementor-icon-list-text");
        for(var ii = 0; ii < dokumenty.length; ii++) {
            $(dokumenty.get(ii)).html($(dokumenty.get(ii)).html() + "<br/>");
        }

    }

    $("section.elementor-element-7b22ded").css("background", "#fefefe");
    $("section.elementor-element-7b22ded").css("border", "1px solid #cccccc");
    $("section.elementor-element-7b22ded *").css("background", "#fefefe");
    $("section.elementor-element-7b22ded *").css("box-shadow", "none");

    if($(".nav-next a").html().includes("Next"))
        $(".nav-next").html($(".nav-next").html().replace("Next", "Następny"));

    if($(".nav-previous a").html().includes("Previous"))
        $(".nav-previous").html($(".nav-previous").html().replace("Previous", "Poprzedni"));
})();