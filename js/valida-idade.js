export default function ehMaiorDeIdade(campo){
    const dataNascimento = new Date(campo.value);
    if(!validade(dataNascimento)){
        campo.setCustomValidity('O Usuario não é maior de idade!')
    }
}

function validadeIdade(data){
    const dataAtual = new Date();
    const dataMais18= new Date(data.getUTCFullYear()+18,data.getUTCDate());

    return dataAtual >= dataMais18;
}