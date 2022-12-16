  let answers = [ 'Так','Ні','Можливо','Напевно так',
'Напевно ні','Дуже сумніваюсь','Безсумнівно','Краще спитай ще раз','Моя відповідь так',
'Моя відповідь ні','Спитай це завтра','Не можу дати чіткої віжповіді' ];
let text = document.getElementsByTagName('body')[0];
  text.innerHTML += `<input type="text" ><br>` 
alert("Введіть свій запит та натисніть Enter");  
   text.addEventListener("keypress", e =>{
    if(e.key==="Enter"){
      let answer=answers[Math.floor(Math.random() * answers.length)];
     alert(answer)
    }
  })