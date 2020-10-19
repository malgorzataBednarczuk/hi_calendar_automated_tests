export function whatIsCurrentDateFunction() {
    console.log(localStorage.getItem('date'));
    if (localStorage.getItem('date')) {
        return localStorage.getItem('date');
    }
    else {
        var today = new Date();
        today = parseInt(today.getMonth() + 1) + 'm' + today.getDate() + 'd' + today.getFullYear() + "y" + today.getHours() + "h" + today.getMinutes() + "m" + today.getSeconds();
        localStorage.setItem('date', today);
        return today;
    }    
}