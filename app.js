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
            
 }

 switching();
       
