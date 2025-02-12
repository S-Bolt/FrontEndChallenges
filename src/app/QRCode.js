/* eslint-disable react/no-unescaped-entities */
import { faCogs, faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export function QRCode() {
  return (
    <div className=" my-12 ">
      {/* Component container */}
      <div className=" grid md:grid-cols-2 gap-8 w-full ">
        {/* Left Side */}
        <div className="row-span-1 bg-[#FDFDFD] rounded-tr-[3rem] flex flex-col px-[5rem] pt-6 text-left ">
          <div className="-mt-[6rem] -ml-12">
            <Image
              src="/Group357.png"
              alt="Favicon"
              width={150}
              height={150}
              className="mb-4"
              style={{ boxShadow: "none" }}
            />
          </div>
          <div className="">
            <h1 className="text-3xl text-[#3E54A3] mt-12">QR code component</h1>
            <p className="my-6">
              This is a Figma design file or a Frontend Mentor challenge. Figma
              is a design tool professional teams use to collaborate on
              projects. Need help using Figma?{" "}
              <a
                className="font-bold"
                href="https://www.frontendmentor.io/articles/figma-for-developers-how-to-work-with-a-design-file-m6CZKZ1rC1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read our Figma for developers article.
              </a>
            </p>
          </div>

          <div>
            <div className=" bg-slate-200 border-l-8 border-t-[16px] border-r-8 border-black rounded-t-lg  h-96 mt-6 flex justify-center items-center">
              <div className="bg-white p-4 rounded-lg shadow-md max-w-64 scale-50">
                <Image
                  src="/image-qr-code.png"
                  alt="QR CODE"
                  width={200}
                  height={100}
                  className="mx-auto mb-4"
                ></Image>
                <h2 className="text-base font-bold">
                  Improve your front-end skills by building projects
                </h2>
                <p className="text-sm mt-2 text-gray-600">
                  Scan the QR code to visit Frontend Mentor and take your coding
                  skills to the next level
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex flex-col justify-center px-[5rem]">
          <div className="mb-4 flex items-start">
            <div className="w-1/3">
              <FontAwesomeIcon icon={faCogs} className="mr-4 text-lg" />
            </div>
            <div className="w-2/3">
              <h2 className="font-bold">Design Systems</h2>
              <p>
                The design system contains all the information for reusable
                components and styles. It shows colors, typography styles, and
                components, including various component states if they're
                interactive.
              </p>
            </div>
          </div>

          <div className="border-4 my-6"></div>

          <div className="mb-4 flex items-start">
            <div className="w-1/3">
              <FontAwesomeIcon icon={faPalette} className="mr-4 text-lg" />
            </div>
            <div className="w-2/3">
              <h2 className="font-bold">Designs</h2>
              <p>
                The high-fidelity designs help you build responsive, accessible
                projects. Aim for precision rather than pixel perfect replicas.
                // eslint-disable-next-line react/no-unescaped-entities For
                guidance, see Josh Corneau's{" "}
                <a
                  className="font-bold"
                  href="https://www.joshwcomeau.com/css/pixel-perfection/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Chasing the Pixel-Perfect-Dream".
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
