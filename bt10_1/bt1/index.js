function grade(){
    var name = document.getElementById('name').value
    var score = document.getElementById('score').value
    var kq = document.getElementById('kq')
    if(score >= 0 && score<= 100){
        var string_grade
        if(score > 90){
            string_grade= 'Exelence'
        }else if(score > 80){
            string_grade = 'Very Good'
        }else if(score >60){
            string_grade = 'Fair'
        }else if(score >=50){
            string_grade = 'Medium'
        }else{
            string_grade = 'Fail'
        }
        kq.innerHTML = name + "'s grade is " + string_grade
    }else{
        alert ('Score must be between 0 and 100')
    }
}

document.getElementById('kick').onclick = grade