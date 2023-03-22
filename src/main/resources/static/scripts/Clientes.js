try{
    
    $(document).ready( function() {
        
    });
    
    
    function BuscarCliente(){
        if($('#txtCedulaBuscarClienteNuevo').val() == ""){
            Toast('Ingrese una identificación','warning');
        }
        else{
            let identificacion = $('#txtCedulaBuscarClienteNuevo').val();
            Toast('Buscando...','info')
            $.ajax({
                    url: 'https://api.hacienda.go.cr/fe/ae',
                    type: 'GET',
                    data: {
                            'identificacion': identificacion
                    },
                    success: function(response) {
                            Toast('Se han obtenido los datos','success');
                            
                            if(!response.situacion.estado){
                                $('#lblSituacion').removeAttr('hidden');   
                                $('#lblSituacion').text('Validar Estado')
                            }
                            else{
                                $('#lblSituacion').text(response.situacion.estado)
                                $('#lblSituacion').removeAttr('hidden');
                            }
                            
                            $("#txtNombreClienteNuevo").val(response.nombre);
                            $("#ddlTipoCedula").val(response.tipoIdentificacion);
                            $("#txtCedulaClienteNuevo").val(identificacion);
                    },
                    error: function(xhr, status, error) {
                        Toast('Ocurrió un error: ' + xhr.responseJSON.status,'error'); 
                    }
            });
        }
        
    }
    
    function TieneCreditoCliente(){
        if($("#chkTieneCredito").is(':checked')){
            $("#txtDiasCreditoClienteNuevo").attr('disabled',false);
            $("#txtLimiteCreditoClienteNuevo").attr('disabled',false);
            $("#txtDiasCreditoClienteNuevo").val();
            $("#txtLimiteCreditoClienteNuevo").val();
            
        }
        else{
            $("#txtDiasCreditoClienteNuevo").attr('disabled',true);
            $("#txtLimiteCreditoClienteNuevo").attr('disabled',true);
            $("#txtDiasCreditoClienteNuevo").val(0);
            $("#txtLimiteCreditoClienteNuevo").val(0);
        }
    }
}

catch(Exception){
    console.log("Ocurrió un error general");
}