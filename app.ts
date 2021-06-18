//alert("hej")

document.addEventListener("DOMContentLoaded",() => {
 
    let x ;
    let y ;

   // let summa = a + b;

    //console.log(summa);

        let summan = (a:number,b:number) => {
            return a + b;
        }


        document.querySelector("#summera")?.addEventListener("click",() => {

            x = (document.querySelector("#x") as HTMLInputElement).value;
            y = (document.querySelector("#y") as HTMLInputElement).value;
            let slump = Math.random() * (100 - 0) + 0;

            let summa = summan(parseInt(x),parseInt(y)) * slump;
            
            let svar = (document.querySelector("#summa")as HTMLElement).textContent = summa.toString();
            (document.querySelector("#slumptal")as HTMLElement).textContent = slump.toString();

        }
        );



});