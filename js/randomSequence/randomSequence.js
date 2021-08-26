function randomSequence(number){
	if(/\d/g.test(number)!=true || number==0){
		return '';
	}
	var newSequence = [];
	for(var i=0; i<number; i++){
		newSequence[i] = Math.ceil(number*(Math.random()));
		while(!unique(newSequence)){
			newSequence[i] = Math.ceil(number*(Math.random()));
		}
	}
	return newSequence;
}
function unique(array){
	var base = array[array.length-1];
	var newArray = [];
	for(var i=0; i<array.length-1; i++){
		newArray[i] = array[i];
	}
	for(var i=0; i<newArray.length; i++){
		if(base == newArray[i]){
			return false;
		}
	}
	return true;
}

randomSequence(13);