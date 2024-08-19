interface PrimaryButtonProps {
  text: string
}

export default function PrimaryButton({ text }: PrimaryButtonProps) {
  return (
    <button
      type="button"
      className="inline-flex w-full items-center justify-center gap-x-2 rounded-full border border-transparent bg-primary px-4 py-3 text-sm font-bold text-background hover:bg-textColor disabled:pointer-events-none disabled:opacity-50 md:w-1/2 xl:text-base"
    >
      {text}
    </button>
  )
}
