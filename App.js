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