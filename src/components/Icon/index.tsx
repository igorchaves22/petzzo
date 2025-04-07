import { LucideProps } from "lucide-react";
import { HtmlPropsType, LucideReactIconsType } from "~types";
import { lucideReactIcons } from "~utils";

type AdditionalPropsType = Pick<HtmlPropsType, "className"> & Pick<LucideProps, "strokeWidth">;

interface IIcon extends AdditionalPropsType {
    icon: LucideReactIconsType;
}

export const Icon = ({ icon, ...rest }: IIcon) => {
    const Element = lucideReactIcons[icon];

    return <Element {...rest} />;
};
