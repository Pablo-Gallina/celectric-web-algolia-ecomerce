// import FavoriteIcon from '@material-design-icons/svg/outlined/favorite_border.svg'
// import HeadsetMicIcon from '@material-design-icons/svg/outlined/headset_mic.svg'
// import PersonIcon from '@material-design-icons/svg/outlined/person.svg'
// import PinDropIcon from '@material-design-icons/svg/outlined/pin_drop.svg'
import ShoppingBagIcon from '@material-design-icons/svg/outlined/shopping_bag.svg'

import dynamic from 'next/dynamic'
import { memo, useMemo } from 'react'

import type { LogoProps } from '@/components/logo/logo'
import { NavItem } from '@/components/nav/nav-item'
import { Tablet, Laptop } from '@/lib/media'
import { Button } from '@ui/button/button'
import { IconLabel } from '@ui/icon-label/icon-label'
// import { Link } from '@ui/link/link'
import { NavAutocomplete } from './nav-autocomplete'
import DropdownCategories from '../@ui/dropdownCategories/dropdownCategories'
// import { parseUrl } from '@/utils/parseUrl'

const Logo = dynamic<LogoProps>(() =>
  import(/* webpackChunkName: 'common' */ '@/components/logo/logo').then(
    (mod) => mod.Logo
  )
)

export const NavTop = memo(function NavTop() {
  return (
    <div className="flex justify-between desktop:grid desktop:grid-cols-10 desktop:w-full gap-20 desktop:py-3">
      <div className="flex items-center col-start-1 col-end-2">
        <Logo />
      </div>

      <div className="hidden desktop:flex gap-6 col-start-3 col-end-5">
        <DropdownCategories text="Categorias" />
        <DropdownCategories text="Marcas" />
      </div>

      {/* Search autocomplete */}
      <div className="hidden desktop:flex items-center relative laptop:h-12 w-full col-start-5 col-end-10">
        <NavAutocomplete />
      </div>

      <div className="flex items-center justify-end col-start-10 col-end-11">
        <Button title="Cart">
          <IconLabel icon={ShoppingBagIcon} />
        </Button>
      </div>
    </div>
  )
})
