document.addEventListener('DOMContentLoaded',function(event){
	createBtns(public, classed, postTxtArr);
});

var contentC = document.getElementsByClassName('content_c');

//create div>button elements and set attribute
function createBtns(a1, a2, a3){//public array, classed array, post array, public number
	var n = a1.length;
	//create div>button elements
	for(let i=0; i<a3.length; i++){
		let d = document.createElement('div');
		if(i<n){
			d.setAttribute('class', 'bg_p');
		}else{
			if(i%2 === 0){
				d.setAttribute('class', 'bg_a');
			}else{
				d.setAttribute('class', 'bg_b');
			}
		}
		let b = document.createElement('button');
		contentC[0].appendChild(d);
		contentC[0].getElementsByTagName('div')[i].appendChild(b);
	}
	
	//set attributes for buttons
	let idTxt = 'btn';
	let btnEle = document.getElementsByTagName('button');
	let btnIds = [];
	let newClicked = [];
	for(let i=0; i<btnEle.length; i++){
		if(i<n){
			btnEle[i].innerText = a1[i];
		}else{
			btnEle[i].innerText = a2[i-n];
		}
		btnEle[i].setAttribute('title', a3[i]);
		btnEle[i].setAttribute('id', idTxt+formatNum(i, 3));
		btnEle[i].classList.add('unclicked', 'btn_clr');
		btnIds[i] = btnEle[i].getAttribute('id');
		btnEle[i].setAttribute('data-clipboard-text', a3[i]);
		newClicked[i] = false;
		btnEle[i].onclick = function(){
			let cbBtn = new ClipboardJS('#'+btnIds[i]);//clipboard.js
			newClicked[i] = true;
			if(newClicked[i]){
				btnEle[i].classList.remove('unclicked');
				btnEle[i].classList.add('clicked');
				if(i<n){
					for(let j=0; j<n; j++){
						if(j!==i){
							btnEle[j].classList.remove('clicked');
							btnEle[j].classList.add('unclicked');
						}
					}
				}else{
					for(let j=n; j<btnEle.length; j++){
						if(j!==i && j%2===i%2){
							btnEle[j].classList.remove('clicked');
							btnEle[j].classList.add('unclicked');
						}else{
							continue;
						}
					}
				}
			}
		};
	}
}
//get formated number string
function formatNum(n, d){
	let oStr = '';
	let l = d-(n+1).toString().length;
	for(let i=0; i<l; i++){
		oStr += '0';
	}
	return oStr+(n+1).toString();
}