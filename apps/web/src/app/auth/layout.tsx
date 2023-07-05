export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center h-full w-full bg-gradient-to-r from-primary to-orange-medium">
      {children}
    </div>
  );
}
