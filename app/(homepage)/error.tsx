"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import { Button } from "#/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4">
      <h2>Načtení článků selhalo</h2>
      <p>Je nám líto, ale bohužel se nám nepodařilo načíst aktuální články.</p>
      <pre className="bg-red-800 text-white p-2 border-2 border-amber-950 text-wrap">
        {JSON.stringify(error, null, 2)}
      </pre>
      <Button onClick={() => reset()}>Zkusit znovu</Button>
    </div>
  );
}
