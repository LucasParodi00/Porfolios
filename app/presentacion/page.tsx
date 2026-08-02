"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsLinkedin } from "react-icons/bs";

const Presentacion = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <section
      aria-label="Video de presentacion"
      className="py-10 flex flex-col gap-10"
    >
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
      <Card>
        <CardHeader>
          <CardTitle className="font-extralight flex gap-2 items-center">
            <BsLinkedin size={25} /> Linkedin
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center sm:gap-10 flex-col gap-5 sm:flex-row">
            <div className="relative rounded-full overflow-hidden w-20 h-20">
              <Image
                alt="Parodi Lucas - Licenciado en Sistema"
                src={"/perfil.png"}
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <h2 className="text-sm font-extralight">
                Parodi Lucas - Licenciado en Sistemas de Información -
                Desarrollador Web Full Stack
              </h2>
              <Link
                href={"https://www.linkedin.com/in/parodi-lucas-ivan/"}
                target="_blank"
              >
                <span className="text-xs">@Parodi Lucas Ivan</span>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Presentacion;
