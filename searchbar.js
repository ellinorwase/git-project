function searchFunction() {

//Det som skrivs in i inputfältet, sparas i en variabel
let inputSearch = document.getElementById('Search').value;

//Alla A-taggar sparas i en array och hämtar ID.
let array = [document.getElementById('git'), document.getElementById('github'), document.getElementById('kommandon'), document.getElementById('commit-number'),
document.getElementById('commit'), document.getElementById('status'), document.getElementById('pull'),
document.getElementById('push'), document.getElementById('branch'), document.getElementById('add'),
document.getElementById('log'), document.getElementById('checkout'), document.getElementById('work-with-git'),
document.getElementById('branches'), document.getElementById("merge"), document.getElementById("remove"), document.getElementById("origin"), document.getElementById('checkout'), document.getElementById('init'), document.getElementById('diff'), document.getElementById('touch'), document.getElementById('fetch'), document.getElementById('clone'), document.getElementById('url')];

//Lopas igenom arrayen och ser om det blir en match.
for (let i = 0; i < array.length; i++) {

//Om det blir en match länkas den via href attributet
    if (array[i] && inputSearch == array[i].id) {
        let link = array[i];
        console.error(`link`, link.id);
        document.getElementById('searchBtn').href = '#' + link.id;
        // `#${link.id}`
        }  
}
}