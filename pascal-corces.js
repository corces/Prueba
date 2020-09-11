    console.log('número de filas del triángulo');
    var filas = process.openStdin();

    filas.addListener("data", function(d) {
       
        filas = d.toString().trim();
        if(filas > 0 && filas <= 10){
            let matriz = new Array(filas);  
            for (i = 1; i <= filas; i++) {  
                matriz[i] = new Array(filas);  
            } 

            for(i = 1; i <= filas; i++){  
                for(j = 1; j <= i; j++){  
                    matriz[i][j] = combinatoria(i-1,j-1); 
                }  
            }  

            let texto='';  
            for(i = 1; i <= filas; i++){  
                let flag = true;
                for(j = 1; j <= i; j++){  
                    for(k = 0; k < filas; k++){
                        if(k == (filas - i) ){
                            texto+= '  ' + matriz[i][j] + ' ';
                            flag = false;
                        }else{
                            if(flag){
                                texto+= "  "; 
                            }
                        }
                    }
                }  
                texto+= "\n";  
            } 
            console.log(texto);    
        }else{
            console.log('el numero no es corecto');
        }    
    });

    function combinatoria(p,q){  
        return  Math.round(factorial(p)/(factorial(q)*factorial(p-q)));   
    }  

    function factorial(h){  
        let  f = 1;  
        if (h !== 0){  
            for (k = 1; k <= h; k++){  
                f*= k;  
            }  
        }  
        return f;
    }  