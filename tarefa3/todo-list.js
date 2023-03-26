$(document).ready(function() {
	var taskList = $('#task-list');

	$('#task-form').submit(function(e) {
	  e.preventDefault();
	  var taskInput = $('#task');
	  var taskText = taskInput.val();
	  if (taskText.trim().length === 0) {
		return;
	  }
	  var taskItem = $('<li class="list-group-item"><button class="btn btn-success btn-xs pull-right">X</button>   ' + taskText + '</li>');
	  taskList.append(taskItem);
	  taskInput.val('');
	});

	taskList.on('click', 'button', function() {
	  $(this).parent().remove();
	});
  });