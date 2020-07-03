var refresh = "Back To Home Page Refresh Browser."
// Chapter#21 to 25
// Q1
function c21_25ans1() {
    var fname = prompt("Enter First Name:");
    var lname = prompt("Enter Last Name:");
    var fullname = fname + lname;
    alert("Welcome " + fullname);
}
// Q2
function c21_25ans2() {
    var fmob = prompt("Enter Your Favourite Mobile:");
    var fmob_len = fmob.length;
    document.write("My Favourite Phone Is: " + fmob + "<br>");
    document.write("Length Of String: " + fmob_len + "<br>");
    document.write(refresh);
}
// Q3
function c21_25ans3() {
    var letter = "Pakistani";
    var letter_ind = letter.indexOf("n");
    document.write("String: " + letter + "<br>");
    document.write("Index Of 'n': " + letter_ind + "<br>");
    document.write(refresh);
}
// Q4
function c21_25ans4() {
    var letter = "Hello World";
    var letter_ind = letter.lastIndexOf("l");
    document.write("String: " + letter + "<br>");
    document.write("Last Index Of 'l': " + letter_ind + "<br>");
    document.write(refresh);
}
// Q5
function c21_25ans5() {
    var letter = "Pakistani";
    var letter_ind = letter.charAt(3);
    document.write("String: " + letter + "<br>");
    document.write("Character At Index 3: " + letter_ind + "<br>");
    document.write(refresh);
}
// Q6
function c21_25ans6() {
    var fname = prompt("Enter First Name:");
    var lname = prompt("Enter Last Name:");
    var con_cat = fname.concat(lname);
    alert("Welcome " + con_cat);
}
// Q7
function c21_25ans7() {
    var city = "Hyderabad";
    var city_rep = city.replace(/Hyder/g, "Islam");
    document.write("City: " + city + "<br>");
    document.write("After Replacement: " + city_rep + "<br>");
    document.write(refresh);
}
// Q8
function c21_25ans8() {
    var message = "Ali and Sami are best friends.They play cricket and football together.";
    var message_rep = message.replace(/and/g, "&");
    document.write("Message: " + message + "<br>");
    document.write("Message After Replacement: " + message_rep + "<br>");
    document.write(refresh);
}
// Q9
function c21_25ans9() {
    var str = "472";
    var str_type = typeof (str);
    var str_conv = Number(str);
    var str_type2 = typeof (str_conv);
    document.write("Value: " + str + "<br>" + "Type: " + str_type + "<br>");
    document.write("Value: " + str_conv + "<br>" + "Type: " + str_type2 + "<br>");
    document.write(refresh);
}
// Q10
function c21_25ans10() {
    var user = prompt("Enter Any Word:");
    var user1 = user.toUpperCase();
    document.write("User Input: " + user + "<br>");
    document.write("Upper Case: " + user1 + "<br>");
    document.write(refresh);
}
// Q11
function c21_25ans11() {
    var str = prompt("Enter Any Word:");
    var str2 = str.replace(/\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
    document.write("User Input: " + str + "<br>");
    document.write("Title Case: " + str2 + "<br>");
    document.write(refresh);
}
// Q12
function c21_25ans12() {
    var num = 33.56;
    var str = num.toString().replace(".", "");
    document.write("Number: " + num + "<br>");
    document.write("Result: " + str + "<br>");
    document.write(refresh);
}
// Q13








// Q14
function c21_25ans14() {
    var user = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?").toLowerCase();
    var item = ["cake", "apple pie", "cookie", "chips", "patties"];
    var matchFound = "no";
    for (var i = 0; i < item.length; i++) {
        if (item[i] === user) {
            matchFound = "yes";
            document.write(user + " is available at index " + i + " in our Bakery.");
        }
    }
    if (matchFound === "no") {
        document.write("We are sorry." + user + " is not available in our Bakery.");
    }
    document.write("<br>" + refresh);
}
// Q15
// function c21_25ans15() {
//     var user_pass = +prompt("Enter Password:");
//     var passw = /^[A-Za-z]\w{7,14}$/;
//     if (user_pass.match(passw)) {
//         alert('Correct, try another...')
//         return true;
//     }
//     else {
//         alert('Wrong...!')
//         return false;
//     }
//     // document.write(user_pass);
// }
// c21_25ans15()
// Q16
function c21_25ans16() {
    var str = "University Of Karachi";
    var str_splt = str.split("");
    for (var i = 0; i < str_splt.length; i++) {
        document.write(str_splt[i] + "<br>");
    }
}
// Q17
function c21_25ans17() {
    var user = "Pakistan";
    var user2 = user.charAt(user.length - 1);
    document.write("User Input: " + user + "<br>");
    document.write("Last Character Of Input: " + user2 + "<br>");
    document.write(refresh);
}
// Q18
// function c21_25ans18() {
//     var sen = "The quick brown fox jumps over the lazy dog."
//     c21_25ans18b();
//     function c21_25ans18b() {
//         main_str += '';
//         sub_str += '';
//         if (sub_str.length <= 0) {
//             return main_str.length + 1;
//         }
//         subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//         return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
//     }
//     document.write(sen);
// }
// c21_25ans18();
// document.write(c21_25ans18(sen, "the"));

// function count() {
//     var gh = 
//     main_str += '';
//     sub_str += '';
//     if (sub_str.length <= 0) {
//         return main_str.length + 1;
//     }
//     subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//     return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
// }

// document.write(count("The quick brown fox jumps over the lazy dog", 'the') + "<br>");
// document.write(count("The quick brown fox jumps over the lazy dog", 'fox', false));

// function count(main_str, sub_str) {
//     main_str += '';
//     sub_str += '';
//     if (sub_str.length <= 0) {
//         return main_str.length + 1;
//     }
//     subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//     return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
// }

// document.write(count("The quick brown fox jumps over the lazy dog", 'the') + "<br>");
// document.write(count("The quick brown fox jumps over the lazy dog", 'fox', false));
// Chapter#26 to 30
// Q1
function c26_30ans1() {
    var user = +prompt("Enter Positive Integar");
    var round = Math.round(user);
    var floor = Math.floor(user);
    var ceil = Math.ceil(user);
    document.write("Number: " + user + "<br>");
    document.write("Round Off Value: " + round + "<br>");
    document.write("Floor Value: " + floor + "<br>");
    document.write("Ceil Value: " + ceil + "<br>");
    document.write(refresh);
}
// Q2
function c26_30ans2() {
    var user = +prompt("Enter Negative Integar");
    var round = Math.round(user);
    var floor = Math.floor(user);
    var ceil = Math.ceil(user);
    document.write("Number: " + user + "<br>");
    document.write("Round Off Value: " + round + "<br>");
    document.write("Floor Value: " + floor + "<br>");
    document.write("Ceil Value: " + ceil + "<br>");
    document.write(refresh);
}
// Q3
function c26_30ans3() {
    var user = +prompt("Enter Any Value:");
    var absolute = Math.abs(user);
    document.write("The Absolute Value Of " + user + " is " + absolute + "<br>");
}
// Q4
function c26_30ans4() {
    var random = Math.random() * 6;
    var floor = Math.floor(random);
    if (floor === 0) {
        document.write("Random Dice Value is: 1" + "<br>");
    }
    else {
        document.write("Random Dice Value is: " + floor + "<br>");
    }
    document.write(refresh);
}
// Q5
function c26_30ans5() {
    var random = Math.random() * 2;
    var floor = Math.floor(random);
    if (floor === 0) {
        floor = 1;
        document.write(floor + "<br>" + "Random Coin Value: Heads" + "<br>");
    }
    else if (floor === 1) {
        floor = 2;
        document.write(floor + "<br>" + "Random Coin Value: Tails" + "<br>");
    }
    document.write(refresh);
}
// Q6
function c26_30ans6() {
    var random = Math.random() * 101;
    var floor = Math.floor(random);
    document.write("Random Number Between 1 and 100: " + floor + "<br>");
    document.write(refresh);
}
// Q7






// Q8
function c26_30ans8() {c
    document.write(refresh);
}
// Chapter#31 to 34
// Q1
function c31_34ans1() {
    var date = new Date();
    document.write(date + "<br>");
    document.write(refresh);
}
// Q2
function c31_34ans2() {
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month1 = new Date();
    var month2 = month[month1.getMonth()];
    document.write("Current Month: " + month2 + "<br>");
    document.write(refresh);
}
// Q3
function c31_34ans3() {
    var date = new Date();
    var str = date.toString();
    var day = str.slice(0, 3);
    document.write("Today is " + day + "<br>");
    document.write(refresh);
}
// Q4
function c31_34ans4() {
    var Day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var Day1 = new Date();
    var Day2 = Day[Day1.getDay()]; 
    if (Day2 === Day[0]) {
        document.write("Its Fun Day");
    }
    else if (Day2 === Day[6]) {
        document.write("Its Fun Day");
    }else {
        document.write("Its Working Day");
    }
    document.write("<br>" + refresh);
}
// Q5
function c31_34ans5() {
    var dat_e = new Date();
    var dat_e2 = dat_e.getDate();
    document.write("Date: " + dat_e2 + "<br>");
    if (dat_e2 < 16) {
        document.write("First Fifteen Days Of The Month");
    }else {
        document.write("Last Days Of The Month");
    }
    document.write("<br>" + refresh);
}
// Q6
function c31_34ans6() {
    var dat_e = new Date();
    var dat_e2 = dat_e.getTime();
    var dat_e3 = dat_e2 / 60;
    document.write("Current Date: " + dat_e + "<br>");
    document.write("Elapsed MiliSeconds Since January 1, 1970: " + dat_e2 + "<br>");
    document.write("Elapsed Minutes Since January 1, 1970: " + dat_e3 + "<br>");
    document.write(refresh);
}
// Q7
function c31_34ans7() {
    var i = new Date();
    var j = i.getHours();
    if (j < 12) {
        alert("It's AM");
    }else {
        alert("It's PM");
    }
}
// Q8
function c31_34ans8() {
    var laterDate = new Date("Dec 31, 2020");
    document.write("Later Date: " + laterDate);
    document.write("<br>" + refresh);
}
// Q9
function c31_34ans9() {
    var ramadan = new Date("april 24,2020");
    var ramadan1 = ramadan.getTime(); 
    var today = new Date();
    var today1 = today.getTime();
    var diff = today1 - ramadan1;
    var diffDay = diff/(1000*60*60*24);
    var floor = Math.floor(diffDay);
    document.write(floor + " Days Have Passed Since 1st Ramadan,2020");
    document.write("<br>" + refresh);
}
// Q10
function c31_34ans10() {
    var ref = new Date("jan 1,2020");
    var ref1 = ref.getTime(); 
    var ref2 = new Date();
    var ref3 = ref2.getTime();
    var diff = ref3 - ref1;
    var diffsec = diff/(1000*60);
    var floor = Math.floor(diffsec);
    document.write("On Reference Date " + ref2 + "<br>");
    document.write(floor + " Seconds Had Passed Since Beginning of 2020.")
    document.write("<br>" + refresh);
}
// Q11
function c31_34ans11() {
    var cdate = new Date();
    var cdate2 = cdate.getTime();
    var ago = new Date();
    ago.setHours(2);
    var ago2 = ago.getTime()
    var diff = ago2 - cdate2;
    var diffhour = diff/(1000*60*60);
    var floor = Math.floor(diffhour);
    document.write("Current Date: " + cdate + "<br>");
    document.write(floor + " Hour Ago, It Was " + ago);
    document.write("<br>" + refresh);
}
// Q12
// function c31_34ans12() {
//     var cdate = new Date();
//     var cdate2 = cdate.getTime();
//     var ago = new Date();
//     ago.setHours(2);
//     var ago2 = ago.getTime()
//     var diff = ago2 - cdate2;
//     var diffhour = diff/(1000*60*60);
//     var floor = Math.floor(diffhour);
//     document.write("Current Date: " + cdate + "<br>");
//     document.write(floor + " Hour Ago, It Was " + ago);
//     document.write("<br>" + refresh);
// }
// c31_34ans12
// Q13
// function c31_34ans13() {








// }
// Q14
function c31_34ans14() {
    var c_name = "Moiz";
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month1 = new Date();
    var month2 = month[month1.getMonth()];
    var unit = 410;
    var c_unit = 16;
    var due_date = unit * c_unit;
    var late_payment = 350;
    var after_due_date = due_date + late_payment;
    document.write("K-Electric Bill" + "<br>" + "<br>");
    document.write("Month: " + month2 + "<br>");
    document.write("Number Of Units: " + unit + "<br>");
    document.write("Charges Per Unit: " + c_unit + "<br>" + "<br>");
    document.write("Net Amount Payable(Within Due Date): " + due_date + "<br>");
    document.write("Late Payment Surcharge: " + late_payment + "<br>");
    document.write("Gross Amount Payable(After Due Date): " + after_due_date + "<br>");
    document.write(refresh);
}
// Chapter#35 to 38
// Q1
function c35_38ans1() {
    var c_date = new Date();
    document.write(c_date + "<br>");
    document.write(refresh);
}
// Q2
function c35_38ans2() {
    var fname = prompt("Enter First Name:");
    var lname = prompt("Enter Last Name:");
    var fullname = fname + lname;
    alert("Welcome " + fullname);
}
// Q3
function c35_38ans3() {
    var num1 = +prompt("Enter Number 1:");
    var num2 = +prompt("Enter Number 2:");
    var Result = num1 + num2;
    alert(Result);
}
// Q4
function c35_38ans4() {
    var num1 = +prompt("Enter Number 1:");
    var opt = +prompt("Enter Operator:");
    var num2 = +prompt("Enter Number 2:");
    var Result = eval(num1, opt, num2);
    alert(Result);
}