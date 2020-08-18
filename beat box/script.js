let beats = {
    "65": {
        beat: new Beat ("file:///C:/Users/ACER/Desktop/assest/Piano%20Chord%20331.mp3"),
        button: new Button('#00fffe', 65)},
    "83": {
        beat: new Beat("file:///C:/Users/ACER/Desktop/assest/Piano%20Chord%20209.mp3"),
        button: new Button('#00fffe', 83)},
    "68": {
        beat: new Beat("file:///C:/Users/ACER/Desktop/assest/Piano%20Chord%20208.mp3"),
        button: new Button('#00fffe', 68)},
    "70": {
        beat: new Beat("file:///C:/Users/ACER/Desktop/assest/Drum%20Sticks%20Hit%203.mp3"),
        button: new Button('#FF00FF', 70)},
    "71": {
        beat: new Beat("file:///C:/Users/ACER/Desktop/assest/Drum%20Snare%20Roll.mp3"),
        button: new Button('#FF00FF', 71)},
    "72": {
        beat: new Beat("file:///C:/Users/ACER/Desktop/assest/PREL%20Musical%2057.mp3"),
        button: new Button('#FF00FF', 72)},
    "74": {
        beat: new Beat("file:///C:/Users/ACER/Desktop/assest/Cymbal%20Suspended%202.mp3"),
        button: new Button('#FF00FF', 74)},
    "75": {
        beat: new Beat("file:///C:/Users/ACER/Desktop/assest/Musical%20Compos%2033.mp3"),
        button: new Button('#FFFFFF', 75)},
    "76": {
        beat: new Beat("file:///C:/Users/ACER/Desktop/assest/Musical%20Orches%204.mp3"),
        button: new Button('#FFFFFF', 76)},
}

document.addEventListener('keydown', (event) => {
    const keycode = event.keyCode;
    if (keycode in beats) {
        let keyPress = beats[keycode];
        keyPress.beat.play();
        keyPress.button.select();
    }
})