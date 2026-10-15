import { playSound } from './js/audio-engine.js';
import './js/input.js';
import { playPad } from './js/input.js';
import { startRecording, stopRecording, playback } from './js/recorder.js';

document.querySelector('#btn-record').addEventListener('click', startRecording);
document.querySelector('#btn-stop').addEventListener('click', stopRecording);
document.querySelector('#btn-play').addEventListener('click', () => playback(playPad));
window.playSound = playSound;  