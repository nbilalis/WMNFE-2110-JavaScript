name: common
layout: true
class: common

.logo-sae[![SAE Logo](img/logo-sae.png)]
.logo-web[![WEB logo](img/logo-web.png)]

.ruler.one[· · · · · · · ·]
.ruler.two[· · · · · · · ·]
.ruler.three[· · · · · · · ·]
.ruler.four[· · · · · · · ·]
.ruler.five[· · · · · · · ·]
.ruler.six[· · · · · · · ·]
.ruler.seven[· · · · · · · ·]

.footer[Nikos Bilalis - n.bilalis@sae.edu]
---
name: cover
layout: true
template: common
class: cover
---
name: section
layout: true
template: common
class: section, center, middle
---
name: section-details
layout: true
template: common
class: section-details, topbar-space
---
name: chapter
layout: true
template: common
class: chapter, topbar-space

---
name: list
layout: true
template: common
class: list, topbar-space

---
template: cover

## WMNFE2110 | FRONT-END DEVELOPMENT

# JavaScript #3

### Loops

---
template: section

## Περιεχόμενα

---
layout: true
template: section-details

---

### Περιεχόμενα

- Τελεστές
  - `+=`, `-=`, `*=`, `/=`
  - `++`, `--`
- Εντολές επανάληψης / Loops
  - Εντολή `while`
  - Εντολή `do..while`
  - Εντολή `for`
    - Εντολές `break` & `continue`
  - Μετατροπές

---
template: section

## Τελεστές

---
layout: true
template: chapter

### Τελεστές

---

#### `+=`, `-=`, `*=`, `/=`

Πέρα από τον **βασικό** τελεστή ανάθεσης `=` (_assignment operator_), υπάρχουν και άλλοι, που συνδυάζουν τον τελεστή ανάθεσης με κάποιον αριθμητικό τελεστή.

Δεν προσφέρουν κάτι καινούργιο, αλλά έναν διαφορετικό, πιο συνοπτικό τρόπο, για συνηθισμένες ενέργειες / πράξεις.

```js
i += 1;   // i = i + 1;
i -= 1;   // i = i - 1;
i *= 1;   // i = i * 1;
i /= 1;   // i = i / 1;

```

---

#### `++`, `--`

Οι τελεστές αυτοί μπορεί να μην έχουν αποκλειστική χρήση μέσα στις επαναλήψεις, αλλά τους συναντάμε συχνά εκεί.

Η αύξηση ή η μείωση ενός αριθμού κατά _1_ είναι μια αρκετά συνηθισμένη λειτουργία, για αυτό και υπάρχουν ειδικοί τελεστές για το σκοπό αυτό.

- `++` = αύξηση κατά _1_
- `--` = μείωση κατά _1_

---
class: hide-table-head

#### `++`, `--`

##### Χρήση

|       |   |       |
|:-----:|:-:|:-----:|
| `i++` | ή | `++i` |
| `i--` | ή | `--i` |

**Προσοχή**: Έχει σημασία αν ο τελεστής βρίσκεται πριν ή μετά την μεταβλητή.

Καθορίζεται, με αυτόν τον τρόπο, αν η τιμή της μεταβλητής αλλάξει πριν ή μετά την εκτέλεση της εντολής στην οποία περιλαμβάνεται.

---

#### Παράδειγμα

```js
let counter = 5;

counter++; // counter = counter + 1; ή counter += 1;
--counter; // counter = counter - 1; ή counter -= 1;

console.log(counter++);
// Ισοδύναμο με:
// console.log(counter);
// counter = counter + 1;

console.log(--counter);
// Ισοδύναμο με:
// counter = counter - 1;
// console.log(counter);

// Τι θα εμφανιστεί στην κονσόλα;

```

---
template: section

## Loops

---
layout: true
template: chapter

### Loops

---

#### Loops

Με τις επαναλήψεις μπορούμε να επαναλάβουμε ένα τμήμα κώδικα, το οποίο θα εκτελεστεί είτε για συγκεκριμένο, είτε για άγνωστο πλήθος επαναλήψεων.

Οι κλασικοί βρόχοι επανάληψης, στη `JavaScript` είναι οι:

- `for` loops
- `while` loops
- `do..while` loops

---
layout: true
template: chapter

### Εντολή `while`

---

#### Σύνταξη

```js
while (condition) {
  statements
}

```

Οι εντολές μέσα στο σώμα της `while` εκτελούνται **όσο** η συνθήκη είναι _αληθής_ (`true`).

---

#### Παρατηρήσεις

- Με μια εντολή επανάληψης υπάρχει ο κίνδυνος να πέσουμε σε _"ατέρμων βρόχο"_ / _"infinite loop"_
- Πρέπει να φροντίζουμε ώστε, είτε η συνθήκη ελέγχου της επανάληψης να γίνει κάποια στιγμή `false`, είτε να σταματήσει η εκτέλεση της επανάληψης με άλλα μέσα (π.χ. εντολή `break`)

---

#### Παράδειγμα #1

```js
let i

// Display numbers from 0 through 4
i = 0;
while (i < 5) {
  console.log(i);
  i = i + 1;      // i++; i += 1;
}

// Display numbers from 1 through 5
i = 0;
while (i < 5) {
  i = i + 1;      // i++; i += 1;
  console.log(i);
}

```

---

#### Παράδειγμα #2

```js
let i;

i = 0;
while (i < 5) {
  document.write("Counter i = " + i + "<br>");
  i = i + 1;
}

// Same result
i = 0;
while (i < 5) {
  document.write(`Counter i = ${i++}<br>`);
}

```

---
layout: true
template: chapter

### Εντολή `do...while`

---

#### Σύνταξη

```js
do {
  statements
} while (condition);

```

Όμοια λειτουργία με την `while`, μόνο που οι εντολές εκτελούνται σίγουρα μια φορά.

---

#### Παράδειγμα #1

```js
let i = 0;
do {
  console.log(i++);
} while (i < 5);

```

---

### Εντολή `do...while`

#### Παράδειγμα #2

```js
let answer, age;

do {
  age = parseInt(prompt('What is your age?'));
} while (isNaN(age));

```

---
template: section

## Classwork

---
layout: true
template: chapter

### Classwork

---
class: extra-long-text

#### Classwork #1

Χρησιμοποιώντας την εντολή `while`, φτιάξτε ένα παιχνίδι που να μαντεύει τον αριθμό που σκέφτεται ο παίκτης!

- Ζητήστε αρχικά από τον παίκτη να σκεφτεί έναν αριθμό μεταξύ του _1_ και του _100_.
- Μέσα σε μία επανάληψη ρωτήστε τον αν ο αριθμός που σκέφτεται ο παίκτης είναι το _50_ (η μέση, δηλαδή, των _1_ και _100_, στρογγυλοποιημένη προς τα κάτω).
- Αν είναι, βρήκαμε τον αριθμό και το παιχνίδι σταματά!
- Αν δεν είναι, ρωτήστε τον παίκτη αν ο αριθμός που σκέφτεται είναι μεγαλύτερος ή μικρότερος του _50_.
- Αν είναι μεγαλύτερος, επαναλάβατε τη διαδικασία, αλλά τώρα για το διάστημα _51_ με _100_, καθώς ο αριθμός βρίσκεται σίγουρα εκεί μέσα.
- Αν όχι, συνεχίστε τη διαδικασία για το διάστημα _1_ έως _49_, κ.ο.κ.

---
layout: true
template: chapter

### Εντολή `for`

---

#### Σύνταξη

```js
for (initialization; condition; step) {
  statements
}

```

- `initialization`: Εκτελείται **μία φορά** πριν από τον κώδικα του block.
- `condition`: Καθορίζει τη συνθήκη της επανάληψης, ελέγχεται στο τέλος **κάθε** επανάληψης.
- `step`: Εκτελείται μετά από **κάθε** επανάληψη.

---

#### Παράδειγμα

```js
// 0 1 2 3 4
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 5 4 3 2 1
for (let i = 5; i > 0; i--) {
  console.log(i);
}

```

---
layout: true
template: chapter

### Εντολή `break`

---

#### Λειτουργία

Η εντολή `break` χρησιμοποιείται για να σταματήσει η επανάληψη. Συνήθως συνοδεύεται από μία εντολή `if`.

#### Παράδειγμα

```js
for (let i = 0; i < 10000; i++) {
  if (i > 10) {
    break;
  }

  console.log(i);
}

```

---
layout: true
template: chapter

### Εντολή `continue`

---

#### Λειτουργία

Εάν θέλουμε να παραλείψουμε τις εντολές που έχουν απομείνει σε κάποιο βήμα μιας επανάληψης και να συνεχίσουμε με το επόμενο χρησιμοποιούμε την εντολή `continue`.

#### Παράδειγμα

```js
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }

  console.log(i);
}

```

---
template: section

## Classwork

---
layout: true
template: chapter

### Classwork

---
class: long-text

#### Classwork #2

Χρησιμοποιώντας την εντολή `for`, φτιάξτε ένα Χριστουγεννιάτικο δέντρο!

- Ζητήστε αρχικά, από το χρήστη, το ύψος του δέντρου.
- Χρησιμοποιώντας το χαρακτήρα `*`, τυπώστε στην κονσόλα (ή αν θέλετε μέσα στη σελίδα), ένα δεντράκι με το ζητούμενο ύψος.
- Αν π.χ., το ύψος θέλουμε να είναι _5_ το αποτέλεσμα πρέπει να είναι το εξής:

```
    *
   ***
  *****
 *******
    *
```

---
layout: true
template: chapter

### Μετατροπές

---

#### `while` → `do...while`

```js
while (condition) {
  statements
}

```

⇓

```js
do {
  if (condition) {
    statements
  }
} while (condition)

```

---


#### `do...while` → `while`

```js
do {
  statements
} while (condition)

```

⇓

```js

statements
while (condition) {
  statements
}

```

---

### Μετατροπές

#### `for` ↔ `while`

```js
for (let i = 0; i < n; i++) {
  statements
}

```

⇕

```js
let i = 0;

while (i < n) {
  statements
  i++;
}

```

---
template: section

## Homework

---
layout: true
template: chapter

### Homeworks

---
class: long-text

#### Homework #1

Τροποποιήστε το **Classwork #1** (_"μάντεψε τον αριθμό"_) και υλοποιήστε τις εξής βελτιώσεις:

1. Προσθέστε έναν μετρητή που να μετρά των αριθμό των προσπαθειών.
1. Μόλις ο αριθμός βρεθεί και τελειώσει η επανάληψη, εμφανίστε το μήνυμα _"I found the number you were thinking about (x) in n try(ies)!"_
    - όπου `x` & `n` να εμφανίζονται οι κατάλληλες τιμές.
1. Αν οι προσπάθειες ξεπεράσουν τις _7_, να εμφανίζεται το μήνυμα _"There is something fishy about your answers..."_ και να σταματά η επανάληψησ.
    - **ΣΗΜ.1**: με την παραπάνω μέθοδο αποκλείεται να μη βρεθεί ο αριθμός σε _7_ επαναλήψεις.
    - **ΣΗΜ.2**: το _7_ προκύπτει από τον υπολογισμό `Math.floor(Math.log2(100) + 1)`

---

#### Homework #2

Υλοποιήστε το παιχνίδι **FizzBuzz** σε JavaScript!

1. Ξεκινήστε δημιουργώντας μία επανάληψη που να εμφανίζει στην κονσόλα τους αριθμούς από το _1_ έως το _100_.
1. Αν ένας αριθμός διαιρείται με το _3_ (αλλά όχι με το _5_), εμφανίζεται στη θέση του αριθμού η λέξη _"Fizz"_.
1. Αν ένας αριθμός διαιρείται με το _5_ (αλλά όχι με το _3_), εμφανίζεται στη θέση του αριθμού η λέξη _"Buzz"_.
1. Αν ένας αριθμός διαιρείται και με το _3_ και με το _5_, εμφανίζεται στη θέση του αριθμού η λέξη _"FizzBuzz"_.

---
template: list

### Χρήσιμα links

- ![favicon](https://www.google.com/s2/favicons?domain=javascript.info) Basic operators, maths https://javascript.info/operators
- ![favicon](https://www.google.com/s2/favicons?domain=javascript.info) Loops: while and for https://javascript.info/while-for
- ![favicon](https://www.google.com/s2/favicons?domain=developer.mozilla.org) Loops and iteration - JavaScript | MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

---
template: list

### Extra info

- ![favicon](https://www.google.com/s2/favicons?domain=stackoverflow.com) javascript - What's the difference between using "let" and "var"? - Stack Overflow https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var
- ![favicon](https://www.google.com/s2/favicons?domain=www.joshwcomeau.com) Operator Lookup - Search JavaScript operators https://www.joshwcomeau.com/operator-lookup/
- ![favicon](https://www.google.com/s2/favicons?domain=caniuse.com) let | Can I use... Support tables for HTML5, CSS3, etc https://caniuse.com/let

---
template: section

## Thank You!
