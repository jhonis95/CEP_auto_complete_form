const inputCep= document.getElementById("cep")
const inputLogradouro=  document.getElementById("logradouro")
const inputBairro= document.getElementById("bairro")
const inputLocalidade= document.getElementById("localidade")
const inputUf= document.getElementById("UF")

const xmlObject= new XMLHttpRequest()


inputCep.addEventListener('input',(e)=>{
    let cep=e.target.value
    if(e.target.value.length===8){
        xmlObject.open("GET",`https://viacep.com.br/ws/${cep}/json`)
        xmlObject.send()
    }
})
xmlObject.addEventListener("load",()=>{
    const data=JSON.parse(xmlObject.response)//to acesse using js the data in JSON
    if(data.erro===true){
        alert("esse cep nao existe")
    }else{
        autoForm(data)
    }
})
xmlObject.addEventListener("error",()=>{
    alert("serviso em OFF")
})
function autoForm(data){
    inputLogradouro.value=`${data.logradouro}`
    inputBairro.value=`${data.bairro}`
    inputLocalidade.value=`${data.localidade}`
    inputUf.value=`${data.uf}`
}