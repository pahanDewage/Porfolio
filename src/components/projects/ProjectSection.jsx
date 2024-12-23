"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

import coverImage1 from "@/assets/images/fashionCenterCover.png"
import coverImage2 from "@/assets/images/eventCenterCover.png"
import coverImage3 from "@/assets/images/scaleafyCover.png"
import coverImage5 from "@/assets/images/FinancialSiteCover.png"
import coverImage4 from "@/assets/images/panchikawattaCover.png"
import coverImage6 from "@/assets/images/portfolioCover.png"

import panchikawatta01 from"@/assets/images/panchikawatta01.jpg"
import panchikawatta02 from"@/assets/images/panchikawatta02.jpg"
import panchikawatta03 from"@/assets/images/panchikawatta03.png"

import zxbizlk from"@/assets/images/2xbizlk.png"

import eventcenter01 from "@/assets/images/event-center.jpg"
import eventcenter02 from "@/assets/images/event-center02.jpg"
import eventcenter03 from "@/assets/images/event-center03.jpg"

import scaleafy01 from"@/assets/images/scaleafy.png"
import scaleafy02 from"@/assets/images/scaleafy01.jpg"
import scaleafy03 from"@/assets/images/scaleafy02.jpg"

import fashionhouse01 from "@/assets/images/Fashion-house.jpg"
import fashionhouse02 from "@/assets/images/Fashion-house02.jpg"
import fashionhouse03 from "@/assets/images/Fashion-house03.jpg"

import portfolio01 from "@/assets/images/portfolio01.png"
import portfolio02 from "@/assets/images/portfolio02.png"
import portfolio03 from "@/assets/images/portfolio03.png"











export function AppleCardsCarouselDemo() {
  
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section id="projects" className="w-full h-full py-12 bg-[#0f1624db]">
    (<div className="w-full h-full py-12">
      <h2
        className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-gray-100 dark:text-gray-100 font-sans">
        Projects
      </h2>
      <Carousel items={cards} />
    </div>)
    </section>
  );
}

const Panchikawatta = () => {
    const images = [
      {
        src: panchikawatta01,
        alt: "Sample Image of The Application",
      },
      {
        src: panchikawatta02,
        alt: "Sample Image of The Application"
      },
      {
        src: panchikawatta03,
        alt: "Sample Image of The Application"
      },
    ];
  
    return (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto text-center mb-8">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Panchikawatta,Digital space for sparepart market.
          </span>{" "}
          The app goes beyond typical e-commerce functionalities by engaging users with unique features like service
           reminders for their vehicles. This project highlights my ability to integrate practical utilities and innovative
            engagement strategies into a mobile platform.
          <p> <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Tech Stack :
          </span> flutter,Node js,Postgresql</p>
          {/* <a
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          GitHub Link
        </a> */}
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {images.map((image, index) => (
            <div key={`image-${index}`} className="w-full md:w-1/3 flex justify-center">
              <Image
                src={image.src}
                alt={image.alt}
                height={300}
                width={300}
                className="object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

const EventCenter = () => {
    const images = [
      {
        src: eventcenter01,
        alt: "Sample Image of The Website",
      },
      {
        src: eventcenter02,
        alt: "Sample Image of The Website"
      },
      {
        src: eventcenter03,
        alt: "Sample Image of The Website"
      },
    ];
  
    return (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto text-center mb-8">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
          The Event Center,a vibrant nightclub destination.
          </span>{" "}
          The site enables users to explore menus, stay updated on upcoming events, and discover exclusive promotions. 
          <p><span className="font-bold text-neutral-700 dark:text-neutral-200">
            Tech Stack :
          </span> Next js,Tailwing CSS,Acernity</p>
          <a
          href="https://www.theeventcenterms.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
        www.theeventcenterms.com
        </a>


        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {images.map((image, index) => (
            <div key={`image-${index}`} className="w-full md:w-1/3 flex justify-center">
              <Image
                src={image.src}
                alt={image.alt}
                height={300}
                width={300}
                className="object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };  

const Scaleafy = () => {
    const images = [
      {
        src: scaleafy01,
        alt: "Sample Image of The Website",
      },
      {
        src: scaleafy02,
        alt: "Sample Image of The Website"
      },
      {
        src: scaleafy03,
        alt: "Sample Image of The Website"
      },
    ];
  
    return (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto text-center mb-8">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Scalefy: Your ultimate digital space to connect and collaborate.
          </span>{" "}
          Whether you are brainstorming the next big idea, organizing your workflow,
           or simply connecting with like-minded individuals, Scalefy is here to streamline your experience.
           <p><span className="font-bold text-neutral-700 dark:text-neutral-200">
            Tech Stack :
          </span> Next js,Tailwing CSS</p>
          <a
          href="https://www.scaleafy.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          www.scaleafy.com
        </a>
        
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {images.map((image, index) => (
            <div key={`image-${index}`} className="w-full md:w-1/3 flex justify-center">
              <Image
                src={image.src}
                alt={image.alt}
                height={300}
                width={300}
                className="object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

const Bizlk = () => {
    const images = [
      {
        src: zxbizlk,
        alt: "Sample Image of The Website",
      },
    ];
  
    return (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto text-center mb-8">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
          2xbizlk,A cutting-edge platform tailored for investors in Sri Lanka.
          </span>{" "}
          This website will deliver comprehensive investment information and use machine learning to categorize companies,
           providing data-driven insights to optimize investment strategies. Currently in its development phase,
            this project reflects my focus on innovation and value creation in the financial sector.
          <p><span className="font-bold text-neutral-700 dark:text-neutral-200">
            Tech Stack :
          </span> React js,Tailwing CSS,Python,Postgresql</p>
          {/* <a
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          GitHub Link
        </a> */}

        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {images.map((image, index) => (
            <div key={`image-${index}`} className="w-full md:w-1/3 flex justify-center">
              <Image
                src={image.src}
                alt={image.alt}
                height={300}
                width={300}
                className="object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

const FashionHouse = () => {
    const images = [
      {
        src: fashionhouse01,
        alt: "Sample Image of The Website",
      },
      {
        src: fashionhouse02,
        alt: "Sample Image of The Website"
      },
      {
        src: fashionhouse03,
        alt: "Sample Image of The Website"
      },
    ];
  
    return (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto text-center mb-8">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Fashion House,An e-commerce platform dedicated to women clothing.
          </span>{" "}
          This site is designed to support a unique business model where the owner is the sole seller,
           while users can register as buyers to shop from a curated selection of products.
            The platform si secure, user-friendly, 
            and business-centric e-commerce solutions tailored to client requirements.
          <p><span className="font-bold text-neutral-700 dark:text-neutral-200">
            Tech Stack :
          </span> React js,Tailwing CSS,Node js,Mongo DB</p>
          {/* <a
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          GitHub Link
        </a> */}
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {images.map((image, index) => (
            <div key={`image-${index}`} className="w-full md:w-1/3 flex justify-center">
              <Image
                src={image.src}
                alt={image.alt}
                height={300}
                width={300}
                className="object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

const Portfolio = () => {
    const images = [
      {
        src: portfolio03,
        alt: "Sample Image of The Website",
      },
      {
        src: portfolio02,
        alt: "Sample Image of The Website"
      },
      {
        src: portfolio01,
        alt: "Sample Image of The Website"
      },
    ];
  
    return (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto text-center mb-8">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Portfolio,Website to showcase my professional journey and projects.
          </span>{" "}
          The site features functionality for users to contact me directly via email,
           download my CV, and explore a detailed portfolio of the work I have accomplished.
            This project highlights my expertise in creating impactful and interactive web experiences.
          <p><span className="font-bold text-neutral-700 dark:text-neutral-200">
            Tech Stack :
          </span> Next js,Tailwing CSS</p>
          {/* <a
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          GitHub Link
        </a> */}
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {images.map((image, index) => (
            <div key={`image-${index}`} className="w-full md:w-1/3 flex justify-center">
              <Image
                src={image.src}
                alt={image.alt}
                height={300}
                width={300}
                className="object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
const data = [
  {
    category: "Web",
    title: "Fashion House",
    src: coverImage1,
    content: <FashionHouse />,
  },
  {
    category: "Web",
    title: "The Event Center",
    src: coverImage2,
    content: <EventCenter />,
  },
  {
    category: "Web",
    title: "Scaleafy",
    src: coverImage3,
    content: <Scaleafy />,
  },

  {
    category: "Mobile",
    title: "Panchikawatta",
    src: coverImage4,
    content: <Panchikawatta />,
  },
  {
    category: "Web",
    title: "2xbizlk.lk",
    src: coverImage5,
    content: <Bizlk />,
  },
  {
    category: "Web",
    title: "Portfolio",
    src: coverImage6,
    content: <Portfolio />,
  },
];
