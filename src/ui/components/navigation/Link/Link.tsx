import React from "react"
import NextLink, { LinkProps as NextLinkProps } from "next/link"
import Router from "next/router"
import { Link as MuiLink, LinkProps as MuiLinkProps, ButtonProps } from "@mui/material"

export interface LinkProps {
    href: string;
    mui?: MuiLinkProps | ButtonProps;
    next?: NextLinkProps;
    Component?: React.ElementType;
    onClick?: () => void;
}

const Link: React.FC<LinkProps> = ({ 
    children,
    href,
    mui, 
    next,
    Component = MuiLink,
    ...props
}) => {
    const isNextEnv = Boolean(Router.router)

    return isNextEnv ? (
        <Component as={NextLink} href={href} passHref {...next} {...mui} {...props}>{ children }</Component>
    ) : (
        <Component href={href} {...mui} {...props}>{ children }</Component>
    )
}

export default Link
