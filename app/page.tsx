import LoadMore from "../components/LoadMore";
import { fetchAnime } from "./action";

async function Home() {
  // this is server action in action
  const data = await fetchAnime(1);

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>

      <section className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 gap-10">
        {data}
      </section>
      <LoadMore />
    </main>
  );
}

export default Home;
