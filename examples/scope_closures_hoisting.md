\*\* I gave a lecture on this that's why it is in hebrew

# Scope

זהו מושג שמתייחס לזמינות של משתנים ופונקציות בתוך חלקים שונים של הקוד
אם ניקח למשל את הקובץ הבא:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script>
      const a = 10;
      let b = 20;
      var c = 30;
      function sayHi() {
        console.log(a, b, c);
      }
    </script>
    <title>Document</title>
    <button onclick="sayHi()">say Hi</button>
    <button onclick="sayHello()">say Hello</button>
    <script src="./sayHello.js"></script>
  </head>
  <body></body>
</html>

```

וגם זה

```
const d = 40;
let e = 50;
var f = 60;

function sayHello() {
  console.log(d, e, f);
}

```

נראה שכל הפונקציות והמשתנים זמינים בדפדפן משום שהם הוגדרו בסקופ הגלובאלי

### function scope

כשמשתנים מוגדים בתוך הפונקציה עצמה הם זמינים בתוכה אבל אם נקרא למשתנים שהוגדרו מחוץ לה , בסקופים חיצוניים אז הם גם יהיו זמינים לה.

### block scope--> {}

כל פעם שאני מגדירים קוד שנמצא בתוך סוגריים מסולסלים, אנחנו בעצם יוצרים בלוק חדש
בתוכו, ככה למשל נראה את הקוד הבא:

```
{
    let age=56;
    console.log(age+4)
    }
    >>60 //return value
 {
    let someVar;
    let newAge=age-30;
    console.log(newAge)
 }
 >> Uncaught ReferenceError: age is not defined
 someVar
 >> Uncaught ReferenceError: someVar is not defined

```

מקרים מיוחדים:

1. inside an if statement

```
if(true) let a=56
>>Uncaught SyntaxError: Lexical declaration cannot appear in a single-statement context
```

כאן יש עניין של תחביר תקין: אי אפשר להגדיר קבועים ולטים בתוך
if
לא בתוך סוגריים

```
for (var i=0;i<4;i++){
}
console.log(i)
>>3
```

```
for (let i=0;i<4;i++){
}
console.log(i)
>>ReferenceError: i is not defined
```

## Lexical scoping/Static scoping

פונקציות- מה שקובע זה איפה שהוא הוגדרה
נסתכל על הקוד הבא:

```
const dog="snoopy"
function snoop(){
    console.log(dog.repeat(2))
}
function scratch(){
    const dog="scratch"
    snoop();
}
snoop()
>>"snoopysnoopy"
scratch()
>>"snoopysnoopy"
```
טיפים:
לא להשתמש במשתנים גלובאליים- 

# Hoisting
מאפשר לגשת למשתנים ופונקציות לפני שהם נוצרו כלומר, במיקום בקובץ לפני שהם הוגדרו.
זה משום שלפני הרצת הקובץ הוא נקרא ע"י המנוע ומעביר את ההגדרה שלהם לתחילת הקובץ
אותו הדבר קורה אם נגדיר משתנים, ההצהרה עליהם מועלה לתחילת הקובץ אבל לא ההשמה שלהם, אז הם יהיו 
undefined
לעומת מצב בו אנחנו קוראים למשתנה כלל לא קיים שהוא יעביר שגיאת ריצה
`ReferenceError: c is not defined`
