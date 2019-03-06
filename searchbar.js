function searchFunction() {

let inputSearch = document.getElementById('inputSearch').value;


let arr = [document.getElementById('git'), document.getElementById('github'), document.getElementById('kommandon'),
document.getElementById('commit'), document.getElementById('status'), document.getElementById('pull'),
document.getElementById('push'), document.getElementById('branch'), document.getElementById('add'),
document.getElementById('log'), document.getElementById('checkout'), document.getElementById('work-with-git'),
document.getElementById('branches'), document.getElementById("merge"), document.getElementById("remove"), document.getElementById("origin"), document.getElementById('checkout')];

for (let i = 0; i < arr.length; i++) {


    if (arr[i] && inputSearch == arr[i].id) {
        let link = arr[i];
        console.log(`link`, link);
        document.getElementById('searchBtn').href = link.href;
        }
    }
}