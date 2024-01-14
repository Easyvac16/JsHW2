function task1() {
    let age = parseInt(prompt("write your age"))
    if (age >= 0 && age < 12) {
        alert("You kid")
    }
    else if (age >= 12 && age < 18) {
        alert("You teenager")
    }
    else if (age >= 18 && age < 60) {
        alert("You adult")
    }
    else if (age >= 60 && age < 100) {
        alert("You pensioner")
    }
    else if (age >= 100) {
        alert("Are you ☠️")
    }
    else {
        alert("Wrong input")
    }
}
function task2() {
    let numb = parseInt(prompt("Write number 0-9"))
    if (numb >= 9 && numb <= 0) {
        alert("wrong input")
    }
    else {
        switch (numb) {
            case 0:
                alert(")")
                break
            case 1:
                alert("!")
                break
            case 2:
                alert("@")
                break
            case 3:
                alert("#")
                break
            case 4:
                alert("$")
                break
            case 5:
                alert("%")
                break
            case 6:
                alert("^")
                break
            case 7:
                alert("&")
                break
            case 8:
                alert("*")
                break
            case 9:
                alert("(")
                break
        }
    }
}
function task3() {
    let userInput = prompt("Write 3 digits:");

    if (userInput.length == 3 && !isNaN(userInput)) {
        let digit1 = parseInt(userInput.charAt(0));
        let digit2 = parseInt(userInput.charAt(1));
        let digit3 = parseInt(userInput.charAt(2));

        if (digit1 == digit2 || digit2 == digit3 || digit1 == digit3) {
            alert("There are identical numbers in the entered number.");
        }
        else {
            alert("No odnakovi chisla")
        }
    }
    else {
        alert("Wrong input write 3 digits")
    }
}
function task4() {
    let userYear = parseInt(prompt("Write year:"));

    if (!isNaN(userYear)) {
        if ((userYear % 400 === 0) || ((userYear % 4 === 0) && (userYear % 100 !== 0))) {
            alert("The entered year is a leap year.");
        } else {
            alert("The entered year is not a leap year.");
        }
    } else {
        alert("Please enter the correct year.");
    }

}
function task5() {
    let userInput = prompt("Enter a five-digit number:");

    if (userInput.length === 5 && !isNaN(userInput)) {
        if (userInput.charAt(0) === userInput.charAt(4) && userInput.charAt(1) === userInput.charAt(3)) {
            alert("The entered number is a palindrome.");
        } else {
            alert("The entered number is not a palindrome.");
        }
    } else {
        alert("Please enter a valid five-digit number.");
    }

}
function task6() {
    let usd = parseInt(prompt("Write how much USD you need to convert"))
    let choose = prompt("write which currenсy EUR,UAH,AZN")
    if (usd >= 0) {
        switch (choose.toLowerCase()) {
            case "eur":
                alert(`Eur:${usd * 0.91}`)
                break
            case "uah":
                alert(`Uah:${usd * 37.80}`)
                break
            case "azn":
                alert(`Azn:${usd * 1.70}`)
                break
        }
    }
    else {
        alert("Wrong input")
    }
}
function task7() {
    let money = parseInt(prompt("purchase amount"))
    if (money >= 0) {
        if (money >= 200 && money < 300) {
            alert(`Purchase amount with discount ${(money / 100) * 97}`)
        }
        else if (money >= 300 && money < 500) {
            alert(`Purchase amount with discount ${(money / 100) * 95}`)
        }
        else if (money >= 500) {
            alert(`Purchase amount with discount ${(money / 100) * 93}`)
        }
        else {
            alert("You don't have discount")
        }

    }
    else {
        alert("wrong input")
    }
}
function task8() {
    let circleLength = parseFloat(prompt("Enter the length of the circle:"));
    let squarePerimeter = parseFloat(prompt("Enter the perimeter of the square:"));

    if (!isNaN(circleLength) && !isNaN(squarePerimeter) && circleLength > 0 && squarePerimeter > 0) {
        let circleRadius = circleLength / (2 * Math.PI);

        let squareSide = squarePerimeter / 4;

        if (circleRadius <= squareSide / 2) {
            alert("Such a circle can fit into a given square.");
        }
        else {
            alert("Such a circle cannot fit into a given square.");
        }
    }
    else {
        alert("Please enter correct data.");
    }

}
function task9() {
    let question1 = prompt("1. What is the capital of Ukraine? \n a) Kiyv\n b) Lviv\n c) Odessa");
    let question2 = prompt("2. How many days in a week?\n a) 5\n b) 7\n c) 10");
    let question3 = prompt("3. What is the largest planet in the solar system?\n a) Earth\n b) Jupiter\n c) Mars");

    let score = 0;

    if (question1.toLowerCase() == 'a') {
        score += 2;
    }

    if (question2.toLowerCase() == 'b') {
        score += 2;
    }

    if (question3.toLowerCase() == 'b') {
        score += 2;
    }
    alert(`Score: ${score}`);

}
function task10() {
    let day = parseInt(prompt("Write day:"));
    let month = parseInt(prompt("Write month(number):"));
    let year = parseInt(prompt("Write year:"));

    if (!isNaN(day) && !isNaN(month) && !isNaN(year) && day > 0 && month > 0 && year > 0) {
        let daysInMonth = new Date(year, month, 0).getDate();

        if (day <= daysInMonth) 
        {
            let nextDate = new Date(year, month - 1, day);
            nextDate.setDate(nextDate.getDate() + 1);

            alert(`Next date: ${nextDate.getDate()}.${nextDate.getMonth() + 1}.${nextDate.getFullYear()}`);
        } 
        else 
        {
            alert("An incorrect day of the month has been entered.");
        }
    } 
    else 
    {
        alert("Please enter correct data.");
    }

}