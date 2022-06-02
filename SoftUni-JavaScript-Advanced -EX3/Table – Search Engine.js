function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);
    let rows=document.querySelector('tbody');
 
    function onClick() {
       let input=document.querySelector('#searchField').value.toLowerCase();
 
       rows.innerHtml=Array.from(rows.children).map(function selectRow(row) {
          if (row.textContent.includes(input)) {
             row.classList.add('select');
          }else{
            row.removeAttribute('class');
          }
          return row;
          
       });
    }
 }