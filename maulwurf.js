



function go(){
	
	var sMap = document.getElementById('i').value;
	console.log(sMap);
	
	let x = 0;
	var num1 = '';
	var num2 = '';
	// erste Zahl der Karte
	while(sMap[x] != ' '){
		num1 += sMap[x++]
	}
	
	// zweite Zahl der Karte
	x++;
	while(sMap[x] != ' '){
		num2 += sMap[x++]
	}
	
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	
	
	
	// Konvertieren der Karte von String zu Array mit 'X' und " "
	var map = [];
	
	for(let z = 0; z < num2; z++) {
		map[z] = [];
		for(let y = 0; y <= num1; y++ ){
			map[z][y] = sMap[x++];
			
		}
	}
	
	
	// Konvertieren des Arrays von String zu Zahlen 1 und 0
	for(let z = 0; z < num2; z++) {
		//map[z] = [];
		for(let y = 0; y <= num1; y++ ){
			if(map[z][y] == "X"){
				map[z][y] = 1;
			}else{
				map[z][y] = 0;
				
			}
			
			
		}
	}
	
	
	console.log(map);
	countM(map);
	
}


function countM(arr){
	
	
	var anzahl = 0;
	
	//Alle Felder werden Überprüft
	for(x in arr){
		x = parseInt(x);
		for(y in arr[x]){
			y = parseInt(y);
			
			
			// Bedingung für ein Baulwurfsbau
			if(x < arr.length-3 && y < arr[x].length-2){
				if(arr[x][y] == 1){
					if(arr[x][y+1] != 0 && arr[x][y+2] != 0 && arr[x+1][y+2] != 0 && arr[x+2][y+2] != 0 && arr[x+3][y+2] != 0 && arr[x+3][y+1] != 0 && arr[x+3][y] != 0 && arr[x+2][y] != 0 && arr[x+1][y] != 0 ){
						console.log('lol');
						anzahl++;
					}
				}else{
					
					console.log('xD');
					
				}
				
			}
			
			
			
		}
	}
	
	console.log(anzahl);
	document.getElementById('ergebniss').innerHTML = 'Es gibt ' + anzahl + ' Baulwurfsbaue!';
	
}

