// "use client";

// import Image from "next/image";
// import testimonials from "@/src/data/testimonials.json";
// import useEmblaCarousel from "embla-carousel-react";
// import { useEffect, useState } from "react";
// import { Star } from "lucide-react";

// export default function TestimonialsSection() {
//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     align: "start",
//     loop: true,
//   });

//   const [selectedIndex, setSelectedIndex] = useState(0);

//   useEffect(() => {
//     if (!emblaApi) return;

//     const onSelect = () => {
//       setSelectedIndex(emblaApi.selectedScrollSnap());
//     };

//     emblaApi.on("select", onSelect);
//     onSelect();

//     return () => {
//       emblaApi.off("select", onSelect);
//     };
//   }, [emblaApi]);

//   return (
//     <section className="bg-[#FEFEFE] py-28">
//       <div className="container mx-auto px-6">
//         {/* Header */}
//         <div className="mb-20 grid items-end gap-8 lg:grid-cols-4">
//           <div>
//             <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#081F62]">
//               Testimonials
//             </span>

//             <h2 className="mt-4 text-4xl font-bold text-[#051747] lg:text-3xl">
//               What Our Supporters Say
//             </h2>
//           </div>

//           <div className="lg:col-span-3">
//             <p className="text-right text-lg leading-8 text-[#535F80]">
//               The trust and appreciation of our donors, volunteers,
//               and beneficiaries motivate us to continue creating
//               positive impact in communities and transforming lives.
//             </p>
//           </div>
//         </div>

//         {/* Carousel */}
//         <div className="overflow-hidden" ref={emblaRef}>
//           <div className="flex">
//             {testimonials.map((item) => (
//               <div
//                 key={item.id}
//                 className="
//                   min-w-0
//                   flex-[0_0_100%]
//                   px-4
//                   md:flex-[0_0_50%]
//                   xl:flex-[0_0_33.333%]
//                   pt-10
//                 "
//               >
//                 <div
//                   className="
//                     relative
//                     h-full
//                     rounded-[32px]
//                     bg-[#E7E9F0]
//                     p-8
//                     pt-16
//                   "
//                 >
//                   {/* Client Image */}
//                   <div
//                     className="
//                       absolute
//                       right-8
//                       top-0
//                       h-20
//                       w-20
//                       -translate-y-1/2
//                       overflow-hidden
//                       rounded-full
//                       border-4
//                       border-[#FEFEFE]
//                     "
//                   >
//                     <Image
//                       src={item.image}
//                       alt={item.name}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>

//                   {/* Stars */}
//                   <div className="mb-6 flex gap-1">
//                     {[...Array(item.rating)].map((_, i) => (
//                       <Star
//                         key={i}
//                         size={18}
//                         fill="#081F62"
//                         color="#081F62"
//                       />
//                     ))}
//                   </div>

//                   {/* Review */}
//                   <p className="leading-8 text-[#535F80]">
//                     &ldquo;{item.review}&rdquo;
//                   </p>

//                   {/* Footer */}
//                   <div className="mt-8">
//                     <h4 className="font-semibold text-[#051747]">
//                       {item.name}
//                     </h4>

//                     <button
//                       className="
//                         mt-4
//                         font-semibold
//                         text-[#081F62]
//                         transition
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

//         {/* Dots */}
//         <div className="mt-12 flex justify-center gap-3">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => emblaApi?.scrollTo(index)}
//               title={`Go to testimonial ${index + 1}`}
//               aria-label={`Go to testimonial ${index + 1}`}
//               className={`h-3 w-3 rounded-full transition-all ${
//                 selectedIndex === index
//                   ? "bg-[#081F62] w-8"
//                   : "bg-[#E7E9F0]"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }