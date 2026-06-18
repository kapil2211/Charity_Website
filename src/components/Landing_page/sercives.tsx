// "use client";

// import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import useEmblaCarousel from "embla-carousel-react";
// import servicesData from "@/src/data/services.json";
// import { Service } from "@/src/types/service";

// export default function ServicesSection() {
//   const services: Service[] = servicesData;

//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     align: "start",
//     loop: false,
//     slidesToScroll: 1,
//   });

//   return (
//     <section className="bg-[#FEFEFE] py-28">
//       <div className="container mx-auto px-6">
//         {/* Header */}
//         <div className="mx-auto max-w-3xl text-center">
//           <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#081F62]">
//             Our Services
//           </span>

//           <h2 className="mt-4 text-4xl font-bold text-[#051747] lg:text-5xl">
//             Creating Lasting Impact Through
//             <span className="block">
//               Community-Focused Programs
//             </span>
//           </h2>

//           <p className="mt-6 text-lg leading-8 text-[#535F80]">
//             We provide essential support through education,
//             healthcare, nutrition, and community development
//             initiatives.
//           </p>
//         </div>

//         {/* Navigation */}
//         <div className="mt-12 flex justify-end gap-4">
//           <button
//             type="button"
//             aria-label="Previous service"
//             onClick={() => emblaApi?.scrollPrev()}
//             className="
//               flex h-12 w-12 items-center justify-center
//               rounded-full
//               border border-[#E7E9F0]
//               text-[#081F62]
//               transition-all
//               hover:bg-[#081F62]
//               hover:text-white
//             "
//           >
//             <ChevronLeft size={20} />
//           </button>

//           <button
//             type="button"
//             aria-label="Next service"
//             onClick={() => emblaApi?.scrollNext()}
//             className="
//               flex h-12 w-12 items-center justify-center
//               rounded-full
//               bg-[#081F62]
//               text-white
//               transition-all
//               hover:bg-[#051747]
//             "
//           >
//             <ChevronRight size={20} />
//           </button>
//         </div>

//         {/* Carousel */}
//         <div className="mt-10 overflow-hidden" ref={emblaRef}>
//           <div className="flex">
//             {services.map((service) => (
//               <div
//                 key={service.id}
//                 className="
//                   min-w-0
//                   flex-[0_0_100%]
//                   px-4
//                   md:flex-[0_0_50%]
//                   xl:flex-[0_0_33.333%]
//                 "
//               >
//                 <div className="group">
//                   <div className="overflow-hidden rounded-3xl">
//                     <Image
//                       src={service.image}
//                       alt={service.title}
//                       width={500}
//                       height={600}
//                       className="
//                         h-[320px]
//                         w-full
//                         object-cover
//                         transition-transform
//                         duration-500
//                         group-hover:scale-105
//                       "
//                     />
//                   </div>

//                   <div className="pt-6">
//                     <h3 className="text-2xl font-semibold text-[#051747]">
//                       {service.title}
//                     </h3>

//                     <p className="mt-3 leading-7 text-[#535F80]">
//                       {service.description}
//                     </p>

//                     <button
//                       className="
//                         mt-5
//                         font-semibold
//                         text-[#081F62]
//                         transition-colors
//                         hover:text-[#051747]
//                       "
//                     >
//                       Learn More →
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }