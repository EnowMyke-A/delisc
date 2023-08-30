
function darkTheme(){
    document.body.classList.toggle('dark-theme');
    document.getElementsByClassName('footer')[0].classList.toggle('darkFooter');
    document.getElementById('navigation').classList.toggle('dark-theme');
    document.getElementsByClassName('email-input')[0].classList.toggle('dark-form');
    document.getElementsByClassName('color')[0].classList.toggle('fa-sun');
    document.getElementsByClassName('color')[0].classList.toggle('fa-moon');
    if(localStorage.getItem('theme')==null || localStorage.getItem('theme')=='light')localStorage.setItem('theme','dark');
    else localStorage.setItem('theme', 'light');
    document.getElementsByClassName('search')[0].classList.toggle('dark-theme');
}

function CurrentMode(){

    if(localStorage.getItem('theme')=='dark'){
        document.body.classList.add('dark-theme');
        document.getElementsByClassName('footer')[0].classList.add('darkFooter');
        document.getElementById('navigation').classList.add('dark-theme');
        document.getElementsByClassName('email-input')[0].classList.add('dark-form');
        document.getElementsByClassName('color')[0].classList.add('fa-sun');
        document.getElementsByClassName('color')[0].classList.remove('fa-moon'); 
        document.getElementsByClassName('search')[0].classList.add('dark-theme');  
    }

    else{
        document.body.classList.remove('dark-theme');
        document.getElementsByClassName('footer')[0].classList.remove('darkFooter');
        document.getElementById('navigation').classList.remove('dark-theme');
        document.getElementsByClassName('email-input')[0].classList.remove('dark-form');
        document.getElementsByClassName('color')[0].classList.remove('fa-sun');
        document.getElementsByClassName('color')[0].classList.add('fa-moon');  
        document.getElementsByClassName('search')[0].classList.remove('dark-theme'); 
    }
    }

    var foodIcon= document.getElementsByClassName('icon');
    var smCart=document.getElementById('sm-cart');
    var Cart= document.getElementById('cart');
    var whitelist= document.getElementById('whitelist');
    var i;
    
    function EventAdder(i){
        foodIcon[i].addEventListener('click', function(){
            if(!foodIcon[i].classList.contains('added')){
                foodIcon[i].classList.add('added');
            }
            else{
                foodIcon[i].classList.remove('added');
            }
        })
    }

    function EventEffecter(){
        for(i=0;i<foodIcon.length;i++)
        EventAdder(i)
    }


    onload=function(){
        CurrentMode(), EventEffecter()
    }
