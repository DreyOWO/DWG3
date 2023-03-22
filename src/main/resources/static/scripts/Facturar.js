
try{
    
    
    var dataSet = [
        { Cantidad: 1, Descripcion: "Arroz Blanco", PrecioUnitario: 100, PrecioConImpuesto: 113, Impuesto: 13, TotalFinal: 113 },
//        { Cantidad: 1, Descripcion: "Arroz Blanco", PrecioUnitario: 2000, PrecioConImpuesto: 20000, Impuesto: 13, TotalFinal: 22600 },
//        { Cantidad: 10, Descripcion: "Arroz Blanco", PrecioUnitario: 2000, PrecioConImpuesto: 20000, Impuesto: 2600, TotalFinal: 22600 },
//        { Cantidad: 10, Descripcion: "Arroz Blanco", PrecioUnitario: 2000, PrecioConImpuesto: 20000, Impuesto: 2600, TotalFinal: 22600 },
//        { Cantidad: 10, Descripcion: "Arroz Blanco", PrecioUnitario: 2000, PrecioConImpuesto: 20000, Impuesto: 2600, TotalFinal: 22600 },
//        { Cantidad: 10, Descripcion: "Arroz Blanco", PrecioUnitario: 2000, PrecioConImpuesto: 20000, Impuesto: 2600, TotalFinal: 22600 },
//        { Cantidad: 10, Descripcion: "Arroz Blanco", PrecioUnitario: 2000, PrecioConImpuesto: 20000, Impuesto: 2600, TotalFinal: 22600 },
//        { Cantidad: 10, Descripcion: "Arroz Blanco", PrecioUnitario: 2000, PrecioConImpuesto: 20000, Impuesto: 2600, TotalFinal: 22600 },
//        { Cantidad: 10, Descripcion: "Arroz Blanco", PrecioUnitario: 2000, PrecioConImpuesto: 20000, Impuesto: 2600, TotalFinal: 22600 },
//        { Cantidad: 10, Descripcion: "Arroz Blanco", PrecioUnitario: 2000, PrecioConImpuesto: 20000, Impuesto: 2600, TotalFinal: 22600 },
//        { Cantidad: 10, Descripcion: "Arroz Blanco", PrecioUnitario: 2000, PrecioConImpuesto: 20000, Impuesto: 2600, TotalFinal: 22600 },
//        { Cantidad: 10, Descripcion: "Arroz Blanco", PrecioUnitario: 2000, PrecioConImpuesto: 20000, Impuesto: 2600, TotalFinal: 22600 },
//        { Cantidad: 10, Descripcion: "Arroz Blanco", PrecioUnitario: 2000, PrecioConImpuesto: 20000, Impuesto: 2600, TotalFinal: 22600 },
//        { Cantidad: 10, Descripcion: "Arroz Blanco", PrecioUnitario: 2000, PrecioConImpuesto: 20000, Impuesto: 2600, TotalFinal: 22600 },
//        { Cantidad: 10, Descripcion: "Arroz Blanco", PrecioUnitario: 2000, PrecioConImpuesto: 20000, Impuesto: 2600, TotalFinal: 22600 },
//        { Cantidad: 10, Descripcion: "Arroz Blanco", PrecioUnitario: 2000, PrecioConImpuesto: 20000, Impuesto: 2600, TotalFinal: 22600 },
//        { Cantidad: 10, Descripcion: "Arroz Blanco", PrecioUnitario: 2000, PrecioConImpuesto: 20000, Impuesto: 2600, TotalFinal: 22600 },
//        { Cantidad: 10, Descripcion: "Arroz Blanco", PrecioUnitario: 2000, PrecioConImpuesto: 20000, Impuesto: 2600, TotalFinal: 22600 },
//        { Cantidad: 10, Descripcion: "Arroz Blanco", PrecioUnitario: 2000, PrecioConImpuesto: 20000, Impuesto: 2600, TotalFinal: 22600 },
//        { Cantidad: 10, Descripcion: "Arroz Blanco", PrecioUnitario: 2000, PrecioConImpuesto: 20000, Impuesto: 2600, TotalFinal: 22600 },
//        { Cantidad: 10, Descripcion: "Arroz Blanco", PrecioUnitario: 2000, PrecioConImpuesto: 20000, Impuesto: 2600, TotalFinal: 22600 },
//        { Cantidad: 10, Descripcion: "Arroz Blanco", PrecioUnitario: 2000, PrecioConImpuesto: 20000, Impuesto: 2600, TotalFinal: 22600 },
//        { Cantidad: 10, Descripcion: "Arroz Blanco", PrecioUnitario: 2000, PrecioConImpuesto: 20000, Impuesto: 2600, TotalFinal: 22600 },
//        { Cantidad: 10, Descripcion: "Arroz Blanco", PrecioUnitario: 2000, PrecioConImpuesto: 20000, Impuesto: 2600, TotalFinal: 22600 },
//        { Cantidad: 10, Descripcion: "Arroz Blanco", PrecioUnitario: 2000, PrecioConImpuesto: 20000, Impuesto: 2600, TotalFinal: 22600 },
//        { Cantidad: 10, Descripcion: "Arroz Blanco", PrecioUnitario: 2000, PrecioConImpuesto: 20000, Impuesto: 2600, TotalFinal: 22600 },
//        
    ];
    var table;
    $(document).ready(function(){
        $("#divUsaCredito").hide();
        DatatableFacturar();
        
         $('.catDetallesFactura').select2({
            placeholder: '--Seleccione--',
            width: '100%',
            allowClear: true,
            dropdownAutoWidth: true
        });
        
        
        
        
        
        
    });
    
   
    
    
    function DatatableFacturar() {
        $("#dtDetalles").DataTable().destroy();

        table = $("#dtDetalles").DataTable({
            stateSave: true,
            info: "",
            "language": {
                "url": "//cdn.datatables.net/plug-ins/1.10.19/i18n/Spanish.json",
                
            },
            "scrollY": '270px',
            "scrollCollapse": true,
            "processing": true,
            "ordering": true,
            "paging": false,
            "searching": false,
            "pageLength": 10,
            "autoWidth": true,
            "deferRender": true,
            "order": [[1, "asc"], [2, 'desc']],
            "data": dataSet,
            "columns": [
                 {
                     data: "Cantidad",
                    "orderable": false,
                    render: function (data, type, row) {
                        let jsonRow = JSON.stringify(row);
                        let ipt = '<input class="form-control cantidad-input" value ='+ row.Cantidad +'>' 
                        return ipt;
                    }
                },
                
                {
                    data:"Descripcion",
                    "orderable": false,
                    render: function (data, type, row) {
                        let ipt = '<input class="form-control" value ='+ row.Descripcion +'>' 
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
                        let ipt = '<input class="form-control impuesto-input" disabled" value ='+ row.Impuesto +'>' 
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
                        return btn;
                    }
                }

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
                    "width": "3%"
                },
                
                
            ]
            
            
           
        });

        
        
        $('#dtDetalles').on('click', '.eliminarLinea', function () {
            var row = $(this).closest('tr');
            table.row(row).remove().draw();
        });
        
        $('#dtDetalles tbody').on('keyup', '.cantidad-input', function () {
            let row = table.row($(this).closest('tr')).data();
            let cantidad = $(this).val();
            let precioUnitario = parseFloat($(this).closest('tr').find('.precio-unitario-input').val());
            let impuesto = parseFloat($(this).closest('tr').find('.impuesto-input').val());
            table.cell($(this).closest('tr'), 5).data((cantidad * (precioUnitario + impuesto)).toFixed(2));
        });
        
        $('#dtDetalles tbody').on('keyup', '.precio-unitario-input', function () {
            let row = table.row($(this).closest('tr')).data();
            let cantidad = parseFloat($(this).closest('tr').find('.cantidad-input').val()).toFixed(2);
            let precioUnitario = parseFloat($(this).val()).toFixed(2);
            let total = cantidad * precioUnitario;
            let impuesto = parseFloat($(this).closest('tr').find('.impuesto-input').val()).toFixed(2);
            let impuestoIncluido = parseFloat(precioUnitario * ((impuesto / 100) + 1)).toFixed(2);
            
            //let precioConImpuesto = parseFloat($(this).closest('tr').find('.precioConImpuesto-input').val()).toFixed(2);
            table.cell($(this).closest('tr'), 3).data(impuestoIncluido);
            table.cell($(this).closest('tr'), 4).data(precioUnitario + impuestoIncluido);
            table.cell($(this).closest('tr'), 5).data(precioUnitario + impuesto * cantidad);
        });
        
        table.columns.adjust().draw();
    
    }
    
    function ObtenerDetalles() {

        $.ajax({
            url: '/details/obtenerDetalles',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            //data: JSON.stringify(data),
            success: function (result) {
                if (result.Status == "success") {
                    $("#ddlCodigosActividadSucita").empty();
                    //Códigos de Actividad
                    $.each(result.data.CodigosActividad, function (index, value) {
                        $('.catCodigosActividad').append($("<option></option>").val(value.Codigo + " - " + value.Actividad).html(value.Codigo + " - " + value.Actividad));
                    });

                    ////Sistema Negociación
                    //$.each(result.data.Sistema, function (index, value) {
                    //    $('.catSistemaNeg').append($("<option></option>").val(value.IdSistema).html(value.Descripcion));
                    //});


                    //TipoPlan Sucita
                    $.each(result.data.TipoPlanes, function (index, value) {
                        $('.catTipoPlan').append($("<option></option>").val(value.Id + ";" + value.Documentos + ";" + value.IdDescPlanSucita).html(value.Nombre));
                        
                    });

                    CantidadDocumentosPlan();
                }
                else {
                    var mensajeConsole = result.MessageConsole === undefined ? "Sucedió un error obteniendo los catalogos" : result.MessageConsole;
                    var mensajeReq = result.MessageRequest === undefined ? "Sucedió un error obteniendo los catalogos" : result.MessageRequest;
                    console.log('Mensaje de Error: ' + mensajeConsole);
                    Helper.Notify(mensajeReq, 'error');
                }
            },
            error: function (result) {
                var mensajeConsole = result.MessageConsole === undefined ? "Sucedió un error obteniendo los catalogos" : result.MessageConsole;
                var mensajeReq = result.MessageRequest === undefined ? "Sucedió un error obteniendo los catalogos" : result.MessageRequest;
                console.log('Mensaje de Error: ' + mensajeConsole);
                Helper.Notify(mensajeReq, 'error');
            }
        });


        //ObtenerCantonesAPI
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
    
}