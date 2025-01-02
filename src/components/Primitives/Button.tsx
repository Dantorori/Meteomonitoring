import React, { PropsWithChildren } from "react";
import styled from "styled-components";

interface buttonProps
  extends PropsWithChildren,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  secondary?: boolean;
  $success?: boolean;
  $warning?: boolean;
  $danger?: boolean;
}

const PrimaryButton = styled.button<buttonProps>`
  border-radius: 0.5rem;
  font-size: 1rem;
  padding: 0.4rem 0.9rem;
  cursor: pointer;

  background-color: ${(props) =>
    props.$danger
      ? props.theme.colors.danger[500]
      : props.$warning
        ? props.theme.colors.warning[500]
        : props.$success
          ? props.theme.colors.success[500]
          : props.theme.colors.brand[500]};

  color: white;

  &:hover:not(:disabled) {
    background-color: ${(props) =>
      props.$danger
        ? props.theme.colors.danger[600]
        : props.$warning
          ? props.theme.colors.warning[600]
          : props.$success
            ? props.theme.colors.success[600]
            : "#2570eb"};
  }

  &:active:not(:disabled) {
    background-color: ${(props) =>
      props.$danger
        ? props.theme.colors.danger[700]
        : props.$warning
          ? props.theme.colors.warning[700]
          : props.$success
            ? props.theme.colors.success[700]
            : "#1d64d8"};
  }

  &:focus:not(:disabled) {
    outline: 1px solid
      ${(props) => (props.$danger ? props.theme.colors.danger[500] : "#3b82f6")};
    outline-offset: 2px;
  }
`;

export default function Button({ children, ...props }: buttonProps) {
  return <PrimaryButton {...props}>{children}</PrimaryButton>;
}
