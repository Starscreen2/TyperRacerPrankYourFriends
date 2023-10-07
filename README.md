# TyperRacerPrankYourFriends
Are you tired of that one friend who keeps beating you in Typer Racer and wants to shatter their ego?
Prank him with this script

# AutoType: Simulate Human Typing with Mistakes

This is a lightweight script that simulates human typing, complete with the occasional typographical error. It uses jQuery for DOM manipulation and event handling.

## Features
- Simulates human typing speed with random intervals.
- Occasionally makes typing mistakes and corrects them, just like a real person.
- Specially handles spaces and punctuations with slightly longer pauses.
- Increases mistake probability for 'th', 'st', 'nd', 'rd'.

2. **Initialize the Typing Simulator**: 
   - Attach the AutoType function to any text input element. 
   - Press the spacebar in the input to start the simulation. (optional, press and hold the right arrow)
   - The script will fetch text from a DOM element with the class `inputPanel` and start typing it into the input.

3. **Customizations**:
   - Adjust the `minInterval` and `maxInterval` inside `getRandomInterval` function to change the typing speed.
   - Adjust the `effectiveMistakeProbability` to make typing mistakes more or less frequent.
   - Modify the `wrongChar` generation in `makeMistakeAndCorrect` function for different mistake characters.

**TLDR**:
Open the inspect element, and then paste this script into the console after you see the countdown.
Right before you see the typing indicator, press space and then hold the right arrow.
