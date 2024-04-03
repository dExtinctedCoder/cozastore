interface PropsType {
  title: string
  children: React.ReactNode
  className?: string
}
export const HomeSection = ({ title, children, className }: PropsType) => {
  return (
    <section className={`flex flex-col gap-y-6 py-8 w-full ${className}`}>
      <h3 className="text-center mnt-bold font-semibold text-2xl">{title}</h3>
      {children}
    </section>
  )
}
