"use client";
import useMouseOverCallback from "@/hooks/useMouseOverCallback";
import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { Trigger } from "./trigger";
import { wait } from "@/utils";

const Dialog = ({
  children,
  isOpen,
  setIsOpen,
  dialogChild,
  disableOutsideClick = false,
}: {
  children?: React.ReactNode;
  isOpen?: boolean;
  setIsOpen?: () => void;
  disableOutsideClick?: boolean;
  dialogChild: (props: { onClose: () => void }) => React.ReactNode;
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const DialogChild = dialogChild;

  useEffect(() => {
    if (isOpen !== undefined) {
      setDialogOpen(isOpen);
    }
  }, [isOpen]);

  return (
    <>
      <Trigger onClick={() => setDialogOpen((prev) => !prev)} asChild>
        {children}
      </Trigger>
      <AnimatePresence mode="wait">
        {dialogOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black/25"
          >
            <DialogContainer
              onClose={() => {
                !disableOutsideClick && setDialogOpen(false);
                !disableOutsideClick && setIsOpen && setIsOpen();
              }}
            >
              <DialogChild
                onClose={() => {
                  setDialogOpen(false);
                  setIsOpen && setIsOpen();
                }}
              />
            </DialogContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const DialogContainer = ({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) => {
  const dialogRef = useRef(null);

  useMouseOverCallback(dialogRef, async () => {
    await wait(150);
    onClose();
  });

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.95,
      }}
      transition={{
        duration: 0.15,
      }}
      ref={dialogRef}
      className="flex flex-col"
    >
      {children}
    </motion.div>
  );
};

export default Dialog;
