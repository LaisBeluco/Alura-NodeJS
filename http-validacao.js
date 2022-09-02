function geraArrayDeURLs(arrayLinks) {
  //loop para cada {chave: valor}
  // objeto -> [valor]
  //Object.values(objeto)
  return arrayLinks.map((objetoLink) => Object.values(objetoLink).join());
}

export function validaURLs(arrayLinks) {
  return geraArrayDeURLs(arrayLinks);
}
