export function Shell() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-cream px-4 pt-24 pb-16 md:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <span className="inline-block brutal-border rounded-full bg-yellow px-5 py-2 font-display text-xs uppercase tracking-[0.3em] -rotate-2 mb-10">
          Digital Wellbeing Campaign
        </span>

        <h1 className="font-display uppercase leading-[0.85] text-black">
          <span className="block text-[clamp(3rem,12vw,8rem)]">MOOD</span>
          <span className="block text-[clamp(3rem,12vw,8rem)] text-orange">
            FUEL
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-lg text-lg text-black/80">
          A playful rebellion against digital burnout. Turn down the noise.
          Turn up the care.
        </p>

        <div className="mt-14 flex flex-wrap justify-center gap-4">
          {[
            { name: "Orange", className: "bg-orange" },
            { name: "Yellow", className: "bg-yellow" },
            { name: "Blue", className: "bg-blue" },
            { name: "Cream", className: "bg-cream" },
            { name: "Black", className: "bg-black" },
          ].map((swatch) => (
            <div
              key={swatch.name}
              className={`brutal-border brutal-shadow-sm rounded-2xl ${swatch.className} w-20 h-20 md:w-24 md:h-24 flex items-end justify-center p-2`}
            >
              <span
                className={`font-display text-[10px] uppercase ${
                  swatch.name === "Cream" || swatch.name === "Yellow"
                    ? "text-black"
                    : "text-cream"
                }`}
              >
                {swatch.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
