document.getElementById('one').addEventListener('click' , checkPoint);

function checkPoint() {
    let name = document.getElementById('name1').value;
    let password = document.getElementById('password1').value;


    //Test Input variable and update the page
    if (name == 'DragonFly' && password == 'Flyhightothesky')  {
        alert('Sign in Successful')
    }
    else if (name != 'DragonFly' && password == 'Flyhightothesky'){
        alert('Sign in Unsuccessful')
        alert('Your username is wrong')
        alert('Please try again')
    }
    else if (name == 'DragonFly' && password != 'Flyhightothesky'){
        alert('Sign in Unsuccessful')
        alert('Your password is wrong')
        alert('Please try again')
    }
    else{
        alert('Sign in Unsuccessful');
        alert('Both username and password are wrong')
        alert('Please try again')
    }

   
}