import { Container } from "@/components/ui/Container";

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-white py-20">
      <Container>
        <div className="mx-auto flex max-w-sm flex-col items-center text-center">
          <div className="size-10 animate-spin rounded-full border-4 border-slate-200 border-t-primary" />
          <p className="mt-4 text-sm font-medium text-slate-500">Loading page...</p>
        </div>
      </Container>
    </div>
  );
}
