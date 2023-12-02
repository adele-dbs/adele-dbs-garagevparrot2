jQuery(document).ready(() => {
  //pour vérifier si JQuery focntionne bien : 
  //alert('jQuery est inclus !')
})

$('#contentJquery p').html('<b>Ajoutons un filtre</b>')
$('#contentJquery p').css('color', 'red') 
$('#contentJquery p').click(function() {
  alert('Clique sur le paragraphe')
})