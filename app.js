function august() {
    let now = new Date("14 aug 24")
    let now1 = new Date()
    // console.log(now);
    let result = (now - now1);
    // console.log(result);
    let result2 = result /(1000 * 60 *60 *24);
    let hours = result /(1000 * 3600);
    alert(Math.round(result2)+" Days");
    alert(Math.round(hours)+" Hours");
}
