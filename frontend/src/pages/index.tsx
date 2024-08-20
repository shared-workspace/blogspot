"use client";
import Layout from "@/layouts";
import { bloggerHandler } from "@/service/blogger";
import Image from "next/image";
import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";

const Paragraph = tw.p`
  fixed left-0 top-0 md:-top-16
  flex items-center justify-center
  w-full h-16
  border-b border-gray-300 dark:border-neutral-800
  bg-gradient-to-b from-zinc-200 dark:bg-zinc-800/30 dark:from-inherit
  backdrop-blur-2xl
  transition-[top] duration-500
`;

const Code = tw.code`
  font-mono font-bold
`;

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const checkBloggerApi = async () => {
      try {
        const res = await bloggerHandler.isApiAvailable();
        console.log("Is Blogger API available?", res);
        const blog = await bloggerHandler.blogHandler.getBlog();
        console.log("Blog", blog.headers);
      } catch (error) {
        console.log("Error from Page.tsx");
        console.error(error);
      }
    };
    checkBloggerApi();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <Layout isLoading={isLoading} type="secondary">
        <Content />
      </Layout>
    </>
  );
}

// function Content() {
//   return (
//     <>
//       <main className="flex min-h-screen flex-col items-center justify-between p-24">
//         <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
//           {/* <Paragraph>
//           Get started by editing&nbsp;
//           <Code className="font-mono font-bold">src/app/page.tsx</Code>
//         </Paragraph> */}
//           {/* <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{" "}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div> */}
//         </div>

//         <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
//           <Image
//             className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//             src="/next.svg"
//             alt="Next.js Logo"
//             width={180}
//             height={37}
//             priority
//           />
//         </div>

//         <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
//           <a
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2 className="mb-3 text-2xl font-semibold">
//               Docs{" "}
//               <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//                 -&gt;
//               </span>
//             </h2>
//             <p className="m-0 max-w-[30ch] text-sm opacity-50">
//               Find in-depth information about Next.js features and API.
//             </p>
//           </a>

//           <a
//             href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2 className="mb-3 text-2xl font-semibold">
//               Learn{" "}
//               <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//                 -&gt;
//               </span>
//             </h2>
//             <p className="m-0 max-w-[30ch] text-sm opacity-50">
//               Learn about Next.js in an interactive course with&nbsp;quizzes!
//             </p>
//           </a>

//           <a
//             href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2 className="mb-3 text-2xl font-semibold">
//               Templates{" "}
//               <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//                 -&gt;
//               </span>
//             </h2>
//             <p className="m-0 max-w-[30ch] text-sm opacity-50">
//               Explore starter templates for Next.js.
//             </p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2 className="mb-3 text-2xl font-semibold">
//               Deploy{" "}
//               <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//                 -&gt;
//               </span>
//             </h2>
//             <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
//               Instantly deploy your Next.js site to a shareable URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>
//       <main className="flex min-h-screen flex-col items-center justify-between p-24">
//         <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
//           {/* <Paragraph>
//           Get started by editing&nbsp;
//           <Code className="font-mono font-bold">src/app/page.tsx</Code>
//         </Paragraph> */}
//           {/* <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{" "}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div> */}
//         </div>

//         <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
//           <Image
//             className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//             src="/next.svg"
//             alt="Next.js Logo"
//             width={180}
//             height={37}
//             priority
//           />
//         </div>

//         <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
//           <a
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2 className="mb-3 text-2xl font-semibold">
//               Docs{" "}
//               <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//                 -&gt;
//               </span>
//             </h2>
//             <p className="m-0 max-w-[30ch] text-sm opacity-50">
//               Find in-depth information about Next.js features and API.
//             </p>
//           </a>

//           <a
//             href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2 className="mb-3 text-2xl font-semibold">
//               Learn{" "}
//               <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//                 -&gt;
//               </span>
//             </h2>
//             <p className="m-0 max-w-[30ch] text-sm opacity-50">
//               Learn about Next.js in an interactive course with&nbsp;quizzes!
//             </p>
//           </a>

//           <a
//             href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2 className="mb-3 text-2xl font-semibold">
//               Templates{" "}
//               <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//                 -&gt;
//               </span>
//             </h2>
//             <p className="m-0 max-w-[30ch] text-sm opacity-50">
//               Explore starter templates for Next.js.
//             </p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2 className="mb-3 text-2xl font-semibold">
//               Deploy{" "}
//               <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//                 -&gt;
//               </span>
//             </h2>
//             <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
//               Instantly deploy your Next.js site to a shareable URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>
//       <main className="flex min-h-screen flex-col items-center justify-between p-24">
//         <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
//           {/* <Paragraph>
//           Get started by editing&nbsp;
//           <Code className="font-mono font-bold">src/app/page.tsx</Code>
//         </Paragraph> */}
//           {/* <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{" "}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div> */}
//         </div>

//         <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
//           <Image
//             className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//             src="/next.svg"
//             alt="Next.js Logo"
//             width={180}
//             height={37}
//             priority
//           />
//         </div>

//         <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
//           <a
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2 className="mb-3 text-2xl font-semibold">
//               Docs{" "}
//               <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//                 -&gt;
//               </span>
//             </h2>
//             <p className="m-0 max-w-[30ch] text-sm opacity-50">
//               Find in-depth information about Next.js features and API.
//             </p>
//           </a>

//           <a
//             href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2 className="mb-3 text-2xl font-semibold">
//               Learn{" "}
//               <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//                 -&gt;
//               </span>
//             </h2>
//             <p className="m-0 max-w-[30ch] text-sm opacity-50">
//               Learn about Next.js in an interactive course with&nbsp;quizzes!
//             </p>
//           </a>

//           <a
//             href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2 className="mb-3 text-2xl font-semibold">
//               Templates{" "}
//               <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//                 -&gt;
//               </span>
//             </h2>
//             <p className="m-0 max-w-[30ch] text-sm opacity-50">
//               Explore starter templates for Next.js.
//             </p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2 className="mb-3 text-2xl font-semibold">
//               Deploy{" "}
//               <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//                 -&gt;
//               </span>
//             </h2>
//             <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
//               Instantly deploy your Next.js site to a shareable URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>
//     </>
//   );
// }

function Content() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center">Welcome to Next.js</h1>
      <br />
      <br />
      <br />
      <p className="text-center">
        Get started by editing <code>src/app/page.tsx</code>
      </p>
      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore hic
        quod eius neque obcaecati aut! At obcaecati, voluptas harum cupiditate
        nemo sit assumenda ea reiciendis. Quibusdam adipisci architecto laborum
        dolor. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Inventore hic quod eius neque obcaecati aut! At obcaecati, voluptas
        harum cupiditate nemo sit assumenda ea reiciendis. Quibusdam adipisci
        architecto laborum dolor. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Inventore hic quod eius neque obcaecati aut! At
        obcaecati, voluptas harum cupiditate nemo sit assumenda ea reiciendis.
        Quibusdam adipisci architecto laborum dolor. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Inventore hic quod eius neque obcaecati
        aut! At obcaecati, voluptas harum cupiditate nemo sit assumenda ea
        reiciendis. Quibusdam adipisci architecto laborum dolor. Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Inventore hic quod eius
        neque obcaecati aut! At obcaecati, voluptas harum cupiditate nemo sit
        assumenda ea reiciendis. Quibusdam adipisci architecto laborum dolor.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore hic
        quod eius neque obcaecati aut! At obcaecati, voluptas harum cupiditate
        nemo sit assumenda ea reiciendis. Quibusdam adipisci architecto laborum
        dolor. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Inventore hic quod eius neque obcaecati aut! At obcaecati, voluptas
        harum cupiditate nemo sit assumenda ea reiciendis. Quibusdam adipisci
        architecto laborum dolor. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Inventore hic quod eius neque obcaecati aut! At
        obcaecati, voluptas harum cupiditate nemo sit assumenda ea reiciendis.
        Quibusdam adipisci architecto laborum dolor.
      </p>
      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore hic
        quod eius neque obcaecati aut! At obcaecati, voluptas harum cupiditate
        nemo sit assumenda ea reiciendis. Quibusdam adipisci architecto laborum
        dolor. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Inventore hic quod eius neque obcaecati aut! At obcaecati, voluptas
        harum cupiditate nemo sit assumenda ea reiciendis. Quibusdam adipisci
        architecto laborum dolor. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Inventore hic quod eius neque obcaecati aut! At
        obcaecati, voluptas harum cupiditate nemo sit assumenda ea reiciendis.
        Quibusdam adipisci architecto laborum dolor. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Inventore hic quod eius neque obcaecati
        aut! At obcaecati, voluptas harum cupiditate nemo sit assumenda ea
        reiciendis. Quibusdam adipisci architecto laborum dolor. Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Inventore hic quod eius
        neque obcaecati aut! At obcaecati, voluptas harum cupiditate nemo sit
        assumenda ea reiciendis. Quibusdam adipisci architecto laborum dolor.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore hic
        quod eius neque obcaecati aut! At obcaecati, voluptas harum cupiditate
        nemo sit assumenda ea reiciendis. Quibusdam adipisci architecto laborum
        dolor. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Inventore hic quod eius neque obcaecati aut! At obcaecati, voluptas
        harum cupiditate nemo sit assumenda ea reiciendis. Quibusdam adipisci
        architecto laborum dolor. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Inventore hic quod eius neque obcaecati aut! At
        obcaecati, voluptas harum cupiditate nemo sit assumenda ea reiciendis.
        Quibusdam adipisci architecto laborum dolor.
      </p>
      <br />
      <br />
      <br />
      <div className="">
        <Image src={"/next.svg"} alt="Next.js Logo" width={180} height={37} className="invert" />
      </div>
    </>
  );
}
