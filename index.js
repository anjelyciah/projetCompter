let btnClick = document.querySelector ('.btnClick')
        let btnRestart = document.querySelector('.btnRestart')
        let content = document.querySelector('.content')
        let conteneur = document.querySelector('.conteneur')
        let nombre = 0
    
        btnClick.addEventListener('click' , ()=>{
          
            nombre = nombre + 1
            content.textContent= `click moi ${nombre} fois `
           
    
    
        })
        btnRestart.addEventListener ('click' , ()=>{

            content.textContent ='click moi'

        })
    
       
    
    