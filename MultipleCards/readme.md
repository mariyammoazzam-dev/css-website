
1. AND (&&)

AND means both conditions must be true.

let result = 88;
let grade = "B";

if (result === 88 && grade === "B") {
    console.log("Pass");
}

✅ result === 88 → true
✅ grade === "B" → true

Both are true, so the code runs.

Think like:

"I will go outside if it is Sunday AND the weather is good."


2. OR (||)

OR means at least one condition must be true.

let age = 24;
let formNo = 4;

if (age === 21 || formNo === 4) {
    console.log("Allowed");
}

❌ age === 21 → false
✅ formNo === 4 → true

One condition is true, so the code runs.

Think like:

"I can enter if I have a ticket OR a pass."

Only one is needed.



3. NOT (!)

NOT means reverse the answer.

let lightOn = true;

console.log(!lightOn);

Output:

false

Because ! changes:

true → false
false → true

Think of a bulb:Bulb ON = true
!true = OFF (false)

Easy memory trick
&& = AND = Both YES
|| = OR = One YES is enough
! = NOT = Opposite answer



// Functions 
// processing / calculation 
// break code in smaller portions