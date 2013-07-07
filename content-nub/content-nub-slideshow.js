function initAnimations() {
  
	var figure = document.querySelector('#example');
	var example = document.querySelector('#example .card-example');
	var grid = document.querySelector('#example .card-example-grid');
	var nub = document.querySelector('#example .card-nub');
	var nubClip = document.querySelector('#example .card-nub-clip');
	var nubPic = document.querySelector('#example .card-nub-pic');
	var nubContentCopy = document.querySelector('#example .card-nub-content-copy');
	var cardContent = document.querySelector('#example .card-content');
	
	// Grid lines
  var ua = navigator.userAgent;
  if (ua.indexOf('Safari') >= 0 && ua.indexOf('Chrome') < 0) {
    grid.style.display = 'none';
  }
	
	var xSegment = createSegment(120, 88, 164, 4);
	var xLabel = createLabel(132, 64, 'x');
	var sqrtXSegment = createSegment(208, -10, 116, 4);
	sqrtXSegment.className += ' rotate45 '; 
	var sqrtXLabel = createLabel(216, -80, '<div>x</div><div>&radic;2</div>');
	
	[xSegment, xLabel, sqrtXSegment, sqrtXLabel].forEach(function(el) {
		example.appendChild(el);
	});

	var overflowVisibleNub = new ParGroup([
		(new Animation(nub, {'overflow': 'visible'}, 0)),
		(new Animation(nubPic, {
			'height': ['80px', '160px']
		}, {duration: 1, timingFunction: 'ease-in'}))
	]);
	
	var rotateToNub = new ParGroup([
		(new Animation(grid, {opacity: ['0', '.4']}, 1)),
		// overflowVisibleNub,
		(new Animation(example, {
			'transform': ['', 'translate3d(440px, -440px, 0) scale(2) rotate(-45deg)']
		}, {duration: 2, timingFunction: 'ease-in-out'})),
		(new Animation(cardContent, {'opacity': ['1', '.2']}, {duration: 1, timingFunction: 'ease-out'})),
		makeTransparentAnim(xSegment, .3),
		makeTransparentAnim(sqrtXSegment, .3),
		makeTransparentAnim(xLabel, .3),
		makeTransparentAnim(sqrtXLabel, .3),
		makeTransparentAnim(cardContent, 1),
	]);
	
	var showLabels = new ParGroup([
		(new ParGroup([
			makeOpaqueAnim(xSegment, .25), 
			(new Animation(xSegment, {
				transform: ['translateX(41px) scale(.01, .5)', 'scale(.5)']
			}, {duration: .4, timingFunction: 'ease-in-out'})),
			makeOpaqueAnim(xLabel, {duration: .2, startDelay: .2, fillMode: 'both'}), 
			(new Animation(xLabel, {
				transform: ['scale(.01)','scale(.4)','scale(.56)','scale(.47)','scale(.5)']
			}, {duration: .6, startDelay: .2, timingFunction: 'ease-in-out', fillMode: 'both'}))
		])),
		(new ParGroup([
			makeOpaqueAnim(sqrtXSegment, .25), 
			(new Animation(sqrtXSegment, {
				transform: ['rotate(45deg) translateX(29px) scale(.01, .5)', 'rotate(45deg) scale(.5)']
			}, {duration: .4, timingFunction: 'ease-in-out'})),
			makeOpaqueAnim(sqrtXLabel, {duration: .2, startDelay: .2, fillMode: 'both'}), 
			(new Animation(sqrtXLabel, {
				transform: ['scale(.01)','scale(.4)','scale(.56)','scale(.47)','scale(.5)']
			}, {duration: .6, startDelay: .2, timingFunction: 'ease-in-out', fillMode: 'both'}))
		], {startDelay: .6}))
	]);
	
	var rotateFromNub = new SeqGroup([
		(new ParGroup([
			(new Animation(nubPic, {
				height: ['160px', '80px']
			}, {duration: .75, timingFunction: 'ease-out'})),
			(new Animation(example, {
				transform: [
					'translate3d(440px, -440px, 0) scale(2) rotate(-45deg)',
					'translate3d(1160px, 600px, 0) scale(3) '
				]
			}, {duration: 1, timingFunction: 'ease-in-out'}))
		])),
		showLabels
	]);
	
	var showContentCopy = new ParGroup([
		makeTransparentAnim(xSegment, .3),
		makeTransparentAnim(sqrtXSegment, .3),
		makeTransparentAnim(xLabel, .3),
		makeTransparentAnim(sqrtXLabel, .3),
		makeTransparentAnim(cardContent, 1),
    (new Animation(cardContent, {
			opacity: ['.2', '0']
		}, .75)),
    (new Animation(nubContentCopy, {
			opacity: ['0', '.3']
		}, {duration: 1, timingFunction: 'ease-in-out'}))
	]);
	
	var slideVal = 200/Math.SQRT2;
	
	var contentInitial = new ParGroup([
	  (new Animation(
  	  nubContentCopy,
  	  {
  	    opacity: ['.2', '.6'],
  	    transform: ['', 'translate3d(200px, 0, 0) rotate(-45deg)']
  		}, {duration: 1.75, timingFunction: 'ease-in-out'}
  	)),
	  (new Animation(
  	  nubClip,
  	  {
  	    opacity: ['1', '.6']
  		}, {duration: .75, timingFunction: 'ease-in-out'}
  	)),
	  (new Animation(
  	  nubContentCopy,
  	  {
  	    transform: [
  	      '', 
  	      'translate3d('+slideVal+'px, -'+slideVal+'px, 0) rotate(-45deg)'
  	     ]
  		}, {duration: .75, timingFunction: 'ease-in-out'}
  	))
	]);
	
	var slideContent = new SeqGroup([
  	(new Animation(
  	  nubContentCopy,
  	  {
  	    transform: [
  	      'translate3d('+slideVal+'px, -'+slideVal+'px, 0) rotate(-45deg)',
  	      'translate3d(0, 0, 0) rotate(-45deg)'
  	     ]
  		}, {duration: .75, timingFunction: 'ease-in-out'}
  	)),
  	(new Animation(
  	  nubContentCopy,
  	  {
  	    transform: [
  	      'rotate(-45deg)',
  	      ''
  	     ]
  		}, {duration: 1, timingFunction: 'ease-out'}
  	)),
  	(new ParGroup([
    	(new Animation(
    	  nubContentCopy,
    	  {opacity: ['.6', '.3']},
    	  {iterationCount: 3, direction: 'alternate', duration: .5, timingFunction: 'ease-in-out'}
    	)),
    	(new Animation(
    	  nubClip,
    	  {opacity: ['.6', '1']},
    	  {iterationCount: 3, direction: 'alternate', duration: .5, timingFunction: 'ease-in-out'}
    	))
  	])),
  	(new ParGroup([
    	(new Animation(
    	  nubContentCopy,
    	  {opacity: ['.3', '0']},
    	  {duration: .5, timingFunction: 'ease-in-out'}
    	)),
      (new Animation(
        cardContent, 
        {opacity: ['0', '1']},
    		{duration: .5, timingFunction: 'ease-in-out'}
  		))
  	])),
  	(new ParGroup([
    	(new Animation(
    	  example, 
    	  {
          transform: [
      			'translate3d(1160px, 600px, 0) scale(3)',
      			''
      		]
      	}, 
      	{duration: 2, timingFunction: 'ease-in-out'}
    	)),
    	(new Animation(grid, {opacity: ['.4', '0']}, 1))
  	]))
	]);
	
	return [rotateToNub, overflowVisibleNub, rotateFromNub, showContentCopy, contentInitial, slideContent];
}