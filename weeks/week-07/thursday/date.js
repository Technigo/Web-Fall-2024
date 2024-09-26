//9 ways of creating a new date object
// new Date()
// new Date(date string)

// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)

// new Date(milliseconds)

const date = new Date() //now
console.log("Now", date)

const birthDay = new Date("1990-10-06") //date string
console.log("Birthday", birthDay)

const millisecondsSince1970 = Date.now() // How many milliseconds passed since midnight at the beginning of January 1, 1970
console.log("Milliseconds since 1970:", millisecondsSince1970)

const dateConstructedFromMilliseconds = new Date(millisecondsSince1970)
console.log("Date constructed from milliseconds", dateConstructedFromMilliseconds)

const hours = date.getHours() // get only hours
console.log("Hours:", hours)

const day = date.getDay() // get only day
console.log("Day:", day)

//Practice - recreate this:
//https://isitsaturday.today/

//Example solution: https://codepen.io/hippiekick/pen/rNXaPLg?editors=0011

const localeTimeString = date.toLocaleTimeString() // Return only the time portion of a date
console.log("Locale time string:", localeTimeString)

const localeTimeStringUS = date.toLocaleTimeString("en-US") // American way
console.log("US Local time string", localeTimeStringUS)

const localeDateString = date.toLocaleDateString() // Return only the date portion of a date
console.log("Locale date string:", localeDateString)

const localeDateStringUS = date.toLocaleDateString("en-US") // American way
console.log("US Local date string", localeDateStringUS)
