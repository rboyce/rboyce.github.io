function createHorizLine(y) {
	var line = document.createElement('div');
	line.className = 'line';
	line.style.top = y + 'px';
	line.style.left = '0';
	line.style.right = '0';
	return line;
}
	
function createVertLine(x) {
	var line = document.createElement('div');
	line.className = 'line';
	line.style.left = x + 'px';
	line.style.top = '0';
	line.style.bottom = '0';
	return line;
}
	
function createSegment(x, y, width, height) {
	var line = document.createElement('div');
	line.className = 'line segment';
	line.style.left = x + 'px';
	line.style.top = y + 'px';
	line.style.width = 2 * width + 'px';
	line.style.height = 2 * height + 'px';
	return line;
}

function createLabel(x, y, labelText) {
	var label = document.createElement('span');
	label.className = 'segment-label';
	label.style.left = x + 'px';
	label.style.top = y + 'px';
	label.innerHTML = '<span>' + labelText + '</span>';
	return label;
}
	
function createPoint(x, y, label) {
	var point = document.createElement('div');
	point.className = 'point';
	point.style.left = x + 'px';
	point.style.top = y + 'px';
	point.innerHTML = label;
	return point;
}
	
function makeOpaqueAnim(element, duration) {
	return (new Animation(element, {opacity: ['0', '1']}, duration));
}
	
function makeTransparentAnim(element, duration) {
	return (new Animation(element, {opacity: ['1', '0']}, duration));
}
