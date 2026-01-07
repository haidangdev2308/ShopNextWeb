export default function AuthLayout({
  // gọi là layout cha của login và register
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>Auth layout</h1>
      {children}
    </div>
  );
}
