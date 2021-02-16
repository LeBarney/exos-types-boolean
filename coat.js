// Programme qui va m'aider à décider si je dois mettre mon manteau
// ou pas en fonction d'une méteo pluvieuse ou venteuse
let isRainy = false
let isWindy = false
let temp = -3

if ((isRainy && isWindy) || temp < 0 ) {
  console.log('restez chez vous au chaud !!!')
} else if (isRainy && !isWindy) {
  console.log('Attention ça va pleuvoir un poil')
}
  else if (!isRainy && isWindy) {
  console.log('Mettez une petite laine ça va souffler')
}
else { 
  console.log('Vous n avez pas besoin de manteau, il fait beau !')
}