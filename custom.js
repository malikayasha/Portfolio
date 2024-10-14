
//Google Sheet connect code
var scriptURL = "https://script.google.com/macros/s/AKfycby0VR11ejzv1fgyEMILs4J5ReQ_mvOyvgO0PW86HIehlYli1OxpUAkb0LqW8-3FqZ2S/exec";
var form = document.forms['google-sheet'];
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
  .catch(error => console.error('Error!', error.message))
});
//scroll to top
$("#top-button").click(
    function(){
        $("html, body").animate({scrollTop: 1000}, );
    }
);
