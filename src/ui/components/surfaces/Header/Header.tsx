import { Container, Toolbar, IconButton } from "@mui/material"
import { HeaderAppBar, HeaderLogo, ButtonsContainer } from './Header.style'
import RoundedButton from 'ui/components/inputs/RoundedButton/RoundedButton'
import Link from "ui/components/navigation/Link/Link"
import useIsMobile from "data/hooks/useIsMobile"

const Header = () => {
    const isMobile = useIsMobile()

    return isMobile ? <HeaderMobile /> : <HeaderDesktop /> 
}

const HeaderDesktop = () => {
    return (
      <HeaderAppBar>
        <Toolbar component={Container}>
            <Link href={'/'}>
                <HeaderLogo
                    src={'/img/logos/logo.svg'}
                    alt={'e-diaristas'}
                />
            </Link>

            <div>&nbsp;</div>
            <div>&nbsp;</div>

            <ButtonsContainer>
                <Link
                    href={'/cadastro/diarista'}
                    Component={RoundedButton}
                    mui={{ color: 'primary', variant: 'contained' }}
                >
                    Seja um(a) diarista
                </Link>
                <Link
                    href={'/login'}
                    Component={RoundedButton}
                >
                    Login
                </Link>
            </ButtonsContainer>
        </Toolbar>
      </HeaderAppBar>
    )
}

const HeaderMobile = () => {
    return (
        <HeaderAppBar>
            <Toolbar component={Container}>
                <IconButton edge={'start'} color="{'inherit'}">
                    <i className={'twf-bars'} />
                </IconButton>

                <Link href={'/'}>
                    <HeaderLogo
                        src={'/img/logos/logo.svg'}
                        alt={'e-diaristas'}
                    />
                </Link>
            </Toolbar>
        </HeaderAppBar>
    )
}

export default Header
