interface InputFieldProps {
  fieldName: string
  placeHolder: string
  type: string
}

export default function InputField({
  fieldName,
  placeHolder,
  type
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="ml-2 font-montserratSemiBold text-textColor">
        {fieldName}
      </div>
      <input
        className="w-full rounded-3xl bg-white p-4 font-montserratMedium focus:border-primary15"
        placeholder={placeHolder}
        type={type}
      />
    </div>
  )
}
