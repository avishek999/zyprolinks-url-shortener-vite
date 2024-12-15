import Nav from "@/components/Nav/Nav";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Input } from "@/components/ui/input";

const LandingPage = () => {
  return (
    <>
      <Nav />

      <section className="h-screen  px-6 lg:px-0   max-lg:overflow-x-hidden ">
        <div className="flex flex-col lg:flex-row justify-center space-y-12  items-center lg:px-24 ">
          {/* Hero Section */}
          <div className="relative flex mt-24 lg:mt-0 lg:h-full flex-col space-y-10 w-full backdrop-blur-lg">
            {/* Background Image */}
            <div className="absolute inset-0  -z-10 bg-[url('https://cdn3d.iconscout.com/3d/premium/thumb/abstract-shape-3d-icon-download-in-png-blend-fbx-gltf-file-formats--element-iridescent-object-pack-art-icons-5818779.png?f=webp')] w-[600px] bg-center blur-2xl  "></div>

            {/* Main Content */}
            <h1 className="text-4xl lg:w-[600px] text-[--text] font-extrabold tracking-tight leading-snug lg:leading-snug lg:text-5xl font-oswald">
              Transform Your Ideas, Simplify Your Path –<br />
              <span className="dark:text-outline-white text-outline-black  antialiased hover:subpixel-antialiased  tracking-wider underline decoration-blue-400    underline-offset-8">
                Start Here!
              </span>{" "}
              👇
            </h1>

            <Input className="w-[70%]" placeholder="Write your full url here" />

            <div className="w-[150px] h-[50px] rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center cursor-pointer z-1">
              <button className="z-2 bg-black px-4 w-[145px] h-[45px] text-white rounded-lg hover:bg-gradient-to-r from- to-blue-500 transition-colors duration-300">
                Make it Short!
              </button>
            </div>
          </div>

          <div className="relative">
            {/* Top image */}
            <img
              className="rounded-3xl shadow-2xl relative hover:scale-105 transition-all duration-500 z-10"
              width={700}
              src="https://flux-image.com/_next/image?url=https%3A%2F%2Fai.flux-image.com%2Fflux%2F6968f255-5890-4204-a07f-cc15e2483b98.jpg&w=3840&q=75"
              alt=""
            />
            {/* Blurred background image */}
            <img
              className="rounded-3xl shadow-2xl absolute top-0 left-0 blur-xl animate-pulse   z-0"
              width={900}
              src="https://flux-image.com/_next/image?url=https%3A%2F%2Fai.flux-image.com%2Fflux%2F6968f255-5890-4204-a07f-cc15e2483b98.jpg&w=3840&q=75"
              alt=""
            />
          </div>
        </div>

        {/* Faq Section */}

        <div className="mt-24">
          <h1 className="scroll-m-20pb-2 text-3xl lg:text-4xl font-semibold tracking-tight first:mt-0 mb-10 lg:text-center">
            Why choose <span className="text-blue-400"> ZyroLink?</span>
          </h1>

          <div className="w-full lg:flex flex-col justify-center items-center">
            <Accordion type="single" collapsible className="lg:w-[600px] ">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
