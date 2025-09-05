"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setIsSignedIn } from "@/app/store/slices/userSlice";
import { Bell, ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Badge } from "../ui/badge";

// Mobile Menu Component
const MobileMenu = ({ isOpen, onClose, navLinks, pathName, isSignedIn, handleMobileSignIn, handleSignOut }) => {
  if (!isOpen) return null;

  const mobileMenuStyles = {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    zIndex: '999999',
    pointerEvents: 'auto'
  };

  const slideOutStyles = {
    position: 'fixed',
    top: '0',
    right: '0',
    width: '256px',
    minWidth: '256px',
    maxWidth: '256px',
    height: '100vh',
    backgroundColor: 'white',
    boxShadow: '-4px 0 6px -1px rgba(0, 0, 0, 0.1), -2px 0 4px -1px rgba(0, 0, 0, 0.06)',
    transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 0.3s ease-in-out',
    zIndex: '1000000',
    overflow: 'hidden'
  };

  const backdropStyles = {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: '999999'
  };

  return (
    <div style={mobileMenuStyles}>
      {/* Backdrop */}
      <div style={backdropStyles} onClick={onClose} />
      
      {/* Slide-out Menu */}
      <div style={slideOutStyles}>
        {/* Header */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          padding: '16px', 
          borderBottom: '1px solid #e5e7eb' 
        }}>
          <span style={{ color: '#ff6600', fontWeight: 'bold', fontSize: '18px' }}>Menu</span>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X style={{ height: '24px', width: '24px' }} />
          </Button>
        </div>
        
        {/* Menu Content */}
        <div style={{ 
          padding: '16px', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '16px', 
          overflowY: 'auto', 
          maxHeight: 'calc(100vh - 80px)' 
        }}>
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              style={{
                fontWeight: '500',
                fontSize: '18px',
                paddingTop: '8px',
                paddingBottom: '8px',
                color: pathName === link.href ? '#ff6600' : '#000000',
                textDecoration: pathName === link.href ? 'underline' : 'none',
                textUnderlineOffset: pathName === link.href ? '4px' : 'unset',
                textDecorationThickness: pathName === link.href ? '2px' : 'unset'
              }}
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/dashboard"
            style={{
              fontWeight: '500',
              fontSize: '18px',
              paddingTop: '8px',
              paddingBottom: '8px',
              color: pathName === "/dashboard" ? '#ff6600' : '#000000',
              textDecoration: pathName === "/dashboard" ? 'underline' : 'none',
              textUnderlineOffset: pathName === "/dashboard" ? '4px' : 'unset',
              textDecorationThickness: pathName === "/dashboard" ? '2px' : 'unset'
            }}
            onClick={onClose}
          >
            Dashboard
          </Link>
          <Link
            href="/profile"
            style={{
              fontWeight: '500',
              fontSize: '18px',
              paddingTop: '2px',
              paddingBottom: '2px',
              color: pathName === "/profile" ? '#ff6600' : '#000000',
              textDecoration: pathName === "/profile" ? 'underline' : 'none',
              textUnderlineOffset: pathName === "/profile" ? '4px' : 'unset',
              textDecorationThickness: pathName === "/profile" ? '2px' : 'unset'
            }}
            onClick={onClose}
          >
            Profile
          </Link>

          {/* Mobile SignIn / Profile */}
          <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #e5e7eb' }}>
            {!isSignedIn ? (
              <Button
                className="w-full rounded-full bg-orange-500 hover:bg-orange-600"
                onClick={() => {
                  handleMobileSignIn();
                  onClose();
                }}
              >
                Sign In
              </Button>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Avatar>
                  <AvatarImage
                    src="https://i.pravatar.cc/100"
                    alt="User"
                  />
                  <AvatarFallback>RK</AvatarFallback>
                </Avatar>
                <div>
                  <p style={{ fontWeight: '500', color: '#ff6600' }}>Yamin..</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      handleSignOut();
                      onClose();
                    }}
                  >
                    Logout
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isSignedIn = useSelector((state) => state.user.isSignedIn);
  const selectedRole = useSelector((state) => state.user.selectedRole);
  const pathName = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted (for SSR compatibility)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathName]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMobileMenuOpen]);

  // Dynamic navigation links based on role
  const getNavLinks = () => {
    const baseLinks = [
      { href: "/", label: "Home" },
      { href: "/inbox", label: "Inbox" },
      { href: "/contact", label: "Contact Us" },
    ];

    // Add role-specific jobs link
    let jobsLink;
    if (selectedRole === "tenant") {
      jobsLink = { href: "/jobs", label: "Jobs" };
    } else if (selectedRole === "manager") {
      jobsLink = { href: "/manager-jobs", label: "Jobs" };
    } else if (selectedRole === "contractor") {
      jobsLink = { href: "/contractor-jobs", label: "Jobs" };
    } else {
      // Default jobs link when no role is selected
      jobsLink = { href: "/jobs", label: "Jobs" };
    }

    // Insert jobs link at index 1 (after Home)
    return [
      baseLinks[0], // Home
      jobsLink, // Jobs (role-specific)
      ...baseLinks.slice(1), // Inbox, Contact Us
    ];
  };

  const navLinks = getNavLinks();

  const handleSignIn = () => {
    router.push("/registration/combined-register");
    dispatch(setIsSignedIn(true));
  };

  const handleSignOut = () => {
    dispatch(setIsSignedIn(false));
    
  };

  const handleMobileSignIn = () => {
    router.push("/registration/combined-register");
    dispatch(setIsSignedIn(true));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="sticky top-0 left-0 w-full border-b bg-white z-50 shadow">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-8 py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 lg:h-16 w-30 lg:w-40">
              <Image
                src={"/icons/mainLogo.svg"}
                fill
                alt="website logo"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className={`font-medium text-lg ${
                  pathName === link.href
                    ? "underline underline-offset-4 decoration-2 text-orange-500"
                    : "text-black"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden md:block">
            {!isSignedIn ? (
              <Button className="rounded-full px-9" onClick={handleSignIn}>
                Sign In
              </Button>
            ) : (
              <div className="flex gap-10 items-center justify-center">
                {/* Notifications */}
                <Link href={"/notifications"}>
                  <div className="relative">
                    <div className="rounded-full size-2 absolute right-1 top-0 bg-red-600 text-center"></div>
                    <Bell className="text-orange-500" />
                  </div>
                </Link>
                {/* Dropdown section */}
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-2 focus:outline-none" modal="true">
                    <Avatar>
                      <AvatarImage
                        src="https://i.pravatar.cc/100"
                        className={""}
                        alt="user profile photo"
                      />
                      <AvatarFallback>User</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium text-orange-500">
                      Yamin..
                    </span>
                    <ChevronDown strokeWidth={1} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent modal={true}>
                    <Link href={"/dashboard"}>
                      <DropdownMenuItem className="cursor-pointer">
                        Dashboard
                      </DropdownMenuItem>
                    </Link>
                    <Link href={"/profile"}>
                      <DropdownMenuItem className="cursor-pointer">
                        Profile
                      </DropdownMenuItem>
                    </Link>

                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={handleSignOut}
                    >
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden flex justify-center items-center gap-2">
            <div>
              <Link href={"/notifications"}>
                <div className="relative">
                  <div className="rounded-full size-2 absolute right-1 top-0 bg-red-600 text-center"></div>
                  <Bell className="text-orange-500" />
                </div>
              </Link>
            </div>
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              <Menu className="h-8 w-8 text-orange-500" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Portal-based Mobile Menu */}
      {mounted && isMobileMenuOpen && createPortal(
        <MobileMenu 
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          navLinks={navLinks}
          pathName={pathName}
          isSignedIn={isSignedIn}
          handleMobileSignIn={handleMobileSignIn}
          handleSignOut={handleSignOut}
        />,
        document.body
      )}
    </>
  );
};

export default Navbar; 