export default function ehMaiorDeIdade(campo){
    const dataNascimento = new Date(campo.value);
    validadeIdade(dataNascimento);

    console.log(validadeIdade(dataNascimento));
}

function validadeIdade(data){
    const dataAtual = new Date();
    const dataMais18= new Date(data.getUTCFullYear()+18,data.getUTCDate());

    return dataAtual >= dataMais18;
}