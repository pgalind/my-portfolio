const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "create",
				weight: 12
			}, {
				text: "css",
				weight: 8
			}, {
				text: "javascript",
				weight: 14
			}, {
				text: "c/c++",
				weight: 3
			}, {
				text: "programming",
				weight: 7
			}, {
				text: "html",
				weight: 10
			}, {
				text: "java",
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
				"I am a junior Front-End Web Developer,", "looking to expand my skills", "and gain professional experience.", "I love being creative and solving problems."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 4,
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
