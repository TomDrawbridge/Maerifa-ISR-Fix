import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface SkeletonWrapperProps {
  isLoading: boolean;
  width?: string;
  height?: string;
  count?: number;
  circle?: boolean;
  className?: string;
  children: React.ReactNode;
  baseColor?: string;
  highlightColor?: string;
  borderRadius?: number;
}

const SkeletonWrapper: React.FC<SkeletonWrapperProps> = ({
  isLoading,
  children,
  ...skeletonProps
}) => {
  if (isLoading) {
    return <Skeleton {...skeletonProps} />;
  }

  return <>{children}</>;
};

export default SkeletonWrapper;