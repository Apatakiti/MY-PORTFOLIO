function switching() {

      const page = document.getElementsByClassName("real-page");
      const pop = document.getElementsByClassName("pop-up")
      const hambur1 = document.getElementsByClassName("nav1");
      const hambur2 = document.getElementsByClassName("nav2");

      

       hambur1[0].addEventListener('click', function() {    

        for (var i = 0; i < page.length; i++ ) {
            page[i].style.display = "none"

            for (var i = 0; i < pop.length; i++ ) {
                pop[i].style.display = "grid"
            }
          }
        }) 

        hambur2[0].addEventListener('click', function() { 
    
            for (var i = 0; i < page.length; i++ ) {
                pop[i].style.display = "none"
    
                for (var i = 0; i < pop.length; i++ ) {
                    page[i].style.display = "grid"
                }
              }
            })
            
            
            const portf = document.getElementsByClassName("port")
           
            portf[0].addEventListener('click', function() {
                console.log('love!!!')      
        
                    for (var i = 0; i < pop.length; i++ ) {
                        page[i].style.display = "grid"

                      for (var i = 0; i < page.length; i++ ) {
                       pop[i].style.display = "none"
                     }
                  }
                })

              const about = document.getElementsByClassName("abou")

                about[0].addEventListener('click', function() {
                    console.log('love!!!')      
            
                        for (var i = 0; i < pop.length; i++ ) {
                            page[i].style.display = "grid"
    
                          for (var i = 0; i < page.length; i++ ) {
                           pop[i].style.display = "none"
                         }
                      }
                    })
                    
                    const contac = document.getElementsByClassName("con")

                    contac[0].addEventListener('click', function() {
                        console.log('love!!!')      
                
                            for (var i = 0; i < pop.length; i++ ) {
                                page[i].style.display = "grid"
        
                              for (var i = 0; i < page.length; i++ ) {
                               pop[i].style.display = "none"
                             }
                          }
                        })
 }

 switching();
       
