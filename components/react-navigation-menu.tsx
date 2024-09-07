import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/router';

interface NavigationMenuProps {
    children: React.ReactNode;
    children2: React.ReactNode;
    children3: React.ReactNode;
    className?: string;
    classNameList?: string;
    orientation?: 'horizontal' | 'vertical';
}

const NavigationMenuComponent: React.FC<NavigationMenuProps> = ({ children, className, classNameList, children2, children3, orientation = 'horizontal' }) => {
    const router = useRouter();
    const currentPath = router.pathname;

    return (
        <NavigationMenu.Root className={`NavigationMenuRoot ${className}`}>
            <NavigationMenu.List className={`NavigationMenuList ${classNameList}`} data-orientation={orientation}>
                <NavigationMenu.Item>
                    <NavigationMenu.Link
                        className="NavigationMenuLink"
                        href="/"
                        active={currentPath === '/'}
                    >
                        Home
                    </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="NavigationMenuTrigger">
                        About us <CaretDownIcon className="CaretDown" aria-hidden />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="NavigationMenuContent">
                        <ul className="List three">
                            {children3}
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="NavigationMenuTrigger">
                        Products <CaretDownIcon className="CaretDown" aria-hidden />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="NavigationMenuContent">
                        <ul className="List one">
                            {children}
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="NavigationMenuTrigger">
                        Learn <CaretDownIcon className="CaretDown" aria-hidden />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="NavigationMenuContent">
                        <ul className="List two">
                            {children2}
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>

                
                
                <NavigationMenu.Item>
                    <NavigationMenu.Link
                        className="NavigationMenuLink"
                        href="/contact"
                        active={currentPath === '/contact'}
                    >
                        Contact
                    </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Indicator className="NavigationMenuIndicator">
                    <div className="Arrow" />
                </NavigationMenu.Indicator>
            </NavigationMenu.List>
            <div className="ViewportPosition">
                <NavigationMenu.Viewport className="NavigationMenuViewport" />
            </div>
        </NavigationMenu.Root>
    );
};

export default NavigationMenuComponent;
