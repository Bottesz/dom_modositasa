/* fogjuk meg az azon nevezetű elemet */
const azonELEM=document.getElementById("azon")
const azonELEM2=document.querySelector("#azon")
console.log(azonELEM) /* tipusa html elem*/ 
console.log(azonELEM2) /* tipusa html elem*/ 
console.log(typeof azonELEM) 
/* tipusa html elem*/

azonELEM.innerHTML="Alakul a js"

/* kartya elemek elrejtese*/

const kartyaELEM=document.getElementsByClassName("kartya")
console.log(kartyaELEM)/* típusa HTML collection, lista */
/* a 2. kártyába szeretnék beirni */
kartyaELEM[1].innerHTML="Beleírtunk a második kártyába!"

const kartyaELEM2=document.querySelector(".kartya")
console.log(kartyaELEM2) /* az elso ilyen html elemet */

const kartyaELEM3=document.querySelector(".kartya")
console.log(kartyaELEM3) /* az elso ilyen html elemet */

/* 3. divet akarom elerni, irjunk bele valamit */
kartyaELEM3[2].innerHTML+="<p>hozzáirunk valamit</p>"

/* fogjuk meg a button gombot */
const buttonELEM=document.querySelectorAll("button")[0]
console.log(buttonELEM)


/* kattintsunk rá a gombra, ráteszünk egy esemény kezelőt */
buttonELEM.addEventListener("click",gombraKattint)
/* ez a függvény csak egy referencia, hivatkozás a függvényre */ 
function gombraKattint(){
    //alert(" Hurrá, rákattintottál a gombra")
/* Ha rákattintunk a gombra akkor az első kártyába kerüljön bele a 4. kártyába is. */
    kartyaELEM3[0].innerHTML += kartyaELEM3[3].innerHTML;
}


