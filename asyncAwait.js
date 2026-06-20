/* Async/Await and Fetch 

code which might take unpredictable time to run has to be written with async and await, this async await code is moved to sidestack where it is processed and is returned to main stack when sync code in main stack is executed.

*/
async function getUser(){
    var blob = await fetch('https://randomuser.me/api/');
    var gotUser = await blob.json();
    console.log(gotUser);
}

getUser();