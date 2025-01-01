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
  background-color: ${(props) =>
    props.$danger
      ? props.theme.colors.danger[500]
      : props.$warning
        ? "#FACC15"
        : props.$success
          ? "#4ADE80"
          : props.theme.colors.brand[500]};
  color: white;
  border-radius: 0.5rem;
  font-size: 1rem;
  padding: 0.4rem 0.9rem;
  cursor: pointer;
  &:hover:not(:disabled) {
    background-color: ${(props) => (props.$danger ? "#dc2626" : "#2570eb")};
  }
  &:active:not(:disabled) {
    background-color: ${(props) => (props.$danger ? "#b91c1c" : "#1d64d8")};
  }
  &:focus:not(:disabled) {
    outline: 1px solid ${(props) => (props.$danger ? "#ef4444" : "#3b82f6")};
    outline-offset: 2px;
  }
`;

const SecondaryButton = styled.button<buttonProps>``;

export default function Button({ children, secondary, ...props }: buttonProps) {
  if (secondary) {
    <SecondaryButton {...props}>{children}</SecondaryButton>;
  } else {
    return <PrimaryButton {...props}>{children}</PrimaryButton>;
  }
}
