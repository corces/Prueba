alto = int(input("alto de la escalera entre 1 y 99: "))
if(alto > 0 and alto < 100):
    for i in range(alto):
        valor = str()
        for n in range(alto):
            if(n >= (alto-i)-1):
                valor = valor +'  #'
            else:
                valor = valor +'   '
        print(valor) 
else:
    print("el numero no es corecto") 