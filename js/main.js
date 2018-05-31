(function(window, document) {
	var element = document.getElementById('element');
	var dropElement = document.getElementById('dropElement');
	function dragStart(e) {
		e.dataTransfer.setData('text', this.id);
	}
	function allowDrop(e) {
		e.preventDefault();
	}
	function drop(e) {
		e.preventDefault();
		var data = e.dataTransfer.getData('text');
		e.target.appendChild(document.getElementById(data));
	}
	element.addEventListener('dragstart', dragStart);
	dropElement.addEventListener('dragover', allowDrop);
	dropElement.addEventListener('drop', drop);
})(window, document);