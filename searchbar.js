function searchFunction() {

let inputSearch = document.getElementById('inputSearch').value;


let arr = [document.getElementById('git'), document.getElementById('github'), document.getElementById('kommandon'), document.getElementById('commit-number'),
document.getElementById('commit'), document.getElementById('status'), document.getElementById('pull'),
document.getElementById('push'), document.getElementById('branch'), document.getElementById('add'),
document.getElementById('log'), document.getElementById('checkout'), document.getElementById('work-with-git'),
document.getElementById('branches'), document.getElementById("merge"), document.getElementById("remove"), document.getElementById("origin"), document.getElementById('checkout'), document.getElementById('init'), document.getElementById('diff'), document.getElementById('touch'), document.getElementById('fetch'), document.getElementById('clone')];

for (let i = 0; i < arr.length; i++) {


    if (arr[i] && inputSearch == arr[i].id) {
        let link = arr[i];
        console.error(`link`, link.id);
        document.getElementById('searchBtn').href = '#' + link.id;
        // `#${link.id}`
        }  
    else{
    }
}
}