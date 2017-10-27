e = document;

function importantize() {
	var input = e.getElementById("input_css");
	var output = e.getElementById("output_css");
	
	data = input.value;
	
	console.log(data);
	
	output.value = data.replace(new RegExp(";", "g"), " !important;");
}

importantize();