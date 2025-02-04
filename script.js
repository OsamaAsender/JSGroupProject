var user = localStorage.getItem("user");
if(user){
    let parsedUser = JSON.parse(user);
    document.getElementById('welcomeMessage').innerHTML=`Hello ${parsedUser.name}`;
    document.getElementById('logoutButton').classList.remove('hidden');
}else{
    document.getElementById('welcomeMessage').innerHTML=`Hello , Please <a href="login.html"> log in </a>`
}
document.getElementById('logoutButton').addEventListener('click',function(){
    localStorage.removeItem('user');
    windown.location.href='login.html';
})