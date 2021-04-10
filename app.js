const correctAnswer = ['A' ,'A' ,'B' ,'A' ,'B'];
const form = document.querySelector('.quiz-form');
const result =document.querySelector('.result');

form.addEventListener('submit',e =>{
    e.preventDefault();
    let score = 0;
    const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    userAnswer.forEach((answer,index)=>{
        if(answer === correctAnswer[index]){
            score += 20;
        }
    });
     
    //Displaying results
    scrollTo(0,0); // when we click submit it automatically gets to the top 
    //result.textContent = `You have scored ${score}%`;

    let output = 0;
    const timer = setInterval(() => {
        result.textContent = `You have scored ${output}%`;
        if(output === score){
            clearInterval(timer);
        }else{
            output++;
        }
    },10);
});

// window object

/*
setTimeout( ()=>{
alert('hello ninjas');
},3000)
*/