const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "creative",
				weight: 12
			}, {
				text: "CSS",
				weight: 8
			}, {
				text: "javaScript",
				weight: 14
			}, {
				text: "c/c++",
				weight: 3
			}, {
				text: "developer",
				weight: 7
			}, {
				text: "HTML",
				weight: 10
			}, {
				text: "Java",
				weight: 9
			}, {
				text: "passionate",
				weight: 15
			}, {
				text: "adaptive",
				weight: 7
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"I am a computer science undergraduate,", "strong communicator and leader", "looking to expand my technical skills", "and gain professional experience."],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 3,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
