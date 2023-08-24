import Header from "./components/Header";

function ResturantLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return ( 
        <>
         <Header/>
          {/* HEADER */} {/* DESCRIPTION PORTION */}
          <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
{children}

          </div>
        
        </>
     );
}

export default ResturantLayout;