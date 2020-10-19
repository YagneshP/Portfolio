$(document).ready(function () {

    $(".menu-toggler").on("click", function () {
        $(this).toggleClass("open");
        $("body").toggleClass("openBody");
        $(".top-nav").toggleClass("open");
    });

    $(".top-nav .nav-link").on("click", function () {
        $(".menu-toggler").removeClass("open");
        $(".top-nav").removeClass("open");
        $("body").removeClass("openBody");
    });
    $("nav a[href*='#']").on("click", function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 100
        }, 2000)
    })
    $("#up").on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 2000)
    })
    AOS.init({
        easing: "ease",
        duration: 1800,
        once: true
    })
})
$(window).on("load", function () {
    init();
})
const TypeWriter = function (txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}
TypeWriter.prototype.type = function () {
    const current = this.wordIndex % this.words.length;
    const fulltxt = this.words[current];
    if (this.isDeleting) {
        this.txt = fulltxt.substring(0, this.txt.length - 1)

    } else {
        this.txt = fulltxt.substring(0, this.txt.length + 1)

    }
    // $(this.txtElement).after(`${this.text}`)
    $(this.txtElement).html(`<span class="txt">${this.txt}</span>`);
    let typeSpeed = 300;
    if (this.isDeleting) {
        typeSpeed /= 2;
    }
    if (!this.isDeleting && this.txt === fulltxt) {
        typeSpeed = this.wait;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed)
}
function init() {
    const txtElement = $(".txt-type");
    // const words = JSON.parse(txtElement.getAttribute("data-words"));// 
    const words = txtElement.data("words")
    const wait = txtElement.data("wait");
    // init typewriter
    new TypeWriter(txtElement, words, wait);
}

