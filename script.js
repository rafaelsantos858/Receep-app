var contador = 0
var contador2 = 0


$('#btnadding').click(() => {
    contador += 1
    var ingredientes = $('#iingredientes')
    ingredientes.append(`<div><label class='inputingeqtd' for='ing'>Ingrediente:</label><input   id=ing${contador} type='text'><label class='inputingeqtd' for='qtd'>Quantidade:</label><input   id=qtd${contador} type='text'></div><br>`)
})


$("#addmodprep").click(() => {
    contador2 += 1

    var preparo = $("#passos")
    preparo.append(`<h3 id='passosprep' >Passo${contador2}</h3><textarea id=txtarea${contador2} cols='30' rows='3'></textarea>  <input onclick='up(${contador2})' id='btnsubir${contador2}' value='Subir ^' type='button'> <input onclick='down(${contador2})' id='btndescer${contador2}' value='Descer v' type='button'>`)
})

$("#salvar").click(function () {
    var title = $("#salvinputtxt").val()

    console.log(title);

    var arrayjunta = ""
    var txarray =   ""

    var todosings = $('[id^=ing]').toArray()
    var todosqtd = $('[id^=qtd]').toArray()
    var todostx = $('[id^=txtarea]').toArray()

    console.log(todostx);



    for (let i = 0; i < todosings.length; i++) {

        arrayjunta += $(todosings[i]).val() + " quantidade:" + $(todosqtd[i]).val() + "\r\n"

    }


    for (let i = 0; i < todostx.length; i++) {
        txarray += (i + 1) + ". " + $(todostx[i]).val() + "\n"
    }

    var conteudo = title + "\r\n ingredientes \r\n \r\n" + arrayjunta + "\r\n" + "Modo de preparo" + "\r\n \r\n " + txarray



    var blob = new Blob([conteudo], {
        type: "text/plain"
    })

    var textToSaveAsURL = window.URL.createObjectURL(blob); // cria URL do txt do blob acima 

    var fileNameToSaveAs = $("#inputnamearquivo").val() // input com o value do nome do arquivo que sera criado 

    var downloadLink = document.createElement("a"); // cria um elemento com a tag <a>

    downloadLink.download = fileNameToSaveAs; // nome do download sera igual ao value do input do nome do arquivo

    downloadLink.href = textToSaveAsURL; // URL de dowload do blob do texto criado 

    downloadLink.click()

})



function up(contador) {

    if (contador != 1) {

        var change1 = $(`#txtarea${contador}`).val()
        var change2 = $(`#txtarea${contador - 1}`).val()
        var temp = ""

        temp = change1
        change1 = change2
        change2 = temp

        $(`#txtarea${contador}`).val(change1)
        $(`#txtarea${contador - 1}`).val(change2)
    }

}




function down(cont) {

    if ( contador2 != cont) {
        var change1 = $(`#txtarea${cont}`).val()
        var change2 = $(`#txtarea${cont + 1}`).val()
        var temp = ""

        temp = change1  
        change1 = change2
        change2 = temp

        $(`#txtarea${cont}`).val(change1)
        $(`#txtarea${cont + 1}`).val(change2)

    }

}