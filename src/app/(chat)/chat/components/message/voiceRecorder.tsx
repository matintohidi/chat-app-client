import { Mic, MicOff, Trash2 } from "lucide-react";
import React from "react";
import { useReactMediaRecorder } from "react-media-recorder";

const VoiceRecorder: React.FC = () => {
  const { status, startRecording, stopRecording, clearBlobUrl, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true });
  console.log("status", status, "mediaBlobUrl", mediaBlobUrl);
  return (
    <button
      className="bg-secondary rounded-lg w-10 h-10 flex items-center justify-center transition duration-125 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-2 hover:bg-primary/15"
      onClick={
        status === "recording"
          ? stopRecording
          : status === "stopped"
            ? clearBlobUrl
            : startRecording
      }
    >
      {status === "recording" ? (
        <MicOff size={24} color="#615ef0" />
      ) : status === "stopped" ? (
        <Trash2 size={24} color="#615ef0" />
      ) : (
        <Mic size={24} color="#615ef0" />
      )}
    </button>
  );
};

export default VoiceRecorder;
