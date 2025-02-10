import React from "react";
import { Button as AntButton } from "antd";
import styled from "styled-components";

const StyledButton = styled(AntButton)`
  font-weight: bold;
  border-radius: 8px;
  padding: 8px 16px;

  &.primary {
    background-color: #1890ff;
    color: white;
    border: none;

    &:hover {
      background-color: #40a9ff;
    }
  }

  &.link {
    background: none;
    text-decoration: underline;
    color: #007bff;

    &:hover {
      color: #0056b3;
    }
  }
`;

export const Button = ({ children, variant = "primary", ...props }) => {
  return (
    <StyledButton className={variant} {...props}>
      {children}
    </StyledButton>
  );
};
