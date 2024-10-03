import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center font-[family-name:var(--font-dm-sans)] bg-[#f5f5f5] p-4 lg:pt-[84px] lg:pb-[64px]">
      <div className="bento-grid grid h-full lg:grid-cols-[minmax(0,250px)_repeat(2,minmax(0,260px))_minmax(0,250px)] lg:grid-rows-[minmax(0,320px)_minmax(0,70px)_minmax(0,140px)_minmax(0,80px)_minmax(0,140px)] gap-8 md:grid-cols-2">
        <div className="box7 rounded-xl lg:col-span-1 lg:row-span-2 bg-[#faeee2] p-5 md:pb-1 md:p-8 flex flex-col md:items-center ">
          <p className="text-3xl md:text-[2rem] lg:text-4xl font-medium tracking-tight md:tracking-tighter pb-5 lg:pt-10">
            Create and schedule content{" "}
            <span className="italic  text-[#7651dc]">quicker.</span>
          </p>
          <Image
            src="/assets/illustration-create-post.webp"
            alt="Illustration of a button to create a new post"
            width={230}
            height={100}
            className="max-w-48"
          />
        </div>
        <div className="box1 rounded-xl lg:col-span-2 lg:row-span-1 bg-[#7651dc] flex flex-col justify-center items-center py-10 px-6 md:p-4 gap-6">
          <h1 className="font-medium text-5xl md:text-[3.5rem] text-white text-center leading-[2.5rem] md:leading-none tracking-tighter md:tracking-normal">
            Social Media <span className="text-[#fdcb6a]">10x </span>
            <span className="italic">Faster </span>
            with AI
          </h1>
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/assets/illustration-five-stars.webp"
              alt="Five stars representing customer satisfaction"
              width={200}
              height={100}
              aria-hidden="true"
            />
            <p className="text-white text-lg">Over 4,000 5-star reviews</p>
          </div>
        </div>

        <div className="box4 rounded-xl lg:col-span-1 lg:row-span-3 bg-[#dcd1fc] relative overflow-hidden flex flex-col justify-between py-8 md:py-12 px-4 md:px-6 gap-6 md:gap-4 lg:gap-0">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight md:tracking-tighter text-center lg:text-left lg:leading-tight">
            Schedule to social media.
          </h2>
          <Image
            src="/assets/illustration-schedule-posts.webp"
            alt="Illustration of a weekly schedule showing the best times to post"
            width={250}
            height={100}
            className="lg:absolute lg:left-[5rem] lg:bottom-[35%] lg:scale-[1.4] lg:scale-y-[1.35] mx-auto w-96"
          />
          <p className="text-xl  tracking-tighter leading-[1em] text-center lg:text-left ">
            Optimize post timings to publish content at the perfect time for
            your audience.
          </p>
        </div>

        <div className="box8 rounded-xl lg:col-span-1 lg:row-span-3 lg:row-start-3 bg-[#ffcc69] flex flex-col justify-between p-5 md:p-6 gap-4">
          <p className="text-3xl md:text-4xl font-medium tracking-tight md:tracking-tighter">
            Write your content using AI.
          </p>
          <Image
            src="/assets/illustration-ai-content.webp"
            alt="Illustration representing AI content generation"
            width={300}
            height={100}
            className="md:mx-auto max-w-52 lg:scale-[1.05] mb-3"
          />
        </div>

        <div className="box2 rounded-xl lg:col-span-1 lg:row-span-2 bg-[#fff] relative overflow-hidden p-4 ">
          <Image
            src="/assets/illustration-multiple-platforms.webp"
            alt="Illustration of multiple social media platforms"
            width={300}
            height={100}
            className="lg:absolute lg:left-[3.5rem] lg:top-8 lg:scale-125"
          />
          <p className="text-2xl md:text-[2rem] font-medium tracking-tight md:tracking-tighter leading-[.9em] pt-5 md:pt-8 lg:pt-[3.0em] lg:p-0 lg:pl-2">
            Manage multiple accounts and platforms.
          </p>
        </div>

        <div className="box3 rounded-xl lg:col-span-1 lg:row-span-2 bg-[#ffcc69] relative overflow-hidden flex flex-col px-6">
          <p className="text-2xl md:text-[2rem] tracking-tight md:tracking-tighter leading-[.9em] font-medium  py-4 lg:pt-6">
            Maintain a consistent posting schedule.
          </p>
          <Image
            src="/assets/illustration-consistent-schedule.webp"
            alt="Illustration of a weekly posting schedule"
            width={210}
            height={100}
            className="lg:absolute lg:bottom-[-4.5em] lg:left-1/2 lg:-translate-x-1/2 md:mt-auto md:w-18 lg:w-54"
          />
        </div>

        <div className="box6 rounded-xl lg:col-span-1 lg:row-span-2 bg-[#fff] p-6 flex flex-col justify-between">
          <p className="text-lg pb-4 md:pb-0">
            <span className="font-medium text-5xl md:text-[4rem] block pb-2 lg:pb- tracking-tighter ">
              &gt;56%
            </span>
            faster audience growth
          </p>
          <Image
            src="/assets/illustration-audience-growth.webp"
            alt="Avatars symbolizing audience growth"
            width={180}
            height={100}
          />
        </div>

        <div className="box5 rounded-xl lg:col-span-2 lg:row-span-2 bg-[#7651dc] flex flex-col items-center lg:flex-row justify-center p-6 gap-10 md:gap-4">
          <Image
            src="/assets/illustration-grow-followers.webp"
            alt="Graph showing follower growth"
            width={220}
            height={100}
          />
          <p className="font-medium text-3xl md:text-[2.4rem] text-white tracking-tighter leading-none px-6 md:px-0 text-center md:text-left">
            Grow followers with non-stop content.
          </p>
        </div>
      </div>
    </main>
  );
}
