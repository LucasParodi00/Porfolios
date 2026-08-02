"use client";
import { Card, CardContent } from "@/components/ui/card";
import { AboutMe } from "@/feature/home/components/AboutMe";
import { TechIcons } from "@/feature/projects/components/TechIcons";
import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const AboutMePage = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="pt-10 flex flex-col gap-10">
      <AboutMe />
      <Card>
        <CardContent>
          <TechIcons
            className="flex flex-wrap gap-3 lg:justify-between"
            technologies={[
              "react",
              "nextjs",
              "tailwindcss",
              "nestjs",
              "express",
              "postgresql",
              "mysql",
              "mongodb",
              "ubuntu",
              "docker",
              "nginx",
              "git",
              "github",
              "postman",
              "typescript",
            ]}
          />
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <div className="relative w-full aspect-video rounded-2xl  overflow-hidden shadow-lg">
            {isPlaying ? (
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/BOW_I_7Y2Y0?autoplay=1`}
                title={"Presentación de Parodi Lucas Ivan"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button
                onClick={() => setIsPlaying(true)}
                className="group absolute inset-0"
                aria-label="Reproducir video"
              >
                <Image
                  src={`https://img.youtube.com/vi/BOW_I_7Y2Y0/maxresdefault.jpg`}
                  alt={"Parodi Lucas - Presentación"}
                  fill
                  className="object-cover"
                  priority
                />

                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 group-hover:scale-110 transition">
                    <Play className="text-black ml-1" size={28} />
                  </div>
                </div>
              </button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutMePage;
