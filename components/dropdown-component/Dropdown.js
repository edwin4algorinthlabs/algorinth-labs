import React, { useState, useRef, useEffect } from 'react';
import './Dropdown.css';
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from 'next/navigation';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const router = useRouter();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const links = [
        {
            href: '/',
            text: 'Home',
        },
        {
            href: '/#',
            text: 'Services',
        },
        {
            href: '/#',
            text: 'Resources',
        },
        {
            href: '/#',
            text: 'Blog',
        },
        {
            href: '/#',
            text: 'About',
        },
        {
            href: '/#',
            text: 'Contact',
        },
    ];

    return (
        <div className="dropdownContainer" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="dropdownButton">
                <Image className="m-banner" alt="Banner" src="/images/Vector.svg" width={15} height={11} />
            </button>
            {isOpen && (
                <ul className="dropdownList">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
