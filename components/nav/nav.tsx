import { Desktop } from '@/lib/media'
import { NavBottom } from './nav-bottom'
import { NavTop } from './nav-top'

export function Nav() {
  return (
    <nav>
      <NavTop />

      <Desktop>
        <NavBottom />
      </Desktop>
    </nav>
  )
}
