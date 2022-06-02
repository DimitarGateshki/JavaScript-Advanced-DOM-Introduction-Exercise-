function solve() {
    let text=document.getElementById('text').value.split(' ');
    let type=document.getElementById('naming-convention').value.split(' ');
    let result='';
  
    if(type[0]=='Camel'){
      for (let i = 0; i < text.length; i++) {
        if(i==0){
          result=text[i].toLowerCase(); 
  
        }else{
          result+=text[i][0].toUpperCase()+text[i].substring(1).toLowerCase(); 
  
        }
        
      }
      
  
    }else if(type[0]=='Pascal'){
      for (let e of text) {
        result+=e[0].toUpperCase()+e.substring(1).toLowerCase() ;
      }
  
    }else{
      result='Error!'
  
    }
  
    document.getElementById('result').textContent=result;
  }