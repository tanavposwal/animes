import Image from "next/image";
import { MotionDiv } from "@/components/MotionDiv";

export interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

interface Prop {
  anime: AnimeProp;
  index: number;
}

const variants = {
  hidden: { opacity: 0, x: -5 },
  visible: { opacity: 1, x: 0 },
};

function AnimeCard({ anime, index }: Prop) {
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 0.1,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
      className="max-w-sm rounded relative w-full cursor-pointer group"
    >
      <div className="relative w-full h-[37vh] overflow-hidden rounded-xl">
        <Image
          src={`https://shikimori.one/${anime.image.original}`}
          alt={anime.name}
          fill
          className="rounded-xl"
        />
        <div className="flex gap-4 items-center absolute bottom-0 bg-gradient-to-b from-transparent via-black/70 to-black w-full px-3 py-2 pt-6 rounded-b-xl opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 transition">
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./episodes.svg"
              alt="episodes"
              width={20}
              height={24}
              className="object-contain"
            />
            <p className="text-base text-white font-bold">
              {anime.episodes || anime.episodes_aired}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./star.svg"
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-base font-bold text-[#FFAD49]">{anime.score}</p>
          </div>
        </div>
      </div>
      <div className="py-2 flex flex-col gap-3 ">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {anime.name}
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-sm font-bold capitalize">
              {anime.kind}
            </p>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}

export default AnimeCard;
