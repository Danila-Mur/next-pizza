import { Container, Header } from '@/shared/components/shared';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next Pizza | Checkout',
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#f4f1ee]">
      <Container>
        <Header
          hasSearch={false}
          hasCart={false}
          className="border-b-gray-200"
        />
        {children}
      </Container>
    </main>
  );
}
