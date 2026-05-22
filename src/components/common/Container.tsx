/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  clean?: boolean;
}

export function Container({ children, className = '', clean = false }: ContainerProps) {
  return (
    <div
      className={`${
        clean ? '' : 'px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 max-w-[1700px] mx-auto'
      } ${className}`}
    >
      {children}
    </div>
  );
}
