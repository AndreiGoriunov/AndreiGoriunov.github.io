const audioFiles = ["aughh.mp3", "lyagushka.mp3", "woo.mp3"];


function createSoundButtons() {
    let soundboardContainer = document.getElementById("soundboard-container");

    const fragment = new DocumentFragment();
    const soundButtonsArray = [];

    audioFiles.forEach(fileName => {
        const filePartsArray = fileName.split('.')
        const fileExtension = filePartsArray.pop();
        const fileNameWithoutExtension = filePartsArray.join('.');
        const filePath = `/assets/audio/soundboard/${fileName}`
        const soundButtonContentsTemplate = `
            <p class="sound-button__name">${fileNameWithoutExtension}</p>
            <audio src="${filePath}" type="audio/${fileExtension}" ></audio>
            `;
        const soundButton = document.createElement("button");
        soundButton.classList.add("soundboard-container__sound-button");
        soundButton.innerHTML = soundButtonContentsTemplate;
        // addEventListener
        soundButton.addEventListener("click", () => {
            const audio = soundButton.getElementsByTagName("audio")[0];
            audio.play();
        });
        soundButtonsArray.push(soundButton);
        fragment.appendChild(soundButton);
    });
    // Add buttons to DOM
    soundboardContainer.appendChild(fragment);
}

createSoundButtons();

