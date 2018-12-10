let canvas = document.querySelector("#canvas")
let ctx = canvas.getContext("2d")
let ctx1 = canvas.getContext("2d")
let ctx2 = canvas.getContext("2d")
let ctx3 = canvas.getContext("2d")

let width = 0;
let height = 0;


let ageM = $(".age")
let heighM = $(".height")
let weighM = $(".weight")
let calc = $('.calc')
let back = $(".back")
let form = $("form")
let calcingPage = $("#result")


//////////
ctx.beginPath();
ctx.arc(60, 75, 20, 0, 2 * Math.PI);
ctx.fillStyle = "gray"
ctx.fill()
ctx.stroke();
ctx.beginPath();
ctx.moveTo(80, 120)
ctx.quadraticCurveTo(30, 30, 40, 300);
ctx.lineTo(80, 300)
ctx.quadraticCurveTo(90, 290, 60, 280);
ctx.lineTo(79, 115)
ctx.lineWidth = 1;
ctx.strokeStyle = 'gray'

ctx.fillStyle = "gray"
ctx.fill()
ctx.stroke();




////////////////
ctx1.beginPath();
ctx1.arc(200, 75, 20, 0, 2 * Math.PI)
ctx1.fillStyle = "gray"
ctx1.fill()
ctx1.stroke();
ctx1.beginPath();
ctx1.moveTo(220, 120)
ctx1.quadraticCurveTo(180, 30, 180, 300);
ctx1.lineTo(200, 300)
ctx1.quadraticCurveTo(290, 290, 200, 280);
ctx1.quadraticCurveTo(240, 120, 220, 118);
ctx1.fillStyle = "gray"
ctx1.fill()
ctx1.lineWidth = 1;
ctx1.strokeStyle = 'grey'
ctx1.stroke();


////////////////////
ctx2.beginPath();
ctx2.arc(350, 75, 20, 0, 2 * Math.PI)
ctx2.fillStyle = "gray"
ctx2.fill()
ctx2.stroke();

ctx2.beginPath();
ctx2.moveTo(360, 120)
ctx2.quadraticCurveTo(330, 30, 320, 300);
ctx2.lineTo(320, 120)
ctx2.quadraticCurveTo(320, 300, 370, 280);
ctx2.quadraticCurveTo(300, 370, 380, 118);
ctx2.fillStyle = "gray"
ctx2.fill()
ctx2.lineWidth = 1;
ctx2.strokeStyle = 'grey'
ctx2.stroke();

////////////////////
ctx3.beginPath();
ctx3.arc(500, 75, 20, 0, 2 * Math.PI)
ctx3.fillStyle = "gray"
ctx3.fill()
ctx3.stroke();
ctx3.beginPath();
ctx3.moveTo(500, 120)
ctx3.quadraticCurveTo(520, 30, 560, 300);
ctx3.lineTo(500, 120)
ctx3.quadraticCurveTo(520, 550, 500, 280);
ctx3.quadraticCurveTo(520, 550, 540, 118);
ctx3.fillStyle = "gray"
ctx3.fill()
ctx3.lineWidth = 1;
ctx3.strokeStyle = 'grey'
ctx3.stroke();

/////////////////////////////////
calc.click(function (e) {
	e.preventDefault();
	form.css({
		display: "none"
	});

	calcingPage.css({
		display: "block"
	})


})


calc.click(function (e) {
	e.preventDefault();

if(weighM.val()<60){
ctx.fillStyle="green"
ctx.fill();
}

})




back.click(function (e) {
	e.preventDefault();
	form.css({
		display: "block"
	});

	calcingPage.css({
		display: "none"
	})
})