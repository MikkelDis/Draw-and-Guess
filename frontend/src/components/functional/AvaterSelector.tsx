import { createAvatar } from "@dicebear/core";
import { bottts } from "@dicebear/collection";
import { ArrowRightIcon, ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState, useRef } from "react";
import { Input } from "@/components/ui/input";

const top = [
  ["antenna"],
  ["antennaCrooked"],
  ["bulb01"],
  ["glowingBulb01"],
  ["glowingBulb02"],
  ["horns"],
  ["lights"],
  ["pyramid"],
  ["radar"],
] as const;
const eyes = [
  ["bulging"],
  ["dizzy"],
  ["eva"],
  ["frame1"],
  ["frame2"],
  ["glow"],
  ["happy"],
  ["hearts"],
  ["robocop"],
  ["round"],
  ["roundFrame01"],
  ["roundFrame02"],
  ["sensor"],
  ["shade01"],
] as const;
const mouth = [
  ["bite"],
  ["diagram"],
  ["grill01"],
  ["grill02"],
  ["grill03"],
  ["smile01"],
  ["smile02"],
  ["square01"],
  ["square02"],
] as const;
const sides = [
  ["round"],
  ["antenna01"],
  ["antenna02"],
  ["cables01"],
  ["cables02"],
  ["square"],
  ["squareAssymetric"]
] as const
const head = [
  ["square01"],
  ["square02"],
  ["round01"],
  ["round02"], 
  ["square03"],
  ["square04"]
] as const

type Props = {
  onAvatarChange: (avatar: string) => void;
};

export default function FrontPage({ onAvatarChange }: Props) {
  const [eyesId, setEyesId] = useState(0);
  const [mouthId, setMouthId] = useState(0);
  const [topId, setTopId] = useState(0);
  const [sidesId, setSidesId] = useState(0);
  const [headId, setHeadId] = useState(0);
  const [avatarColor, setColor] = useState("53a9de");

  const colorPicker = useRef<HTMLInputElement>(null);
  //Avater blueprint
  const Avatar = createAvatar(bottts, {
    seed: "player",
    face: Array.from(head[headId]),
    sides: Array.from(sides[sidesId]),
    eyes: Array.from(eyes[eyesId]),
    mouth: Array.from(mouth[mouthId]),
    top: Array.from(top[topId]),
    baseColor: [avatarColor],
    backgroundColor: ["535252ad"],
    scale: 50,
  }).toDataUri();

  onAvatarChange(Avatar)

  function switchEyes(change: number) {
    const newId = (eyesId + change + eyes.length) % eyes.length;
    setEyesId(newId);
  }

  function switchMouth(change: number) {
    const newId = (mouthId + change + mouth.length) % mouth.length;
    setMouthId(newId);
  }

  function switchTop(change: number) {
    const newId = (topId + change + top.length) % top.length;
    setTopId(newId);
  }

  function switchSides(change: number) {
    const newId = (sidesId + change + sides.length) % sides.length;
    setSidesId(newId);
  }

   function switchHead(change: number) {
    const newId = (headId + change + head.length) % head.length;
    setHeadId(newId);
  }

  function switchColor() {
    if (colorPicker.current) {
      setColor(colorPicker.current.value.split("#")[1]);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4 w-64">
      <img
        // todo: Create avatar creation
        src={Avatar}
        alt="Event cover"
        className="rounded-md relative max-w-l z-20 aspect-video w-full object-cover"
      />
      <div className="flex items-center justify-center gap-3">
        <Button
          onClick={() => switchTop(-1)}
          size="icon"
          aria-label="Submit"
          variant="outline"
        >
          <ArrowLeftIcon />
        </Button>
        <p className="w-15 text-center">Top</p>
        <Button
          onClick={() => switchTop(1)}
          size="icon"
          aria-label="Submit"
          variant="outline"
        >
          <ArrowRightIcon />
        </Button>
      </div>
      <div className="flex items-center justify-center gap-3">
        <Button
          onClick={() => switchHead(-1)}
          size="icon"
          aria-label="Submit"
          variant="outline"
        >
          <ArrowLeftIcon />
        </Button>
        <p className="w-15 text-center">Head</p>
        <Button
          onClick={() => switchHead(1)}
          size="icon"
          aria-label="Submit"
          variant="outline"
        >
          <ArrowRightIcon />
        </Button>
      </div>
      <div className="flex items-center justify-center gap-3">
        <Button
          onClick={() => switchEyes(-1)}
          size="icon"
          aria-label="Submit"
          variant="outline"
        >
          <ArrowLeftIcon />
        </Button>
        <p className="w-15 text-center">Eyes</p>
        <Button
          onClick={() => switchEyes(1)}
          size="icon"
          aria-label="Submit"
          variant="outline"
        >
          <ArrowRightIcon />
        </Button>
      </div>
      <div className="flex items-center justify-center gap-3">
        <Button
          onClick={() => switchSides(-1)}
          size="icon"
          aria-label="Submit"
          variant="outline"
        >
          <ArrowLeftIcon />
        </Button>
        <p className="w-15 text-center">Sides</p>
        <Button
          onClick={() => switchSides(1)}
          size="icon"
          aria-label="Submit"
          variant="outline"
        >
          <ArrowRightIcon />
        </Button>
      </div>
      <div className="flex items-center justify-center gap-3">
        <Button
          onClick={() => switchMouth(-1)}
          size="icon"
          aria-label="Submit"
          variant="outline"
        >
          <ArrowLeftIcon />
        </Button>
        <p className="w-15 text-center">Mouth</p>
        <Button
          onClick={() => switchMouth(1)}
          size="icon"
          aria-label="Submit"
          variant="outline"
        >
          <ArrowRightIcon />
        </Button>
      </div>

      <div className="flex justify-center gap-3 items-center w-full">
        <p>Color</p>
        <Input
          ref={colorPicker}
          onChange={switchColor}
          value={"#" + avatarColor}
          id="Username"
          type="color"
          className="max-w-30 "
        />
      </div>
    </div>
  );
}
