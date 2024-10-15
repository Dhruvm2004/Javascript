const message='Hello World!'
const c=message.replace('Hello','Hi')

const faltu='      Hello      '
const d=message.concat(faltu)
const b=faltu.trim().toLocaleLowerCase()
const  a=message.toUpperCase()
const digit='890'
const e=digit.padStart(5,'*')
// includes('write string u want to find') tell us whether those particular letters are there in string or not  
// indexof('letter')   gives the index of the letter 
// incase we use to replace small character to big one it replace only one that is first letter instead we use replaceAll()
// padstart(number,variable)  eg:*********673      .padstart(12,'*')    12 is inluding of variable and stars
// padend me peeche lag jayega 
// charAt(numbr) gives the variabble at that loc
// charCodeAt() gives ASCII value
// split is use to divide sentence
const stringtemp='My account number is'.concat(digit) 
const add='My account balance is $${digit}'