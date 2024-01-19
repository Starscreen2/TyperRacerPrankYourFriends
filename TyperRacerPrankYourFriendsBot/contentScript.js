(function() {
    // Ensure jQuery is loaded
    if (typeof jQuery === 'undefined') {
        console.error('jQuery not loaded');
        return;
    }

    // No conflict mode for jQuery
    jQuery.noConflict();

    // Main script logic
    (function($) {
        var inputText;
        var i = 0;

        function getRandomInterval() {
            var minInterval = 20;
            var maxInterval = 75;

            // Slightly longer pause for spaces and punctuation
            if (inputText[i] === ' ' || [',', '.', ';', ':', '!', '?'].includes(inputText[i])) {
                maxInterval += 15;
                minInterval += 5;
            }

            return Math.random() * (maxInterval - minInterval) + minInterval;
        }

        async function makeMistakeAndCorrect() {
            var mistakeLength = Math.floor(Math.random() * 5) + 1;
            var wrongChars = "";

            for (var j = 0; j < mistakeLength; j++) {
                var wrongChar;
                do {
                    wrongChar = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
                } while (wrongChar === inputText[i]);
                wrongChars += wrongChar;
            }

            $('.txtInput').val($('.txtInput').val() + wrongChars);

            await new Promise(resolve => setTimeout(resolve, Math.random() * (1000 - 550) + 550));

            var currentVal = $('.txtInput').val();
            $('.txtInput').val(currentVal.slice(0, -mistakeLength));

            await new Promise(resolve => setTimeout(resolve, 10));

            typeCorrectCharacter();
        }

        function typeCorrectCharacter() {
            $('.txtInput').val($('.txtInput').val() + inputText[i]);
            i++;
            if (i < inputText.length) {
                autoType();
            }
        }

        async function autoType() {
            await new Promise(resolve => setTimeout(resolve, getRandomInterval()));

            if (i >= inputText.length) {
                return;
            }

            var effectiveMistakeProbability = 1 / 50;
            if (['th', 'st', 'nd', 'rd'].some(suffix => inputText.slice(i - 2, i) === suffix)) {
                effectiveMistakeProbability *= 1.5; // Increase mistake probability for tricky sequences
            }

            if (Math.random() < effectiveMistakeProbability) {
                await makeMistakeAndCorrect();
            } else {
                typeCorrectCharacter();
            }
        }

        function executeScript() {
            $('body').on('keydown', '.txtInput', function(e) {
                if ((e.which || e.keyCode) == 32) {
                    e.preventDefault();
                    if (i === 0) {
                        inputText = $('.inputPanel tr:first').text();
                        autoType();
                    }
                }
            });
        }

        // Start the script
        executeScript();

    })(jQuery);

})();
