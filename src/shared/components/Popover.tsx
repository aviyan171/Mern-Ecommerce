import { useEffect, useRef, useState } from 'react';

const Popover = ({
  triggerElement,
  children,
}: {
  triggerElement: React.ReactNode;
  children: React.ReactNode;
}) => {
  // State to track whether the popover is open or closed
  const [open, setOpen] = useState(false);

  // Ref to store a reference to the outermost div element
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Function to handle clicks outside the popover
    const handleOutsideClick = (event: MouseEvent) => {
      // Check if the popoverRef is present and if the clicked element is outside the popover
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        // Close the popover by setting open to false
        setOpen(false);
      }
    };

    // Attach the event listener to the document when the component mounts
    document.addEventListener('mouseover', handleOutsideClick);

    // Cleanup the event listener when the component unmounts to avoid memory leaks
    return () => {
      document.removeEventListener('mouseover', handleOutsideClick);
    };
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  const handleOpenPopover = () => {
    setOpen(!open);
  };

  return (
    <div className="relative" ref={popoverRef}>
      <div onClick={handleOpenPopover} className="cursor-pointer">
        {triggerElement}
      </div>

      <div
        className={`absolute  right-0 bg-white ${
          open ? 'block' : 'hidden'
        } z-10  shadow-lg`}
      >
        {children}
      </div>
    </div>
  );
};

export default Popover;
