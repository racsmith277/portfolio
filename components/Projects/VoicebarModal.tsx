import DesktopModal, { DesktopModalProps } from "./DesktopModal";
import Image from "next/image";
import vblogo from "@/public/images/vb-wordmark-logo.png";
import { CloseIcon } from "../Icons";
import { vbScreenshots } from "@/app/_content/projects";

function VoicebarModal(props: DesktopModalProps) {
  return (
    <DesktopModal {...props}>
      <div className="flex flex-col items-center gap-10">
        <div className="flex w-full justify-between">
          <Image
            className="w-36 object-contain"
            src={vblogo}
            alt={"voicebar-logo"}
          />
          <button className={"hover:opacity-70"} onClick={props.close}>
            <CloseIcon />
          </button>
        </div>

        <h1 className="font-voicebar text-center text-3xl font-bold">
          Never Swipe Again
        </h1>
        <div className="max-w-lg">
          <h2 className="font-voicebar text-center text-lg font-medium">
            {`We built Voicebar to strip away the extra layers and bring dating back to what it’s supposed to be — just two people getting to know each other.`}
          </h2>
        </div>
        <div className="grid max-w-4xl grid-cols-4 gap-3 pb-4">
          {vbScreenshots.map((src, i) => (
            <div key={i} className={"col-span1"}>
              <Image
                className={"rounded-2xl object-cover"}
                src={src}
                alt={"Voicebar app promotional screenshot"}
              />
            </div>
          ))}
        </div>
      </div>
    </DesktopModal>
  );
}

export default VoicebarModal;
