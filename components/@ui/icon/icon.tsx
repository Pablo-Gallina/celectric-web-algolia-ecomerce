export type IconProps = {
  icon: any
  className?: string
  style: object
}

export function Icon({
  icon: IconCmp = null,
  className = 'w-6 h-6',
  style = {},
}: IconProps) {
  return <IconCmp className={className} style={style} />
}
