var voltarBtn = document.querySelector('#voltarBtn1');
var etiquetasPreviewFullContainer = document.querySelector('.etiquetasPreviewFullContainer');
var gerarEtiquetasBtn1 = document.querySelector('.gerarEtiquetasBtn1');


gerarEtiquetasBtn1.addEventListener('click', function () {
	if (etiquetasPreviewFullContainer.style.display == 'none') {
		etiquetasPreviewFullContainer.style.display = 'grid';
	} else {
		etiquetasPreviewFullContainer.style.display = 'none';
	}
});


voltarBtn.addEventListener('click', function() {
	etiquetasPreviewFullContainer.style.display = 'none';
});




