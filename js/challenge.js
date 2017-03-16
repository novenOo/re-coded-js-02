// Code your solution here.
var object={
	decode: function(){
		body =$('body').html().match(/(<span)\s(hidden="">)[a-zA-Z\s\D](<\/span>)/g);
		res = body.join('').replace(/hidden=""/g,'')
		text= $('body').html(res);
	 // nodeArray=Array.from(nodelist)
	 // nodeArray.forEach(function(node){
	 // 	console.log(node)
	 // })
	},
	encode: function(string){
		scramble = " ";
		var array = Array.from(string);
		array.forEach(function(element){																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																							
			scramble += `<span hidden>${element}</span>`;

			var rand = (Math.floor(Math.random() * 100) + 25);
			for (var i = 0; i <= rand; i++) {
				var randCharCode = Math.floor(Math.random() * 94) + 33;
				var randChar = String.fromCharCode(randCharCode);
				scramble += `<span>${randChar}</span>`;
			}
		})  
		$('body').html(scramble);

	}
	// 	var scrambledMessage = "";

	// 	for (var i = 0, l = string.length; i < l; i++) {
	// 		var char = string[i];
	// 		scrambledMessage += `<span hidden>${char}</span>`;
	// 		for (var i = 0, rand = (Math.floor(Math.random() * 50) + 10); i < rand; i++) {
	// 			var randCharCode = Math.floor(Math.random() * 94) + 33;
	// 			var randChar = String.fromCharCode(randCharCode);
	// 			scrambledMessage += `<span>${randChar}</span>`;
	// 		}
	// 	}

	// 	document.body.innerHTML = scrambledMessage;

	// }
}
$(function () {
	console.log("for encode use `object.encode('your message')`and `object.decode($('body').html())` to decode.")
	object.decode()
})