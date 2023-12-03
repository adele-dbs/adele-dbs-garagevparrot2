jQuery(document).ready(() => {
  //pour vérifier si JQuery focntionne bien : 
  alert('jQuery est inclus !')
  //$('#buttonaddstaffform').css('color', 'blue')
  //$('#buttonAddStaff, #buttonAddService').css('color', 'blue')
  //$('form').remove() //attention supprime tous les formulaire : même les boutons update et delete
  
  $('#service-form').css('display', 'none')

  $('#buttonaddserviceform').click(function() {
    $('#service-form').css('display', 'inline')
  })

//ne fonctione pas : voir avec Ajax
  $('#buttondisplayupdateserviceform').click(function() {
    

    $('#buttonaddserviceform').trigger('click') 
  })

  

})


 