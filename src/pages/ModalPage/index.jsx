export const ModalPage = ({children}) => {
  return (
    <section className="fixed top-0 right-0 bottom-0 left-0 bg-slate-900
    bg-opacity-50 flex justify-center items-center">
      {children}
    </section>
  );
};
