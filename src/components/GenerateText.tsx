"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `An Newtorking and Learning Platform for Developers. Join the community of developers, creators and learners. Learn, share and connect with developers from around the world.
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
