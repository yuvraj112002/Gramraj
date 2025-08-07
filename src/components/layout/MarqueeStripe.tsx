import Marquee from "react-fast-marquee";

export  function MarqueeStripe() {
  const logos = [
    "stripe.png",
    "stripe.png",
    "stripe.png",
    "stripe.png",
    "stripe.png",
    "stripe.png",
  ];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradient left blur */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent"></div>

      {/* Gradient right blur */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent"></div>

      <Marquee speed={60} loop={0} gradient={false}>
        {logos.concat(logos).map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`logo-${index}`}
            className="h-full max-h-[12rem] w-auto object-contain "
          />
        ))}
      </Marquee>
    </div>
  );
}
