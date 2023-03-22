try{
    var dataSet = [
        { Nombre: "Servicios Profesionales", Moneda: "Colones", Impuesto: 13, Cabys: 8399000000000, Precio: 1000},
        { Nombre: "Electricista", Moneda: "Colones", Impuesto: 13, Cabys: 8399000000000, Precio: 1000}
    
    ];

    var table;
    $(document).ready(function(){
        DatatableServicios()
    });
    
    function DatatableServicios() {
        $("#dtServicios").DataTable().destroy();

        table = $("#dtServicios").DataTable({
            stateSave: true,
            "language": {
                "url": "//cdn.datatables.net/plug-ins/1.10.19/i18n/Spanish.json",
                
            },
            "scrollY": '270px',
            "scrollCollapse": true,
            "processing": true,
            "ordering": true,
            "paging": false,
            "searching": true,
            "pageLength": 10,
            "autoWidth": true,
            "deferRender": true,
            "order": [[1, "asc"], [2, 'desc']],
            "data": dataSet,
            "columns": [
                 {
                    data: "Nombre",
                    orderable: false,
                },
                
                {
                    data: "Moneda",
                    orderable: false,
                    sercheable: false
                },
                
                {
                    data: "Impuesto",
                    orderable: false,
                    sercheable: false
                },
                
                {
                    data: "Cabys",
                    orderable: false,
                    sercheable: false
                },
                
                {
                    data: "Precio",
                    orderable: false,
                    sercheable: false
                },
                
                {
                    data: null,
                    "orderable": false,
                    render: function (data, type, row) {
                        let btn = '<button type="button" class="btn btn-outline-danger button-badge btnAcciones eliminarServicio" title="Eliminar"> <i class="fas fa-trash"></i>';
                        btn += " ";
                        btn += ' <button type="button" class="btn btn-outline-success button-badge btnAcciones editarServicio" title="Editar"> <i class="fas fa-pencil-alt"></i>'
                        
                        return btn;
                    }
                }

            ],
            
            "columnDefs": [
                {
                    "targets": [0],
                    "width": "10%"
                },
                {
                    "targets": [1],
                    "width": "2%"
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
                
                
                
            ]
            
            
           
        });

        $('#dtServicios').on('click', '.eliminarServicio', function () {
            var row = $(this).closest('tr');
            messageAsk("Eliminar Servicio","¿Desea eliminar el servicio?","question",EliminarServicio)
            function EliminarServicio(){
                table.row(row).remove().draw();
            }
        });
        
        
        table.columns.adjust().draw();
    
    }
    
    function messageAsk(title,message,type,callbackFunc){
        Swal.fire({
            title: title,
            text: message,
            icon: type,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'No',
            confirmButtonText: 'Sí'
            }).then((result) => {
            if (result.isConfirmed) {
              callbackFunc();
            }
          })
    }  
    
    
    
    
}
catch (Exception){
    console.log('Ocurrió un error general')
}