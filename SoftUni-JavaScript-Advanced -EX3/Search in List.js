function search() {
    let items=document.querySelectorAll('#towns>li');
    let inpu=document.querySelector('input').value;
    let result=document.getElementById('result');
    let count=0;
 
    for (let i of items) {
       
    
    if(i.textContent.toLowerCase().includes(inpu.toLowerCase())){
       i.style.fontWeight='bold';
       i.style.textDecoration='underline';
       count++;
 
    }else{
       i.style.fontWeight='';
       i.style.textDecoration='';
 
    }
  }
 
  result.textContent=`${count} matches found`
 }