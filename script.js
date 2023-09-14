const textArea = document.querySelector('.text-area')
const mensagem = document.querySelector('.mensagem')

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar () {
  const textoEncriptado = encriptar(textArea.value)
  mensagem.value = textoEncriptado
  textArea.value = ''
}

function encriptar(stringencriptada) {
  let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']]
  stringencriptada = stringencriptada.toLowerCase()

  for(let i = 0; i < matrizCodigo.length; i++ ) {         // i elemento ser buscado
    if (stringencriptada.includes(matrizCodigo[i][0])) {  // 0 local para iniciar busca
      stringencriptada = stringencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }   
  }
  
  return stringencriptada
}

function btnDesencriptar () {
  const textoEncriptado = desencriptar(textArea.value)
  mensagem.value = textoEncriptado
  textArea.value = ''
}

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']]
  stringDesencriptada = stringDesencriptada.toLowerCase()

  for(let i = 0; i < matrizCodigo.length; i++ ) {         // i elemento ser buscado
    if (stringDesencriptada.includes(matrizCodigo[i][0])) {  // 0 local para iniciar busca
      stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
    }   
  }
  
  return stringDesencriptada
}


