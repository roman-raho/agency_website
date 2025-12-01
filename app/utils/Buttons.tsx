import { colours } from '../colours'

export function WorkWithUsBtn({ width, height }: { width: number, height: number }) {
  return (
    <div
      style={{
        "--btn-bg": colours.light_blue_accent_1,
        "--btn-bg-hover": colours.light_blue_accent_2,
        width,
        height,
      } as React.CSSProperties}
      className="
        flex items-center justify-center cursor-pointer rounded-[9px]
        bg-[var(--btn-bg)]
        hover:bg-[var(--btn-bg-hover)]
        duration-100
        transition-colors
        shadow-[3px_3px_10px_rgba(255,255,255,0.25)]
        gap-[7px]
      "
    >
      <p
        className={`text-[14px] md:text-[14px] lg:text-[16px] font-semibold ml-0.5 text-black`}
      >
        Work With Us
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="6 5.5 16 12"
      >
        <path
          fill="currentColor"
          d="M11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707l-1.414 1.414L15.586 11H6v2h9.586z"
        />
      </svg>

    </div>
  )
}

export function LearnMoreBtn({ width, height }: { width: number, height: number }) {
  return (
    <div
      className="
    inline-flex items-center justify-center
    px-3 py-1
    md:py-2 md:px-5 
    rounded-[10px] bg-white
    border border-black/13
    hover:border-black/20
    cursor-pointer
    gap-2
    transition-all
  "
    >
      <p className="font-medium text-[14px] md:text-[17px] text-[#111827]">
        Learn More
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="6 5 16 12"
      >
        <path
          fill="currentColor"
          d="M11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707l-1.414 1.414L15.586 11H6v2h9.586z"
        />
      </svg>
    </div>

  )
}