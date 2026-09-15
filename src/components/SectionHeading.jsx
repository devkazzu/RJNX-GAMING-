export default function SectionHeading({ kicker, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
      <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-cyan-400 uppercase">
        {kicker}
      </p>
      <h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-slate-400 md:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
