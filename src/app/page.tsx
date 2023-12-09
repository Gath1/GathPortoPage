"use client"

import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillGoogleCircle,  
} from "react-icons/ai"; 

import Image from "next/image";
import deved from 'public/dev-ed-wave.png'; 
import design from 'public/design.png';
import code from 'public/code.png';
import consulting from 'public/consulting.png';
import web1 from "public/web1gat.png";
import web2 from "public/web2gat.png";
import web3 from "public/web3gat.png";
import web4 from "public/web4gat.png";
import paper from "public/papergat.png";
import { useState } from "react";

export default function Home() {
  const [darkMode,setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
          <title>Gathan Al Dhafa Portofolio</title>
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 h-fit dark:bg-gray-900">
          <section className=" h-fit">
            <nav className="py-10 mb-12\ flex justify-between">
              <h1 className="text-xl font-burtons pt-2">GATH PORTO</h1>
              <ul className="flex items-center">
                {/* <li>
                  <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-xl"/>
                </li> */}
                <li className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 ml-8 rounded-md"><a href="https://www.canva.com/design/DAF2GHlV5-U/cF7ftRQDTYiWCxm7M1j2Ng/view?utm_content=DAF2GHlV5-U&utm_campaign=designshare&utm_medium=link&utm_source=editor">Resume</a></li>
              </ul>
            </nav>
            <div className="text-center p-10">
              <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Gathan Al Dhafa</h2>
              <h3 className="text-2xl font-bold py-2 md:text-3xl">Front-End Developer</h3>
              <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
                 <span className="font-bold">I`m Gathan Al Dhafa</span>, a <span className="font-bold">Front-End Developer </span>from <span className="font-bold">Binus University. 1</span> 
                 Dive into my work to see the seamless blend of design and technology, showcasing my passion for crafting user-centric web experiences. 
                 Explore the intersection of creativity and functionality with me!
              </p>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
              <a href="https://github.com/Gath1">
                <AiFillGithub/>
              </a>
              <a href="https://mail.google.com/mail/u/0/#inbox">
                <AiFillGoogleCircle/>
              </a>
              <a href="https://www.linkedin.com/in/gathan-al-dhafa-8b59391a4/">
                <AiFillLinkedin/>
              </a>
            </div>
            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
              <Image src= {deved} alt="" layout="fill" objectFit="cover"/>
            </div>
          </section>

          {/* <section className="h-fit">
            <div>
              <h3 className="text-3xl pt-24">Services I offer</h3>
              <p className="text-md py-2 leading-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur facere, autem dolorem at molestias velit, vel laboriosam ullam hic quod, dignissimos obcaecati sunt ex laborum eos aspernatur id nemo perferendis.
              </p>
              <p className="text-md py-2 leading-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur facere, autem dolorem at molestias velit, vel laboriosam ullam hic quod, dignissimos obcaecati sunt ex laborum eos aspernatur id nemo perferendis.
              </p>
            </div>
            <div className="lg:flex gap-10">
              <div className="text-center shadow-lg p-10 rounded-xl my-10">
                <div className="flex justify-center">
                  <Image src={design} alt="" width={100} height={100}/>
                </div>
                <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Design</h3>
                <p className="py-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, nemo perspiciatis. Sunt ratione vel ea atque tempora ut quod. In expedita dolores autem hic labore reprehenderit eaque ea soluta debitis?
                </p>
                <h4 className="py-4 text-teal-600">Design tools I use</h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Illustrator</p>
                <p className="text-gray-800 py-1">Figma</p>
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl my-10">
                <div className="flex justify-center">
                  <Image src={code} alt="" width={100} height={100}/>
                </div>
                <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Design</h3>
                <p className="py-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, nemo perspiciatis. Sunt ratione vel ea atque tempora ut quod. In expedita dolores autem hic labore reprehenderit eaque ea soluta debitis?
                </p>
                <h4 className="py-4 text-teal-600">Design tools I use</h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Illustrator</p>
                <p className="text-gray-800 py-1">Figma</p>
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl my-10">
                <div className="flex justify-center">
                  <Image src={consulting} alt="" width={100} height={100}/>
                </div>
                <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Design</h3>
                <p className="py-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, nemo perspiciatis. Sunt ratione vel ea atque tempora ut quod. In expedita dolores autem hic labore reprehenderit eaque ea soluta debitis?
                </p>
                <h4 className="py-4 text-teal-600">Design tools I use</h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Illustrator</p>
                <p className="text-gray-800 py-1">Figma</p>
              </div>
            </div>
          </section> */}

          <section className="pt-40 pb-20">
            <div className="text-3xl text-center py-8">
              My Skills
            </div>
            <div className="flex justify-center pb-10">
              <ul className="flex flex-wrap gap-2 max-w-3xl justify-center ">
                <li className="border-2 rounded-xl bg-white px-3 py-3">
                  HTML
                </li>
                <li className="border-2 rounded-xl px-3 py-3">
                  CSS
                </li>
                <li className="border-2 rounded-xl px-3 py-3">
                  JavaScript
                </li>
                <li className="border-2 rounded-xl px-3 py-3">
                  React
                </li>
                <li className="border-2 rounded-xl px-3 py-3">
                  Next.js
                </li>
                <li className="border-2 rounded-xl px-3 py-3">
                  Python
                </li>
                <li className="border-2 rounded-xl px-3 py-3">
                  Java
                </li>
                <li className="border-2 rounded-xl px-3 py-3">
                  C/C++
                </li>
                <li className="border-2 rounded-xl px-3 py-3">
                  Critical Thinking
                </li>
                <li className="border-2 rounded-xl px-3 py-3">
                  Communication
                </li>
                <li className="border-2 rounded-xl px-3 py-3">
                  Leadership
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div>
              <h3 className="text-3xl py-1 text-center ">Portofolio</h3>
              <p></p>
            </div>
            <div className="">
              <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                <div className="group gap-10 max-w-xl mb-3 sm:mb-8 last:mb-0">
                    <section className="bg-gray-100 max-w-[36rem] border border-black/5 rounded-lg overflow-hidden sm:pr-6 relative sm:h-[22rem] hover:bg-gray-200 transition sm:group-even:pl-6 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                      <div className="pt-6 pb-8 px-6 sm:pl-8 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[15rem]">
                        <h3 className="text-xl font-semibold">Studinesia E-Learning Website</h3>
                        <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                          This is an Entrepreneurship project. Our team decided to create an E-Learning website, and this is my take on that.
                        </p>
                        <ul className="flex flex-wrap mt-3 gap-2 sm:mt-auto">
                          <li className="bg-black/[0.7] px-3 py-1 text-[0.8rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">HTML</li>
                          <li className="bg-black/[0.7] px-3 py-1 text-[0.8rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">CSS</li>
                          <li className="bg-black/[0.7] px-3 py-1 text-[0.8rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">React.Js</li>
                          <li className="bg-black/[0.7] px-3 py-1 text-[0.8rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">Tailwind</li>
                        </ul>
                      </div>
                      <Image
                        src={web1}
                        alt="Project I worked on"
                        loading="lazy"
                        width="715"
                        height="850"
                        decoding="async"
                        data-nimg="1"
                        className="absolute hidden sm:block top-6 -right-48 w-[28rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:-rotate-2 group-even:group-hover:translate-x-2 group-even:group-hover:translate-y-2 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-48"
                        style={{ color: "transparent" }}
                      />
                    </section>
                  </div>

                  <div className="group max-w-xl mb-3 sm:mb-8 last:mb-0">
                    <section className="bg-gray-100 max-w-[36rem] border border-black/5 rounded-lg overflow-hidden sm:pr-6 relative sm:h-[22rem] hover:bg-gray-200 transition sm:group-even:pl-6 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                      <div className="pt-6 pb-8 px-6 sm:pl-8 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[15rem]">
                        <h3 className="text-xl font-semibold">FoundIt Lost n Found Web App</h3>
                        <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                          A Software Engineering project, created to help people to find their lost belongings.
                        </p>
                        <ul className="flex flex-wrap mt-3 gap-2 sm:mt-auto">
                          <li className="bg-black/[0.7] px-3 py-1 text-[0.8rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">HTML</li>
                          <li className="bg-black/[0.7] px-3 py-1 text-[0.8rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">CSS</li>
                          <li className="bg-black/[0.7] px-3 py-1 text-[0.8rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">Tailwind</li>
                          <li className="bg-black/[0.7] px-3 py-1 text-[0.8rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">JavaScript</li>
                          <li className="bg-black/[0.7] px-3 py-1 text-[0.8rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">C#</li>
                          <li className="bg-black/[0.7] px-3 py-1 text-[0.8rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">.NET</li>
                        </ul>
                      </div>
                      <Image
                        src={web2}
                        alt="Project I worked on"
                        loading="lazy"
                        width="715"
                        height="850"
                        decoding="async"
                        data-nimg="1"
                        className="absolute hidden sm:block top-6 -right-48 w-[28rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:-rotate-2 group-even:group-hover:translate-x-2 group-even:group-hover:translate-y-2 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-48"
                        style={{ color: "transparent" }}
                      />
                    </section>
                  </div>

                  <div className="group max-w-xl mb-3 sm:mb-8 last:mb-0">
                    <section className="bg-gray-100 max-w-[36rem] border border-black/5 rounded-lg overflow-hidden sm:pr-6 relative sm:h-[22rem] hover:bg-gray-200 transition sm:group-even:pl-6 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                      <div className="pt-6 pb-8 px-6 sm:pl-8 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[15rem]">
                        <h3 className="text-xl font-semibold">Trip Traveling Website</h3>
                        <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                          A Human Computer Interaction project, created to showcase and book travel package to Mandalika.
                        </p>
                        <ul className="flex flex-wrap mt-3 gap-2 sm:mt-auto">
                          <li className="bg-black/[0.7] px-3 py-1 text-[0.8rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">HTML</li>
                          <li className="bg-black/[0.7] px-3 py-1 text-[0.8rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">CSS</li>
                          <li className="bg-black/[0.7] px-3 py-1 text-[0.8rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">JavaScript</li>
                          <li className="bg-black/[0.7] px-3 py-1 text-[0.8rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">Bootstrap</li>
                        </ul>
                      </div>
                      <Image
                        src={web3}
                        alt="Project I worked on"
                        loading="lazy"
                        width="715"
                        height="850"
                        decoding="async"
                        data-nimg="1"
                        className="absolute hidden sm:block top-6 -right-48 w-[28rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:-rotate-2 group-even:group-hover:translate-x-2 group-even:group-hover:translate-y-2 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-48"
                        style={{ color: "transparent" }}
                      />
                    </section>
                  </div>

                  <div className="group max-w-xl mb-3 sm:mb-8 last:mb-0">
                    <section className="bg-gray-100 max-w-[36rem] border border-black/5 rounded-lg overflow-hidden sm:pr-6 relative sm:h-[22rem] hover:bg-gray-200 transition sm:group-even:pl-6 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                      <div className="pt-6 pb-8 px-6 sm:pl-8 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[15rem]">
                        <h3 className="text-xl font-semibold">ForSkin Cosmetic Website</h3>
                        <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                          A Human Computer Interaction project, an E-Commerce website to purchase  
                        </p>
                        <ul className="flex flex-wrap mt-3 gap-2 sm:mt-auto">
                          <li className="bg-black/[0.7] px-3 py-1 text-[0.8rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">HTML</li>
                          <li className="bg-black/[0.7] px-3 py-1 text-[0.8rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">CSS</li>
                          <li className="bg-black/[0.7] px-3 py-1 text-[0.8rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">JavaScript</li>
                          <li className="bg-black/[0.7] px-3 py-1 text-[0.8rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">Tailwind</li>
                        </ul>
                      </div>
                      <Image
                        src={web4}
                        alt="Project I worked on"
                        loading="lazy"
                        width="715"
                        height="850"
                        decoding="async"
                        data-nimg="1"
                        className="absolute hidden sm:block top-6 -right-48 w-[28rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:-rotate-2 group-even:group-hover:translate-x-2 group-even:group-hover:translate-y-2 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-48"
                        style={{ color: "transparent" }}
                      />
                    </section>
                  </div>

                  <div className="group max-w-xl mb-3 sm:mb-8 last:mb-0">
                    <section className="bg-gray-100 max-w-[36rem] border border-black/5 rounded-lg overflow-hidden sm:pr-6 relative sm:h-[22rem] hover:bg-gray-200 transition sm:group-even:pl-6 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                      <div className="pt-6 pb-8 px-6 sm:pl-8 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[15rem]">
                        <h3 className="text-xl font-semibold">Paper on Ways to detect water pollution using AI</h3>
                        <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                          Our team created paper on Ways to detect water pollution using AI technique 
                        </p>
                        <ul className="flex flex-wrap mt-3 gap-2 sm:mt-auto">
                          <li className="bg-black/[0.7] px-3 py-1 text-[0.8rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">AI</li>
                          <li className="bg-black/[0.7] px-3 py-1 text-[0.8rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">AR</li>
                          <li className="bg-black/[0.7] px-3 py-1 text-[0.8rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">Embedded System</li>
                          <li className="bg-black/[0.7] px-3 py-1 text-[0.8rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">Docs</li>
                        </ul>
                      </div>
                      <Image
                        src={paper}
                        alt="Project I worked on"
                        loading="lazy"
                        width="715"
                        height="850"
                        decoding="async"
                        data-nimg="1"
                        className="absolute hidden sm:block top-6 -right-48 w-[28rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:-rotate-2 group-even:group-hover:translate-x-2 group-even:group-hover:translate-y-2 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-48"
                        style={{ color: "transparent" }}
                      />
                    </section>
                  </div>
            </div>    
            </div>
          </section>
          
      </main>
    </div>
  )
}
