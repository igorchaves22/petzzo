import logoLockupSvg from "~assets/svg/logo-lockup.svg";
import logoMarkSvg from "~assets/svg/logo-mark.svg";

interface ILogo {
    markVersion?: boolean;
}

export const Logo = ({ markVersion }: ILogo) => {
    return (
        <img
            src={markVersion ? logoMarkSvg : logoLockupSvg}
            alt="Logo"
            loading="lazy"
            className="w-34 h-min object-contain md:w-48"
        />
    );
};
