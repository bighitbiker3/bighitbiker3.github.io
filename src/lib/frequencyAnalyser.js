export default (audioRef) => {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const audioSrc = audioCtx.createMediaElementSource(audioRef);
  const analyser = audioCtx.createAnalyser();
  const sampleRate = audioCtx.sampleRate;

  analyser.fftSize = 2048;

  audioSrc.connect(analyser);
  audioSrc.connect(audioCtx.destination);
  audioSrc.crossOrigin = "anonymous";

  var frequencyData = new Uint8Array(800);
  var frequencySpread = sampleRate/(frequencyData.length*2)
  return { analyser, frequencyData, frequencySpread }
}