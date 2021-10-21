let links = document.querySelectorAll('.aaCh');
function go() {
	links.forEach(abs => abs.classList.remove('radioActive'));
	this.classList.add('radioActive');
}



links.forEach(abs => abs.addEventListener('click', go));

let panel = document.querySelector('.panel');
let burger = document.querySelector('.burger'); 
let close = document.querySelector('.close'); 



burger.addEventListener('click', ()=>{
	panel.classList.add('activePanel');
	})



close.addEventListener('click', ()=>{
	panel.classList.remove('activePanel');
	})


	let eye = document.querySelector('.eye');
	let faEye = document.querySelector('.fa-eye-slash');
	let password = document.querySelector('.password');


	eye.addEventListener('click', ()=>{
		if (password.type === "password") {
			password.type = "text";
			faEye.classList.add('fa-eye')
			faEye.classList.remove('fa-eye-slash')


		  } else {
			password.type = "password";
			faEye.classList.remove('fa-eye')
			faEye.classList.add('fa-eye-slash')
		  }
	})


	let input1 = document.querySelector('.ffInput1');
	let error1 = document.querySelector('.error1');
	let label1 = document.querySelector('.inLabe1');


	let input2 = document.querySelector('.ffInput2');
	let error2 = document.querySelector('.error2');
	let label2 = document.querySelector('.inLabe2');

	
	let input3 = document.querySelector('.ffInput3');
	let error3 = document.querySelector('.error3');
	let label3 = document.querySelector('.inLabe3');
	let actualInput3 = document.querySelector('.actualInput3');




	let form = document.querySelector('.form');



	form.addEventListener('submit', (e) =>{
		e.preventDefault();

		if(actualInput3.value === ""){
			error3.classList.add('showerror')
			input3.style.marginBottom = '0px';
			input3.style.border= '2px solid red'
			label3.classList.add('colorRed');
			eye.classList.add('lefborderEye')

			}

            if(input1.value === ""){
			error1.classList.add('showerror')
			input1.style.marginBottom = '0px';
			input1.style.border= '2px solid red'
			label1.classList.add('colorRed');
			}





            if(input2.value === ""){
				error2.classList.add('showerror')
				input2.style.marginBottom = '0px';
			    input2.style.border= '2px solid red'
				label2.classList.add('colorRed');
				}


	})

	