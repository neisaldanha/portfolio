        /*Função Pai de Mascaras*/
        function Mascara(o,f){
                v_obj=o
                v_fun=f
                setTimeout("execmascara()",1)
        }
        

        /*Função que Executa os objetos*/
        function execmascara(){
                v_obj.value=v_fun(v_obj.value)
        }
        
        /*Função que Determina as expressões regulares dos objetos*/
        function leech(v){
                v=v.replace(/o/gi,"0")
                v=v.replace(/i/gi,"1")
                v=v.replace(/z/gi,"2")
                v=v.replace(/e/gi,"3")
                v=v.replace(/a/gi,"4")
                v=v.replace(/s/gi,"5")
                v=v.replace(/t/gi,"7")
                return v
        }

        /*Função exclusiva para o Nome de Empresa Ex.: M4Tecnologi@.com*/
        function NomeEmpresa(v){
        	return v.replace(/[^a-z0-9áéíóúâêôãõç -.@]+/gi,'')
        }


        /*Função exclusiva para o Login  Ex.: joao.paulo*/
        function Login(v){
            return v.replace(/[^a-z.]+/g,"")
        }

        /*Função que permite so Personalizar  Ob.: Subistitua o [????] pelo desejado*/
        function Personalizado(v){
            return v.replace(/[^????]+/g,'')
        }

        /*Função que permite apenas letras e números*/
        function LetrasNumeros(v){
            return v.replace(/[^a-z0-9]+/gi,'')
        }

        /*Função que permite apenas letras*/
        function Letras(v){
            return v.replace(/[^a-záéíóúâêôãõç ]+/gi,"")
        }

        /*Função que permite apenas numeros*/
        function Numeros(v){
                return v.replace(/\D/g,"")
        }
        
        /*Função que padroniza telefone (11) 4184-1241*/
        function Telefone(v){
                v=v.replace(/\D/g,"")                            
                v=v.replace(/^(\d\d)(\d)/g,"($1) $2") 
                v=v.replace(/(\d{5})(\d)/,"$1-$2")      
                return v
        }
        
        
        /*Função que padroniza CPF*/
        function Cpf(v){
                v=v.replace(/\D/g,"")                                   
                v=v.replace(/(\d{3})(\d)/,"$1.$2")         
                v=v.replace(/(\d{3})(\d)/,"$1.$2")         
                                                                                                 
                v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
 
                return v
        }

        /*Função que padroniza CEP*/
        function Cep(v){
                v=v.replace(/D/g,"")                            
                v=v.replace(/^(\d{5})(\d)/,"$1-$2") 
                return v
        }
        
        /*Função que padroniza CNPJ*/
        function Cnpj(v){
                v=v.replace(/\D/g,"")                              
                v=v.replace(/^(\d{2})(\d)/,"$1.$2")      
                v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3") 
                v=v.replace(/\.(\d{3})(\d)/,".$1/$2")              
                v=v.replace(/(\d{4})(\d)/,"$1-$2")                        
                return v
        }
        
        /*Função que padroniza DATA*/
        function Data(v){
                v=v.replace(/\D/g,"") 
                v=v.replace(/(\d{2})(\d)/,"$1/$2") 
                v=v.replace(/(\d{2})(\d)/,"$1/$2") 
                return v
        }

        /*Função altera senha*/
        function alteraSenha(v){

            if(v.nova_senha.value != v.confirmar_senha.value) {
                alert("O campo \"CONFIRMA SENHA\" está diferente do campo \"NOVA SENHA\". Por favor verifque!");
                v.confirmar_senha.focus();
                return false;
            }
        }

        /*Função que validada campos*/
        function validacaoEstagiario(v){
            if( v.cpf.value == '000.000.000-00' || 
                v.cpf.value == '111.111.111-11' || 
                v.cpf.value == '222.222.222-22' || 
                v.cpf.value == '333.333.333-33' || 
                v.cpf.value == '444.444.444-44' || 
                v.cpf.value == '555.555.555-55' || 
                v.cpf.value == '666.666.666-66' || 
                v.cpf.value == '777.777.777-77' || 
                v.cpf.value == '888.888.888-88' || 
                v.cpf.value == '999.999.999-99'){
                    alert("Por favor insira um CPF válido!");
                    v.cpf.focus();
                    return false;
            } 
            if( v.email.value.indexOf('@')== -1 ||  
                v.email.value.indexOf('.com')== -1){
                    alert("Por favor insira um E-MAIL válido!");
                    v.email.focus();
                    return false;
            }

            

            if( v.tel.value == '(00) 0000-0000' || 
                v.tel.value == '(11) 1111-1111' || 
                v.tel.value == '(22) 2222-2222' || 
                v.tel.value == '(33) 3333-3333' || 
                v.tel.value == '(44) 4444-4444' || 
                v.tel.value == '(55) 5555-5555' || 
                v.tel.value == '(66) 6666-6666' || 
                v.tel.value == '(77) 7777-7777' || 
                v.tel.value == '(88) 8888-8888' || 
                v.tel.value == '(99) 9999-9999'){
                    alert("Por favor insira um número de TELEFONE válido!");
                    v.tel.focus();
                    return false;
            }

            if( v.cel.value == '(00) 0000-0000' || 
                v.cel.value == '(11) 1111-1111' || 
                v.cel.value == '(22) 2222-2222' || 
                v.cel.value == '(33) 3333-3333' || 
                v.cel.value == '(44) 4444-4444' || 
                v.cel.value == '(55) 5555-5555' || 
                v.cel.value == '(66) 6666-6666' || 
                v.cel.value == '(77) 7777-7777' || 
                v.cel.value == '(88) 8888-8888' || 
                v.cel.value == '(99) 9999-9999'){
                    alert("Por favor insira um número CELULAR válido");
                    v.cel.focus();
                    return false;
            }

            if(v.turno.value == v.turno_estagio.value){
                alert("Horário do ESTÁGIO é incompatível com o horário do CURSO. Por Favor verifique!");
                v.turno_estagio.focus();
                return false;
            }

            /*if(new Date(v.datafim.value).getTime() < new Date(v.datainicio.value).getTime()){
                    alert("A DATA FIM não pode ser menor que a DATA INICIO! Por favor verifique!");
                    v.datafim.focus();
                    return false;
            } */
        }

        function validacaoEmpresa(v){
            if( v.emp_tel.value == '(00) 0000-0000' || 
                v.emp_tel.value == '(11) 1111-1111' || 
                v.emp_tel.value == '(22) 2222-2222' || 
                v.emp_tel.value == '(33) 3333-3333' || 
                v.emp_tel.value == '(44) 4444-4444' || 
                v.emp_tel.value == '(55) 5555-5555' || 
                v.emp_tel.value == '(66) 6666-6666' || 
                v.emp_tel.value == '(77) 7777-7777' || 
                v.emp_tel.value == '(88) 8888-8888' || 
                v.emp_tel.value == '(99) 9999-9999'){
                    alert("Por favor insira um número de TELEFONE válido!");
                    v.emp_tel.focus();
                    return false;
            }
        }

        function validacaoIntegradora (v) {
            if( v.int_tel.value == '(00) 0000-0000' || 
                v.int_tel.value == '(11) 1111-1111' || 
                v.int_tel.value == '(22) 2222-2222' || 
                v.int_tel.value == '(33) 3333-3333' || 
                v.int_tel.value == '(44) 4444-4444' || 
                v.int_tel.value == '(55) 5555-5555' || 
                v.int_tel.value == '(66) 6666-6666' || 
                v.int_tel.value == '(77) 7777-7777' || 
                v.int_tel.value == '(88) 8888-8888' || 
                v.int_tel.value == '(99) 9999-9999'){
                    alert("Por favor insira um número de TELEFONE válido!");
                    v.int_tel.focus();
                    return false;
            }
        }

        function validacaoUsuario (v) {
            if (v.login.value.indexOf('.')== -1) {
                alert( "É recomendado utilizar este padrão de login: [NOME].[SOBRENOME], Por favor digite um login válido!")
                v.login.focus();
                return false;
            }

            if( v.senha.value != v.confirma_senha.value ){
                    alert("O campo \"CONFIRMA SENHA\" está diferente do campo \"SENHA\". Por favor verifque!");
                    v.confirma_senha.focus();
                    return false;
            }

            if( v.email.value.indexOf('@')== -1 ||  
                v.email.value.indexOf('.com')== -1){
                    alert("Por favor insira um E-MAIL válido!");
                    v.email.focus();
                    return false;
            }
        }
        