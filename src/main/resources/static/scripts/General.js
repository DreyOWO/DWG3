try{
    
    $(document).ready(function () {
        
        console.log("Is Ready");
        initCalendar();
       
    });
    
    function initCalendar(){
        var calendarEl = $('#calendar')[0];
        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            locale: 'es',
            initialDate: '2023-02-07',
            
            
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            events: [
                {
                    title: 'All Day Event',
                    start: '2023-02-01'
                },
                {
                    title: 'Long Event',
                    start: '2023-02-07',
                    end: '2023-02-10'
                },
                {
                    groupId: '999',
                    title: 'Repeating Event',
                    start: '2023-02-09T16:00:00'
                },
                {
                    groupId: '999',
                    title: 'Repeating Event',
                    start: '2023-02-16T16:00:00'
                },
                {
                    title: 'Conference',
                    start: '2023-02-11',
                    end: '2023-02-13'
                },
                {
                    title: 'Meeting',
                    start: '2023-02-12T10:30:00',
                    end: '2023-02-12T12:30:00'
                },
                {
                    title: 'Lunch',
                    start: '2023-02-12T12:00:00'
                },
                {
                    title: 'Meeting',
                    start: '2023-02-12T14:30:00'
                },
                {
                    title: 'Birthday Party',
                    start: '2023-02-13T07:00:00'
                },
                {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: '2023-02-28'
                }
            ]
        });

        calendar.render();
        
    }

    function goCalendar(){
        window.location.assign("/calendar");
    }
    
    function goHome(){
        window.location.assign("/home");
    }
    
    function goBilling(){
        window.location.assign("/facturar");
    }
    
    function close(){
        window.location.assign("/");
    }
    
    function closeSession(){
        messageAsk("Cerrar Sesión","¿Está seguro que desea cerrar la sesión?","question",close)
        
    }
    
    
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
    
        
        
    }

catch(Excepcion){
    console.log("Ocurrió un error general");
}