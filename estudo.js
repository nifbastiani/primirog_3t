function total(){
    let c = document.getElementById("valor").value;
    let j = document.getElementById("juros").value;
    let t = document.getElementById("meses").value;

    if(!Number(c)){
      alert(" o valor do capital deve ser um número.");
      document.getElementById("capital").value = "";
      document.getElementById("capital");
      return 
    }

    if(!Number(j)){
      alert(" o valor dos juros deve ser um número.");
      document.getElementById("juros").value = "";
      document.getElementById("juros").focus ();
      return 
    }

    if(!Number(m)){
      alert(" o valor dos meses deve ser um número.");
      document.getElementById("meses").value = "";
      document.getElementById("meses").focus ();
      return 
    }

    let r = 0;
    for(let i = 1; i <= t; i++){
        r = c * (1 + (j/100));
        document.write("Mês " + i + " valor: " + r +"<br>");
        c = r;
    }
    
    document.write("Resultado: " + r);
}
function adicao(){
    let val1 = document.getElementById("v1").value;
    let val2 = document.getElementById("v2").value;
    let r = Number(val1) + Number(val2);
    document.getElementById("resultado").innerHTML =r;
    }
    
    function subtracao(){
      let val1 = document.getElementById("v1").value;
      let val2 = document.getElementById("v2").value;
      let r = Number(val1) - Number(val2);
      document.getElementById("resultado").innerHTML =r;
      }
    
      function divisao(){
        let val1 = document.getElementById("v1").value;
        let val2 = document.getElementById("v2").value;
        let r = Number(val1) / Number(val2);
        document.getElementById("resultado").innerHTML =r;
        }
      
        function multiplicacao(){
          let val1 = document.getElementById("v1").value;
          let val2 = document.getElementById("v2").value;
          let r = Number(val1) * Number(val2);
          document.getElementById("resultado").innerHTML =r;
          }
          function porcentagem(){
            let val1 = document.getElementById("v1").value;
            let val2 = document.getElementById("v2").value;
            let c = 100
            let p = Number(val2)  / Number(c)
            let r = Number(val1) * Number(p);
            document.getElementById("resultado").innerHTML =r;
            } 
