fetch('data.json').then((data)=>{
    return data.json();
}).then((res)=>{
    let data1='';
    
   
    res.map((values)=>{

        data1+=`
        <div class="sub">
          <img src="${values.logo}" alt="">
          <div class="div1">
            <p>${values.company}</p>
            <button>${values.new}</button>
            <button>${values.featured}</button>
          </div>
          <div>${values.position}</div>
          <div class="role">
            <button>${values.role}</button>
            <button>${values.level}</button>
            <button>${values.tools}</button>
          </div>
        </div>`;
       
    });
    document.getElementById("job").innerHTML=data1;

}).catch((error)=>{
    console.log(error)
});