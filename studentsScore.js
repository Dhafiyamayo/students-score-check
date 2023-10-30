//ASSIGNMENT
/* Buatlah sebuah code untuk menampilkan nilai angka siswa dan mengecek apakah nilai tersebut genap (Even) atau ganjil (Odd). 

85 - 100 = A
75 - 84 = B
60 - 74 = C
0 - 59 = D

contoh: 
Nilai Siswa: 80 

Output: 
Nilai angka: 80 
Nilai huruf: B
Bilangan Genap */

document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("scoreForm");
    

    function processForm(event) {
        event.preventDefault();

        const score = parseFloat(document.getElementById("scoreNumber").value);


        const grade = scoreToGrade(score);
        const isGenap = bilangan(score);

        const allResults = "Score: " + score + "<br>" + "Grade: " + grade + "<br>" + "Number: " + (isGenap ? "Even" : "Odd");

        gradeResults.innerHTML = allResults;

    }

    form.addEventListener("submit", processForm);

    function scoreToGrade(score) {
        if (score >= 85 && score <= 100) {
            return "A 🤩🔥";
        } else if (score >= 75 && score <= 84) {
            return "B 🥳";
        } else if (score >= 60 && score <= 74) {
            return "C 😅";
        } else if (score >= 0 && score <=59) {
            return "D 💀";
        } else {
            return "Invalid Score 👊🏼";
        }
      }

      function bilangan(score) {
        return score % 2 === 0;
    }
    
});



