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

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(WHATSAPP_URL);
      alert("Link do WhatsApp copiado! Cole no seu navegador ou envie para alguém.");
    } catch {
      alert("Não foi possível copiar o link. Tente usar o botão principal.");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <section className="w-full max-w-lg rounded-2xl bg-card p-8 shadow-md">
        <header className="mb-6 space-y-2 text-center">
          <p className="mx-auto inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
            Oferta especial • Envio rápido
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Mini Ar-Condicionado <span className="text-primary">Clima Fort</span>
          </h1>
          <p className="text-sm text-muted-foreground sm:text-base">
            Página oficial de atendimento pelo WhatsApp. Tire dúvidas e garanta o seu em poucos cliques.
          </p>
        </header>

        <div className="mb-6 grid gap-4 rounded-xl bg-muted/60 p-4 text-left sm:grid-cols-3 sm:p-5">
          <div className="sm:col-span-2 space-y-2 text-sm text-muted-foreground">
            <p className="font-medium text-foreground">Por que o Mini Ar-Condicionado?</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Ideal para quarto, escritório ou mesa de estudos.</li>
              <li>Baixo consumo de energia e fácil de usar.</li>
              <li>Atendimento direto pelo WhatsApp, sem burocracia.</li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg bg-card shadow-sm p-3 text-center text-xs text-muted-foreground">
            <span className="mb-1 text-[0.7rem] uppercase tracking-wide text-primary">Passo único</span>
            <span className="font-medium text-foreground">Clique no botão</span>
            <span>e fale agora com a Clima Fort.</span>
          </div>
        </div>

        <div className="space-y-3">
          <Button
            asChild
            size="lg"
            className="flex w-full items-center justify-center text-base"
            aria-label="Chamar no WhatsApp para comprar o mini ar-condicionado"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Falar com a Clima Fort no WhatsApp
            </a>
          </Button>

          <button
            type="button"
            onClick={handleCopyLink}
            className="w-full text-center text-xs font-medium text-muted-foreground underline underline-offset-4"
          >
            Ou clique aqui para copiar o link do WhatsApp
          </button>

          <p className="pt-1 text-center text-[0.7rem] text-muted-foreground">
            Você será redirecionado automaticamente em poucos segundos. Caso seu navegador bloqueie,
            use o botão acima.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Index;
