jQuery(document).ready(() => {
  //pour vérifier si JQuery focntionne bien : 
    //alert('jQuery est inclus !')

    var $input=$('input[name=rech]');
    var critere=$.trim($input.val());
    $input.keyup(function(){
        id=$.trim($input.val());
        if(id!=''){
            /*$.get('models/ajaxSearch.php?id='+id,function(retour){
                $('#resultat').html(retour).fadeIn();
            });*/
            $.ajax({
                url:'models/ajaxSearch.php',
                data:'id='+id,
                success: function(retour){
                    $('#resultat').html(retour).fadeIn();
                }
            });
        }else $('#resultat').empty().fadeOut();
    });
});

