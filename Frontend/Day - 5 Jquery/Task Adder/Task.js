 $(document).ready(function(){
            $("#add").click(function(){
                let task = $("#myInput").val();
                if(task !== ""){
                    $("#list").append("<li>" + task + "</li>");
                    $("#myInput").val("");
                }
            });
            
        });

