import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FEFEFE]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#051747]/5 via-[#081F62]/5 to-[#535F80]/5" />

      <div className="container relative mx-auto px-6 py-20 lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#E7E9F0] px-5 py-2 text-sm font-medium text-[#081F62]">
              ❤️ Empowering Communities Through Compassion
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-5xl font-bold leading-tight text-[#051747] lg:text-6xl">
              Transforming Lives Through
              <span className="block text-[#081F62]">
                Compassion & Action
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#535F80]">
              Together, we provide education, healthcare, food, and hope to
              underprivileged children and families. Every donation helps build
              stronger communities and brighter futures.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                className="
                rounded-2xl
                bg-[#081F62]
                px-8
                py-4
                font-semibold
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white
                hover:text-[#081F62]
                hover:border-2
                hover:border-[#081F62]
                hover:shadow-xl
              "
              >
                Donate Now
              </button>

              <button
                className="
                rounded-2xl
                border-2
                border-[#081F62]
                bg-white
                px-8
                py-4
                font-semibold
                text-[#081F62]
                transition-all
                shadow-lg
                duration-300
                hover:bg-[#081F62]
                hover:text-white
                hover:-translate-y-1
                hover:border-2
                hover:border-[#081F62]
                hover:shadow-xl
              "
              >
                Join Our Mission
              </button>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-3 gap-4">
              <div className="rounded-2xl bg-[#E7E9F0] p-5">
                <h3 className="text-3xl font-bold text-[#051747]">10K+</h3>
                <p className="mt-1 text-sm text-[#535F80]">
                  Children Helped
                </p>
              </div>

              <div className="rounded-2xl bg-[#E7E9F0] p-5">
                <h3 className="text-3xl font-bold text-[#051747]">50+</h3>
                <p className="mt-1 text-sm text-[#535F80]">
                  Communities Served
                </p>
              </div>

              <div className="rounded-2xl bg-[#E7E9F0] p-5">
                <h3 className="text-3xl font-bold text-[#051747]">500+</h3>
                <p className="mt-1 text-sm text-[#535F80]">
                  Volunteers
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            {/* Glow */}
            <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-[#081F62] to-[#535F80] opacity-20 blur-3xl" />

            {/* Image Card */}
            <div className="relative overflow-hidden rounded-[32px] border border-[#E7E9F0] bg-white shadow-2xl">
              <Image
                src="/images/hero_image.jpg"
                alt="Helping Communities"
                width={350}
                height={450}
                priority
                className="h-auto w-full object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-6 left-0 rounded-2xl bg-white p-4 shadow-xl">
              <h4 className="text-xl font-bold text-[#051747]">
                ₹12L+
              </h4>
              <p className="text-sm text-[#535F80]">
                Funds Raised
              </p>
            </div>

            {/* Floating Card */}
            <div className="absolute right-0 top-8 rounded-2xl bg-white p-4 shadow-xl">
              <h4 className="text-xl font-bold text-[#051747]">
                100%
              </h4>
              <p className="text-sm text-[#535F80]">
                Transparency
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}