
try{

    var table;
    $(document).ready(function(){
        $("#divUsaCredito").hide();
        DatatableFacturar();
        
        
    });
    
   
    
    
    function DatatableFacturar() {
        $("#dtDetalles").DataTable().destroy();

        table = $("#dtDetalles").DataTable({
            stateSave: true,
            info: "",
            "language": {
                "url": "//cdn.datatables.net/plug-ins/1.10.19/i18n/Spanish.json",
                
            },
            "scrollY": '100%',
            "scrollCollapse": true,
            "processing": true,
            "ordering": false,
            "paging": false,
            "searching": false,
            "autoWidth": true,
            "deferRender": true,
            "order": [[1, "asc"], [2, 'desc']],
            
            "columns": [
                 {
                     data: "Cantidad",
                    "orderable": false,
                    render: function (data, type, row) {
                        let ipt = '<input class="form-control cantidad-input" value ='+ row.Cantidad +'>' 
                        return ipt;
                    }
                },
                
                {
                    data:"Descripcion",
                    "orderable": false,
                    render: function (data, type, row) {
                        
                        let ipt = '<input class="form-control" value ='+ row.Descripcion.replace(/-/g, " ") +'>' 
                        return ipt;
                    }
                },
                
                {
                    data:"PrecioUnitario",
                    "orderable": false,
                    render: function (data, type, row) {
                        let ipt = '<input class="form-control precio-unitario-input" value ='+ row.PrecioUnitario +'>' 
                        return ipt;
                    }
                },
                
                {
                    data:"Impuesto",
                    render: function (data, type, row) {
                        let ipt = '<input class="form-control impuesto-input" disabled value ='+ row.Impuesto +'>' 
                        return ipt;
                    }
                },
                
                {
                    data:"PrecioConImpuesto",
                    render: function (data, type, row) {
                        let ipt = '<input class="form-control precioConImpuesto-input" value ='+ row.PrecioConImpuesto +'>' 
                        return ipt;
                    }
                },
                
                {
                    data: "TotalFinal",
                    render: function (data, type, row) {
                        let ipt = '<input class="form-control total-final-input" value ='+ row.TotalFinal +'>' 
                        return ipt;
                    }
                },
                
                {
                    data: null,
                    "orderable": false,
                    render: function (data, type, row) {
                        let btn = '<button type="button" class="btn btn-outline-danger button-badge eliminarLinea" title="Eliminar Línea"> <i class="fas fa-trash"></i>';
                        btn += '<label class="lblCabys" hidden>' + row.Cabys + '</label>'
                        return btn;
                    }
                },
                {
                    data: null,
                    render: function (data, type, row) {
                        let ipt = '<input style="display:none" class="form-control impuestoValor" value ='+ (row.Impuesto) / 100  +'>' 
                        return ipt;
                    }
                },
                {
                    data: null,
                    render: function (data, type, row) {
                        let ipt = '<input style="display:none" class="form-control codigoCabys" value ='+ row.Cabys +'>' 
                        return ipt;
                    }
                },
                

            ],
            
            "columnDefs": [
                {
                    "targets": [0],
                    "width": "2%"
                },
                {
                    "targets": [1],
                    "width": "10%"
                },
                {
                    "targets": [2],
                    "width": "4%"
                },
                {
                    "targets": [3],
                    "width": "4%"
                },
                {
                    "targets": [4],
                    "width": "4%"
                },
                {
                    "targets": [5],
                    "width": "4%"
                },
                {
                    "targets": [6],
                    "width": "3%",
                    
                },
                {
                    targets: [7], // Índice de la columna a ocultar
                    visible: false,
                    class: "hide_me"
                    
                },
                {
                    targets: [8],
                    visible: false,
                    class: "hide_me"
                    
                },
                
                
                
            ],
            destroy:true
            
            
           
        });

        
        
        $('#dtDetalles').on('click', '.eliminarLinea', function () {
            var row = $(this).closest('tr');
            table.row(row).remove().draw();
        });
        
        $('#dtDetalles tbody').on('keyup', '.cantidad-input', function () {
            let cantidad = $(this).val();
            let precioUnitario = Number($(this).closest('tr').find('.precio-unitario-input').val());
            let impuesto = $(this).closest('tr').find('.impuesto-input').val();
            let precioConImp = $(this).closest('tr').find('.precioConImpuesto-input').val();
            let total = $(this).closest('tr').find('.total-final-input').val();
            let impuestoValor = Number($(this).closest('tr').find('.impuestoValor').val());
            
            if (cantidad > 0 || cantidad == ""){
                let calcPrecioXCant = Number(precioUnitario * cantidad);
                let calcImp = calcPrecioXCant * impuestoValor;
                let calcPrecioFinal = calcPrecioXCant + Number(calcImp);
                let calcImpUnitario = precioUnitario * Number(impuestoValor);
                let impUnitario = precioUnitario + Number(calcImpUnitario);
                
                $(this).closest('tr').find('.precioConImpuesto-input').val(impUnitario);
                $(this).closest('tr').find('.impuesto-input').val(calcImpUnitario);
                $(this).closest('tr').find('.total-final-input').val(calcPrecioFinal);
                
            }
            else{
                $(this).closest('tr').find('.total-final-input').val(0);  
            }
        }); 
        
        $('#dtDetalles tbody').on('keyup', '.precio-unitario-input', function () {
            
            let cantidad = $(this).closest('tr').find('.cantidad-input').val();
            let precioUnitario = Number($(this).val());
            let impuesto = $(this).closest('tr').find('.impuesto-input').val();
            let precioConImp = $(this).closest('tr').find('.precioConImpuesto-input').val();
            let total = $(this).closest('tr').find('.total-final-input').val();
            let impuestoValor = Number($(this).closest('tr').find('.impuestoValor').val());
            
            if (cantidad > 0 || cantidad == ""){
                let calcPrecioXCant = Number(precioUnitario * cantidad);
                let calcImp = calcPrecioXCant * impuestoValor;
                let calcPrecioFinal = calcPrecioXCant + Number(calcImp);
                let calcImpUnitario = precioUnitario * Number(impuestoValor);
                let impUnitario = precioUnitario + Number(calcImpUnitario);
                
                $(this).closest('tr').find('.precioConImpuesto-input').val(impUnitario);
                $(this).closest('tr').find('.impuesto-input').val(calcImpUnitario);
                $(this).closest('tr').find('.total-final-input').val(calcPrecioFinal);
            }
            else{
                $(this).closest('tr').find('.total-final-input').val(0);  
            }
        });
        
        table.columns.adjust();
        
        
    
    }
    
    
    function AgregarLinea(){
        let lista = $("#ddlDetalles").val()
        if (!lista){
            Toast("Ingrese un detalle","warning")
        }
        else{
            let arrDetalles = lista.split(";");
            let desc = arrDetalles[0].toString();
            let precioUnitario = parseFloat(arrDetalles[1]);
            let impuesto = parseInt(arrDetalles[2]);
            let precioConImpuesto = precioUnitario + (precioUnitario * (impuesto/100));
            let cantidad = 1;


            let obj = { 
                Cantidad: cantidad, 
                Descripcion: desc, 
                PrecioUnitario: precioUnitario, 
                PrecioConImpuesto: precioConImpuesto, 
                Impuesto: impuesto, 
                TotalFinal: precioConImpuesto * cantidad,
                Cabys: arrDetalles[4]
            }


             table.row.add(obj);

             table.draw();
        }
        
        
    }
    
    function ObtenerDetalles() {
        let idMoneda = $("#ddlMoneda").val();
        
        if(idMoneda == ""){
            $("#ddlDetalles").empty();
            
        }
        else{
            
            let url = '/facturacion/detalles';
            let params = {
                "idMoneda": idMoneda
            }
            
            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'json',
                data: params,
                contentType: 'application/json; charset=utf-8',
                success: function(data){
                    $("#ddlDetalles").empty();
                    
                    $.each(data, function(index, value) {
                        $('.catDetallesFactura').append($("<option></option>").val(value.nombre.replace(/ /g, "-") + ";" + value.precio + ";" + value.porcentajeImp + ";" + value.idMoneda + ";"+ value.cabys + ";" + value.tipo_detalle).html(value.nombre));
                    });

                },

                error: function (xhr,status,error) {
                    Toast('Ocurrió un error obteniendo los detalles: ','error');
                }
            });
        }
    }
    
    function UsaCredito(){
        if($("#chkUsaCredito").is(':checked')){
            $("#divUsaCredito").show();
        }
        else{
            $("#divUsaCredito").hide();
        }
    }
    
    function ModalNuevoCliente(){
        $("#modalClienteAgregar").toggle();
    }
    
}
catch(Exception){
    Toast('Ocurrió un error general' ,'error');
}