import Link from "@/components/Link/Link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br bg-background">
      <h1 className="mb-8 text-4xl font-bold text-onBackground">ComplyCube</h1>
      <Link href="/onboarding" className="bg-primary text-onPrimary">Upload Documents</Link>
    </main>
  );
}
