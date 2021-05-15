{
console.time("browser checks")
let { userAgent } = window.navigator
userAgent = userAgent.toLowerCase()
const msieCheck1 = userAgent.includes("msie")
const msieCheck2 = userAgent.includes("trident/7.0") && userAgent.includes("rv:11.0") && userAgent.includes("like Gecko")
const msieCheck = msieCheck1 || msieCheck2
if (msieCheck) {
  alert("Our CSS styling probably doesn't work on MSIE. Please switch your browser to Edge or other.")
}
console.timeEnd("browser checks")
// crap here
console.timeEnd("load")
}
