import classNames from 'classnames'

export type PillProps = {
  children: React.ReactNode
  color?: 'primary' | 'neutral'
}

export function Pill({ children, color = 'neutral' }: PillProps) {
  return (
    <div
      className={classNames(
        'inline-flex justify-between items-center gap-3 body-regular p-2 border rounded-sm',
        color === 'neutral' && 'bg-neutral-lightest border-neutral-dark',
        color === 'primary' && 'bg-primary-lightest border-brand-primary'
      )}
    >
      {children}
    </div>
  )
}
