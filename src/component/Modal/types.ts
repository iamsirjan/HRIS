import React from 'react';

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;

  size?: 'sm' | 'md' | 'lg';
};
