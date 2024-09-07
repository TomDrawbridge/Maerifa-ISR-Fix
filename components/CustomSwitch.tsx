import React, { useState, useEffect } from 'react';
import * as Switch from '@radix-ui/react-switch';

interface CustomSwitchProps extends React.ComponentProps<typeof Switch.Root> {
  backgroundColor?: string;
  activeColor?: string;
  inactiveColor?: string;
  activeThumbColor?: string;
  onActivate?: () => void;
  onDeactivate?: () => void;
  defaultChecked?: boolean;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({ 
  backgroundColor = '#e4e4e7', 
  activeColor = '#22c55e', 
  inactiveColor = '#94a3b8',
  activeThumbColor = '#ffffff',
  onActivate,
  onDeactivate,
  defaultChecked = false,
  ...props 
}) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  useEffect(() => {
    setIsChecked(defaultChecked);
  }, [defaultChecked]);

  const handleCheckedChange = (checked: boolean) => {
    setIsChecked(checked);
    if (checked) {
      onActivate && onActivate();
    } else {
      onDeactivate && onDeactivate();
    }
  };

  return (
    <Switch.Root
      style={{
        width: '34px',
        height: '20px',
        backgroundColor: isChecked ? activeColor : backgroundColor,
        borderRadius: '9999px',
        position: 'relative',
        outline: 'none',
        cursor: 'pointer',
        border: 'none',
        padding: '2px 4px',
      }}
      checked={isChecked}
      onCheckedChange={handleCheckedChange}
      {...props}
    >
      <Switch.Thumb 
        style={{
          display: 'block',
          width: '16px',
          height: '16px',
          backgroundColor: isChecked ? activeThumbColor : inactiveColor,
          borderRadius: '9999px',
          transition: 'transform 100ms',
          transform: isChecked ? 'translateX(18px)' : 'translateX(0)',
          willChange: 'transform',
        }}
      />
    </Switch.Root>
  );
};

export default CustomSwitch;