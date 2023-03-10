try {
    
    
    
    $(document).ready(function () {
        
        

    });
    
    
    function logOut(){
        messageAsk("Cerrar Sesión","¿Desea finalizar la sesión?","question",goHome);
    }
    
    function goHome(){
        window.location.assign("/");
    }
    
    function message(title,message,type){
          Swal.fire({
              title: title,
              text: message,
              type: type,
              icon: type,
              font:"Arial"
          });   
        }; 
    
    function messageAsk(title,message,type,callbackFunc){
        Swal.fire({
            title: title,
            text: message,
            icon: type,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK'
            }).then((result) => {
            if (result.isConfirmed) {
              callbackFunc();
            }
          })
    }    
        
   


} catch (Exception) {
    console.log("Error general de sistema");
}