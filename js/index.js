let date = document.getElementById('date');
let button = document.getElementById('button');
let clear = document.getElementById('clear');
let result = document.getElementById('result');


button.onclick = function()
{
    if(date.value)
    {
       if(date.value=='e')
       {
            result.innerText="Please eneter your DateBirth";
       } 
       else
       {
        result.innerHTML = 2020-date.value +' '  +'Years Old';
        result.style.color = 'white'
       }
       
    }
    else
    {
        result.innerText = 'Please eneter your DateBirth';
        result.style.color="red";
    }
}
clear.onclick = function()
{
    location.reload();
}