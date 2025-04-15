"use client";

import { useRef, useState } from "react";

import { IconCheck, IconClipboard } from "@tabler/icons-react";

import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

export default function CopyButton({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [coppied, setCoppied] = useState<boolean>(false);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);
  function handleClick() {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    navigator.clipboard.writeText(text);
    setCoppied(true);
    timeoutId.current = setTimeout(() => {
      setCoppied(false);
    }, 750);
  }
  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("size-10 border", className)}
      onClick={handleClick}
    >
      {coppied ? (
        <IconCheck className="size-4 text-green-300" />
      ) : (
        <IconClipboard className="text-muted-foreground size-4" />
      )}
    </Button>
  );
}
