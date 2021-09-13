/* ver el video a partir de 13:12 https://www.bing.com/videos/search?q=tutorial+html+css+images&&view=detail&mid=6C78EA565F30DD5EA9086C78EA565F30DD5EA908&&FORM=VRDGAR&ru=%2Fvideos%2Fsearch%3Fq%3Dtutorial%2Bhtml%2Bcss%2Bimages%26FORM%3DHDRSC4 */

/* Variables */
const btnCierra = document.querySelector('#btn-cierra')
const btnAdelanta = document.querySelector('#btn-adelanta')
const btnRetrocede = document.querySelector('#btn-retrocede')
const imagenes = document.querySelectorAll('#galeria img')
const lightbox = document.querySelector('#contenedor-principal')
const imagenActiva = document.querySelector('#img-activa')
let indiceImagen = 0

/* Abrir el lightbox */
const abreLightbox = (event) => {
  imagenActiva.src = event.target.src
  lightbox.style.display = 'flex' /* estaba en none */
  indiceImagen = Array.from(imagenes).indexOf(event.target)
}
imagenes.forEach((imagen) => {
  imagen.addEventListener('click', abreLightbox)
})

/* cierra el lightbox */
btnCierra.addEventListener('click', () => {
  lightbox.style.display = 'none'
})

/* adelanta imagen */
const adelantaImagen = () => {
  if (indiceImagen === imagenes.length - 1) { /* esto lo pone para que cuando llegue a la ultima imagen vuelva a la primera */
    indiceImagen = -1
  }
  imagenActiva.src = imagenes[indiceImagen + 1].src
  indiceImagen++
}
btnAdelanta.addEventListener('click', adelantaImagen)

/* Retrocede la imagen */
const retrocedeImagen = () => {
  if (indiceImagen === 0) { /* si al retroceder llega a 0, tiene que pasara la ultima */
    indiceImagen = imagenes.length
  }
  imagenActiva.src = imagenes[indiceImagen - 1].src
  indiceImagen--
}
btnRetrocede.addEventListener('click', retrocedeImagen)
