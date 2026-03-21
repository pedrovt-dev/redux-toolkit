import { Button as AntButton, type ButtonProps as AntButtonProps } from "antd";
import { createAdapter } from "../createAdapter";


export type MyButtonProps = Partial<AntButtonProps>;

export const Button = createAdapter<MyButtonProps, AntButtonProps>(
    AntButton,
    (props) => ({
        type: 'primary',
        ...props,
    })
);