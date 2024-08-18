interface PrimaryButtonProps {
  text: string
}

export default function PrimaryButton({ text }: PrimaryButtonProps) {
  return (
    <button
      type="button"
      className="py-3 px-4 w-full sm:w-1/2 inline-flex items-center justify-center gap-x-2 text-sm font-medium rounded-full border border-transparent bg-primary text-background hover:bg-textColor disabled:opacity-50 disabled:pointer-events-none"
    >
      {text}
    </button>
  )
}
