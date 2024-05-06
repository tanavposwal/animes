import Image from "next/image";
import { MotionDiv } from "./MotionDiv";

const variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

function Hero() {
  return (
    <header className="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0 select-none">
      <div className="flex-1 flex flex-col gap-10">
        <div className="w-full flex items-center justify-between">
          <Image
            src="./logo.svg"
            alt="logo"
            width={101}
            height={96}
            className="object-contain -hue-rotate-60"
          />
          <a
            href="https://github.com/tanavposwal"
            className="hover:-translate-y-1 hover:shadow-2xl transition-transform"
          >
            <div className="mx-auto flex w-full max-w-lg items-center justify-center">
              <div className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-xl border border-slate-800 p-[3px]">
                <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#9333ea_20deg,transparent_120deg)]"></div>
                <div className="relative z-20 flex w-full rounded-[0.60rem] bg-slate-900 px-5 py-2 text-lg font-semibold">
                  My Github
                </div>
              </div>
            </div>
          </a>
        </div>
        <MotionDiv
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{
            ease: "anticipate",
            duration: 0.3,
          }}
          viewport={{ amount: 0 }}
        >
          <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
            Explore The{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 inline-block text-transparent bg-clip-text font-black">
              Diverse Realms
            </span>{" "}
            <br /> of Anime Magic
          </h1>
        </MotionDiv>
      </div>
      <MotionDiv
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{
          ease: "easeInOut",
          duration: 0.3,
        }}
        viewport={{ amount: 0 }}
        className="lg:flex-1 relative w-full h-[50vh] justify-center"
      >
        <div>
          <Image
            src="/anime.png"
            alt="anime"
            fill
            className="object-contain skew-"
          />
        </div>
      </MotionDiv>
    </header>
  );
}

export default Hero;
