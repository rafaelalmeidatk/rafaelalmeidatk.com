type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="px-4 mx-auto max-w-[75ch] my-4 sm:my-8 md:my-14">
      {children}
    </div>
  );
};
