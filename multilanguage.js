// RU
$(function(){
  $(".ru-lang").click(function(){
    // Navbar
    $(".navbar-nav a").eq(0).text("ОБО МНЕ");
    $(".navbar-nav a").eq(1).text("ПОРТФОЛИО");
    $(".navbar-nav a").eq(2).text("КОНТАКТ");
    $(".active-lang").text("RU");
    // Who
    $("#h3-1").text("Кто Я?");
    $("#h2-1").text("Александра Дым");
    $("#h3-2").text("Стилист по причёскам");
    // What
    $("#h3-3").text("Что Я?");
    $("#p-1").text("Много букв много букв много букв много букв много букв много букв много букв много букв много букв много букв много букв");
    $("#p-2").text("Много букв много букв много букв много букв много букв много букв много букв много букв много букв много букв много букв");
    // Portfolio
    $("#h3-4").text("Мои работы");
    // Contact
    $("#h3-5").text("Мои контакты");
  });
});
// EN
$(function(){
  $(".en-lang").click(function(){
    // Navbar
    $(".navbar-nav a").eq(0).text("ABOUT ME");
    $(".navbar-nav a").eq(1).text("PORTFOLIO");
    $(".navbar-nav a").eq(2).text("CONTACT");
    $(".active-lang").text("EN");
    // Who
    $("#h3-1").text("Who Am I?");
    $("#h2-1").text("Alexandra Dym");
    $("#h3-2").text("Hairstylist");
    // What
    $("#h3-3").text("What Am I?");
    $("#p-1").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    $("#p-2").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    // Portfolio
    $("#h3-4").text("My Works");
    // Contact
    $("#h3-5").text("Contact Me");
  });
});
// EE
$(function(){
  $(".ee-lang").click(function(){
    // Navbar
    $(".navbar-nav a").eq(0).text("MINUST");
    $(".navbar-nav a").eq(1).text("PORTFOOLIO");
    $(".navbar-nav a").eq(2).text("KONTAKT");
    $(".active-lang").text("EE");
    // Who
    $("#h3-1").text("Kes Ma Olen?");
    $("#h2-1").text("Aleksandra Dym");
    $("#h3-2").text("Juuksestilist");
    // What
    $("#h3-3").text("Mis Ma Olen?");
    $("#p-1").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    $("#p-2").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    // Portfolio
    $("#h3-4").text("Minu Teosed");
    // Contact
    $("#h3-5").text("Kontakt");
  });
});
