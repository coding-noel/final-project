import { featuredPoem, featuredContributor, featuredContributorBlurb, fullPoems, people, categories, popularcategories } from '@/data/elements';
import Link from './Link'
import { truncateSm } from '@/utils/utils';

export default function HomeComponent() {
  return (
    <div className="px-1 text-blue-700 max-w-600 mx-auto">

      <section>
        <h3 className="text-2xl font-semibold text-blue-500 pb-2 px-3">Welcome!</h3>
        <p className="px-5">
          Whether you're a budding poet ready to share your latest masterpiece, 
          a creative spirit trying something new, or someone who simply loves reading poetry, 
          you’re in the right place. Not sure where to begin? If you’d like to add a poem of 
          your own, visit our <Link href="contribute">contribute</Link> page. Curious about 
          our community? Meet other <Link href="contributors">contributors</Link>. Looking 
          for something specific? Explore our poetry <Link href="categories">categories</Link>. 
          Not sure what you’re looking for? That's alright, you can <Link href="poems">browse</Link> our full catalogue.
        </p>
      </section>

      <hr className="bg-blue-300 h-2 mt-10 border-none rounded-full" />


      <section className="my-16 px-3">
        <h2 className="text-2xl font-semibold text-indigo-500 mb-6">Featured Poems</h2>

        <div className="px-2 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="p-4 rounded-lg shadow-md bg-white border border-indigo-100"
            >
              <h3 className="text-lg font-semibold text-indigo-500 mb-2">
                {fullPoems[featuredPoem[i]].title}
              </h3>
              <pre className="text-gray-700 font-serif">
                {truncateSm(fullPoems[featuredPoem[i]].poemLines)}
              </pre>
              <a href={"poem/" + fullPoems[featuredPoem[i]].id} className="inline-block mt-3 text-indigo-500 font-medium hover:underline">
                Read more →
              </a>
            </div>
          ))}
        </div>
      </section>


      <section className="my-20 px-3">
        <h2 className="text-2xl font-semibold text-green-400 mb-6">
          Contributor Spotlight
        </h2>

        <div className="mx-2 p-6 bg-green-50 border border-green-200 rounded-lg shadow-sm max-w-2xl">
          <h3 className="text-xl font-semibold text-green-600">
            Featured Contributor
          </h3>

          <p className="text-gray-700 mt-2 font-serif">
            <span className="font-semibold text-green-500">{people[featuredContributor].name} </span> 
            {featuredContributorBlurb}
          </p>

          <a href={"people/" + people[featuredContributor].id} className="inline-block mt-4 bg-green-400 text-white px-4 py-1.5 rounded-md shadow hover:bg-green-500">
            View {people[featuredContributor].firstName}’s poems
          </a>
        </div>
      </section>



      <section className="my-20 px-3">
        <h2 className="text-2xl font-semibold text-blue-400 mb-6">Popular Categories</h2>

        <div className="px-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {popularcategories.map(({ id, category}, index) => (
            <a
              key={index}
              href={"category/" + id}
              className="p-4 rounded-lg bg-white border border-blue-100 shadow hover:shadow-md transition cursor-pointer"
            >
              <p className="text-blue-400 font-medium">{category}</p>
            </a>
          ))}
        </div>
      </section>


      <section className="my-20 px-3">
        <h2 className="text-2xl font-semibold text-indigo-400 mb-6">
          To get started
        </h2>

        <div className="px-2 grid gap-6 sm:grid-cols-3">
          <div className="p-5 bg-stone-50 rounded-lg border-6 border-indigo-300 shadow-sm">
            <h3 className="font-semibold text-indigo-600 mb-2">1. Write</h3>
            <p className="text-gray-700 font-serif">
              Create a poem—short or long, free verse or structured.
            </p>
          </div>

          <a href="contribute" className="p-5 bg-stone-50 rounded-lg border-6 border-blue-300 shadow-sm">
            <h3 className="font-semibold text-blue-600 mb-2">2. Share</h3>
            <p className="text-gray-700 font-serif">
              Submit it to Poem Collab and let others read it.
            </p>
          </a>

          <a href="poems" className="p-5 bg-stone-50 rounded-lg border-6 border-green-300 shadow-sm">
            <h3 className="font-semibold text-green-600 mb-2">3. Explore</h3>
            <p className="text-gray-700 font-serif">
              Browse poems from writers with all kinds of different styles and messages.
            </p>
          </a>
        </div>
      </section>

    </div>
  );
}