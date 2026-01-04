import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL =
  "https://wa.me/5516998218247?text=OLA%20CLIMA%20FORT%20GOSTARIA%20DE%20COMORAR%20O%20MINI%20AR-CONDICIONADO%20";

const Index = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = WHATSAPP_URL;
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <section className="w-full max-w-md rounded-lg bg-card p-8 text-center shadow-sm">
        <h1 className="mb-2 text-2xl font-semibold text-foreground">
          Mini Ar-Condicionado Clima Fort
        </h1>
        <p className="mb-6 text-sm text-muted-foreground">
          Estamos te redirecionando para o WhatsApp para concluir seu pedido.
          Se nada acontecer em alguns segundos, clique no botão abaixo.
        </p>
        <Button
          asChild
          size="lg"
          className="w-full"
          aria-label="Chamar no WhatsApp para comprar o mini ar-condicionado"
        >
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Falar no WhatsApp
          </a>
        </Button>
      </section>
    </main>
  );
};

export default Index;
