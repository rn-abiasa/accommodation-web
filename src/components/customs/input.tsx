import { useState, type FormEvent } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Input = () => {
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched(true);
    if (!isValidEmail(email)) return;
    // Minimal noop submit; replace with your API call/integration
    console.log("Subscribed with:", email);
    setEmail("");
    setTouched(false);
  };

  const showError = touched && email.length > 0 && !isValidEmail(email);

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="bg-zinc-800 w-full flex items-center gap-3 px-5 py-2 rounded-full focus-within:ring-2 focus-within:ring-zinc-500">
        <Mail size={16} className="text-white" aria-hidden="true" />
        <input
          id="newsletter-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouched(true)}
          placeholder="Enter your email"
          className="bg-transparent placeholder-white/60 text-white flex-1 outline-none border-0 focus:ring-0 text-sm"
          aria-invalid={showError ? "true" : "false"}
          aria-describedby={showError ? "newsletter-error" : undefined}
        />
        <Button
          size="sm"
          type="submit"
          disabled={!isValidEmail(email)}
          className="rounded-full"
        >
          Subscribe
        </Button>
      </div>
      {showError && (
        <p id="newsletter-error" className="mt-2 text-xs text-red-400">
          Please enter a valid email address.
        </p>
      )}
    </form>
  );
};

export default Input;
