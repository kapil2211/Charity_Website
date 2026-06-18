// "use client";

// import Image from "next/image";

// export default function GallerySection() {
//   return (
//     <section className="bg-[#FEFEFE] py-28">
//       <div className="container mx-auto px-6">
//         {/* Section Header */}
//         <div className="mb-16 text-center">
//           <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#081F62]">
//             Gallery
//           </span>

//           <h2 className="mt-4 text-4xl font-bold text-[#051747] lg:text-5xl">
//             Moments That Inspire Change
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#535F80]">
//             Every image tells a story of hope, compassion, and positive impact
//             created through our initiatives.
//           </p>
//         </div>

//         <div className="grid gap-6 lg:grid-cols-2">
//           {/* Left Column */}
//           <div className="flex flex-col gap-6">
//             {/* Row 1 */}
//             <div className="grid grid-cols-2 gap-6">
//               <div className="group relative h-[260px] overflow-hidden rounded-3xl">
//                 <Image
//                   src="/images/hero_image.jpg"
//                   alt="Gallery 1"
//                   fill
//                   className="object-cover transition duration-500 group-hover:scale-105"
//                   sizes="(max-width:768px) 100vw, 25vw"
//                 />
//               </div>

//               <div className="group relative h-[260px] overflow-hidden rounded-3xl">
//                 <Image
//                   src="/images/hero_image.jpg"
//                   alt="Gallery 2"
//                   fill
//                   className="object-cover transition duration-500 group-hover:scale-105"
//                   sizes="(max-width:768px) 100vw, 25vw"
//                 />
//               </div>
//             </div>

//             {/* Row 2 */}
//             <div className="group relative h-[320px] overflow-hidden rounded-3xl">
//               <Image
//                 src="/images/hero_image.jpg"
//                 alt="Gallery 3"
//                 fill
//                 className="object-cover transition duration-500 group-hover:scale-105"
//                 sizes="(max-width:768px) 100vw, 50vw"
//               />
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="group relative min-h-[600px] overflow-hidden rounded-[32px]">
//             <Image
//               src="/images/hero_image.jpg"
//               alt="Main Gallery Image"
//               fill
//               priority
//               className="object-cover transition duration-700 group-hover:scale-105"
//               sizes="(max-width:768px) 100vw, 50vw"
//             />

//             {/* Optional Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-[#051747]/40 via-transparent to-transparent" />

//             {/* Optional Caption */}
//             <div className="absolute bottom-8 left-8">
//               <h3 className="text-3xl font-bold text-white">
//                 Together We Create Impact
//               </h3>

//               <p className="mt-2 max-w-md text-white/90">
//                 Empowering lives through education, healthcare, and community
//                 development initiatives.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }