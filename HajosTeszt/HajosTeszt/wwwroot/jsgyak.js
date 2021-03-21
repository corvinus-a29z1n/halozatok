window.onload = () => 
{
    for (let i = 0; i < 10; i++)  {

        var ujdiv = document.createElement("div");
        ujdiv.innerText = i;
        document.getElementById("bekezdes").appendChild(ujdiv);
        ujdiv.classList.add("elso");
        } 

        var faktoriális = function (n) {
            let er = 1;
            for (let i = 2; i <= n; i++) {
                er = er * i;
            }
            return er;
        }

    for (var sor = 0; sor < 10; sor++) {
    var ujdiv1 = document.createElement("div");
    ujdiv1.classList.add("sor1");
    pascal.appendChild(ujdiv1);

        for (var oszlop = 0; oszlop <= sor; oszlop++) {
        var ujdiv2 = document.createElement("div");
        ujdiv1.appendChild(ujdiv2);

        ujdiv2.classList.add("elem");
        ujdiv2.innerText = faktoriális(sor) / (faktoriális(oszlop) * faktoriális(sor-oszlop));
        
        }
    }
}