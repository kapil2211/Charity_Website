import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-[#FEFEFE] py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          
          {/* Left Column */}
          <div>
            <h2 className="text-4xl font-bold text-[#051747]">
              Samarth Seva
            </h2>

            <h3 className="text-4xl font-bold text-[#081F62]">
              Charitable Foundation
            </h3>

            <p className="mt-3 text-lg text-[#535F80]">
              Serving Humanity Through Compassion, Education & Empowerment
            </p>

            {/* Video Thumbnail */}
            <div className="group relative mt-8 overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/hero_image.jpg"
                alt="Foundation Story"
                width={700}
                height={450}
                className="h-[400px] w-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[#051747]/30" />

              {/* Play Button */}
              <button className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">
                ▶
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="relative flex h-full min-h-[650px] flex-col rounded-[32px] bg-[#E7E9F0] p-10 lg:p-12">
              
              {/* Heading */}
              <span className="text-sm font-semibold uppercase tracking-widest text-[#081F62]">
                About Us
              </span>

              <h2 className="mt-3 text-4xl font-bold text-[#051747]">
                Creating Opportunities,
                Building Better Futures
              </h2>

              <p className="mt-6 leading-8 text-[#535F80]">
                Samarth Seva Charitable Foundation is committed to
                uplifting underprivileged communities through education,
                healthcare, food distribution, and social welfare
                initiatives. We believe that every individual deserves
                dignity, opportunity, and hope.
              </p>

              <p className="mt-5 leading-8 text-[#535F80]">
                Through dedicated volunteers, generous donors, and
                sustainable programs, we strive to create lasting
                positive change and empower people to build brighter
                futures for themselves and their families.
              </p>

              {/* Bottom Content */}
              <div className="mt-auto flex items-end justify-between pt-10">
                
                {/* Button */}
                <button className="rounded-xl bg-[#081F62] px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#051747]">
                  Learn More
                </button>

                {/* Bottom Image */}
                <div className="relative h-40 w-40 overflow-hidden rounded-3xl border-4 border-white shadow-lg">
                  <Image
                    src="/images/hero_image.jpg"
                    alt="Community Support"
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}