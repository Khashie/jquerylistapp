$(document).ready(function(){


	$('.addbutton').click(function(){
		var toAdd = $('input[name=taskinput]').val();
		$('#todolist').append("<li class='tasks'>" + toAdd + '</li>');
		$('input').val('');

	})



	$(document).on('click','.tasks',function(){
        var finished = $(this).text();
        $(this).remove();
        $('#donelist').append("<li class='finishedtasks'>" + finished + '</li>');
    })


	$(document).on('click','.finishedtasks',function(){
		
		if (confirm("Delete?") == true) {
			$(this).remove();
		}

	})





















});