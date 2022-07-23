//select a sound
function selectMenuSound(i)
{
	if(currentSoundSet == 0)
	{
		if(i == 12) { loads01(); plays01(); }
		if(i == 11) { loads02(); plays02(); }
		if(i == 10) { loads03(); plays03(); }
		if(i == 9) { loads04(); plays04(); }
		if(i == 8) { loads05(); plays05(); }
		if(i == 7) { loads06(); plays06(); }
		if(i == 6) { loads07(); plays07(); }
		if(i == 5) { loads08(); plays08(); }
		if(i == 4) { loads09(); plays09(); }
		if(i == 3) { loads10(); plays10(); }
		if(i == 2) { loads11(); plays11(); }
		if(i == 1) { loads12(); plays12(); }
		if(i == 0) { loads13(); plays13(); }
	}
	if(currentSoundSet == 1)
	{
		if(i == 12) { loadh01(); playh01(); }
		if(i == 11) { loadh02(); playh02(); }
		if(i == 10) { loadh03(); playh03(); }
		if(i == 9) { loadh04(); playh04(); }
		if(i == 8) { loadh05(); playh05(); }
		if(i == 7) { loadh06(); playh06(); }
		if(i == 6) { loadh07(); playh07(); }
		if(i == 5) { loadh08(); playh08(); }
		if(i == 4) { loadh09(); playh09(); }
		if(i == 3) { loadh10(); playh10(); }
		if(i == 2) { loadh11(); playh11(); }
		if(i == 1) { loadh12(); playh12(); }
		if(i == 0) { loadh13(); playh13(); }

	}
	if(currentSoundSet == 2)
	{
		if(i == 12) { loadk01(); playk01(); }
		if(i == 11) { loadk02(); playk02(); }
		if(i == 10) { loadk03(); playk03(); }
		if(i == 9) { loadk04(); playk04(); }
		if(i == 8) { loadk05(); playk05(); }
		if(i == 7) { loadk06(); playk06(); }
		if(i == 6) { loadk07(); playk07(); }
		if(i == 5) { loadk08(); playk08(); }
		if(i == 4) { loadk09(); playk09(); }
		if(i == 3) { loadk10(); playk10(); }
		if(i == 2) { loadk11(); playk11(); }
		if(i == 1) { loadk12(); playk12(); }
		if(i == 0) { loadk13(); playk13(); }

	}

}

//declare audio buffers
let s01buff = null;
let s02buff = null;
let s03buff = null;
let s04buff = null;
let s05buff = null;
let s06buff = null;
let s07buff = null;
let s08buff = null;
let s09buff = null;
let s10buff = null;
let s11buff = null;
let s12buff = null;
let s13buff = null;
let h01buff = null;
let h02buff = null;
let h03buff = null;
let h04buff = null;
let h05buff = null;
let h06buff = null;
let h07buff = null;
let h08buff = null;
let h09buff = null;
let h10buff = null;
let h11buff = null;
let h12buff = null;
let h13buff = null;
let k01buff = null;
let k02buff = null;
let k03buff = null;
let k04buff = null;
let k05buff = null;
let k06buff = null;
let k07buff = null;
let k08buff = null;
let k09buff = null;
let k10buff = null;
let k11buff = null;
let k12buff = null;
let k13buff = null;
let clickbuff = null;
let shufflebuff = null;

//audio loading and playing fuctions
const loadclick = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/click.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => clickbuff = data);
	};
	request.send();
};

const playclick = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = clickbuff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadshuffle = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/shuffle.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => shufflebuff = data);
	};
	request.send();
};

const playshuffle = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = shufflebuff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

//audio loading and playing fuctions
const loads01 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/s01.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => s01buff = data);
	};
	request.send();
};

const plays01 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = s01buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loads02 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/s02.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => s02buff = data);
	};
	request.send();
};

const plays02 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = s02buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loads03 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/s03.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => s03buff = data);
	};
	request.send();
};

const plays03 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = s03buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loads04 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/s04.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => s04buff = data);
	};
	request.send();
};

const plays04 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = s04buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loads05 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/s05.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => s05buff = data);
	};
	request.send();
};

const plays05 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = s05buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loads06 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/s06.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => s06buff = data);
	};
	request.send();
};

const plays06 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = s06buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loads07 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/s07.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => s07buff = data);
	};
	request.send();
};

const plays07 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = s07buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loads08 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/s08.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => s08buff = data);
	};
	request.send();
};

const plays08 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = s08buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loads09 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/s09.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => s09buff = data);
	};
	request.send();
};

const plays09 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = s09buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loads10 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/s10.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => s10buff = data);
	};
	request.send();
};

const plays10 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = s10buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loads11 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/s11.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => s11buff = data);
	};
	request.send();
};

const plays11 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = s11buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loads12 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/s12.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => s12buff = data);
	};
	request.send();
};

const plays12 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = s12buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loads13 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/s13.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => s13buff = data);
	};
	request.send();
};

const plays13 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = s13buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


//audio loading and playing fuctions
const loadk01 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/k01.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => k01buff = data);
	};
	request.send();
};

const playk01 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = k01buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadk02 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/k02.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => k02buff = data);
	};
	request.send();
};

const playk02 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = k02buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadk03 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/k03.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => k03buff = data);
	};
	request.send();
};

const playk03 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = k03buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadk04 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/k04.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => k04buff = data);
	};
	request.send();
};

const playk04 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = k04buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadk05 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/k05.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => k05buff = data);
	};
	request.send();
};

const playk05 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = k05buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadk06 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/k06.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => k06buff = data);
	};
	request.send();
};

const playk06 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = k06buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadk07 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/k07.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => k07buff = data);
	};
	request.send();
};

const playk07 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = k07buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadk08 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/k08.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => k08buff = data);
	};
	request.send();
};

const playk08 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = k08buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadk09 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/k09.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => k09buff = data);
	};
	request.send();
};

const playk09 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = k09buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadk10 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/k10.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => k10buff = data);
	};
	request.send();
};

const playk10 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = k10buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadk11 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/k11.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => k11buff = data);
	};
	request.send();
};

const playk11 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = k11buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadk12 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/k12.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => k12buff = data);
	};
	request.send();
};

const playk12 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = k12buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadk13 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/k13.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => k13buff = data);
	};
	request.send();
};

const playk13 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = k13buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


//audio loading and playing fuctions
const loadh01 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/h01.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => h01buff = data);
	};
	request.send();
};

const playh01 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = h01buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadh02 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/h02.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => h02buff = data);
	};
	request.send();
};

const playh02 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = h02buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadh03 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/h03.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => h03buff = data);
	};
	request.send();
};

const playh03 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = h03buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadh04 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/h04.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => h04buff = data);
	};
	request.send();
};

const playh04 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = h04buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadh05 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/h05.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => h05buff = data);
	};
	request.send();
};

const playh05 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = h05buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadh06 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/h06.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => h06buff = data);
	};
	request.send();
};

const playh06 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = h06buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadh07 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/h07.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => h07buff = data);
	};
	request.send();
};

const playh07 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = h07buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadh08 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/h08.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => h08buff = data);
	};
	request.send();
};

const playh08 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = h08buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadh09 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/h09.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => h09buff = data);
	};
	request.send();
};

const playh09 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = h09buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadh10 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/h10.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => h10buff = data);
	};
	request.send();
};

const playh10 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = h10buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadh11 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/h11.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => h11buff = data);
	};
	request.send();
};

const playh11 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = h11buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadh12 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/h12.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => h12buff = data);
	};
	request.send();
};

const playh12 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = h12buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadh13 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/h13.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => h13buff = data);
	};
	request.send();
};

const playh13 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = h13buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};
