import React, { useEffect, useRef, useState } from 'react';

const AudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState('');
  const audioRef = useRef(null);

  useEffect(() => {
    if (isRecording) {
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
          const mediaRecorder = new MediaRecorder(stream);
          const audioChunks = [];

          mediaRecorder.ondataavailable = event => {
            audioChunks.push(event.data);
          };

          mediaRecorder.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
            const audioURL = URL.createObjectURL(audioBlob);
            setAudioURL(audioURL);
            if (audioRef.current) {
              audioRef.current.src = audioURL;
            }
          };

          mediaRecorder.start();
          setTimeout(() => {
            mediaRecorder.stop();
          }, 5000); // 录音5秒
        })
        .catch(error => console.error('Error accessing microphone:', error));
    }
  }, [isRecording]);

  const handleRecord = () => {
    setIsRecording(true);
  };

  return (
    <div>
      <button onClick={handleRecord}>开始录音</button>
      <audio ref={audioRef} controls />
      {audioURL && <p>录音文件: <a href={audioURL} download="recording.wav">下载</a></p>}
    </div>
  );
};

export default AudioRecorder;
