import Breadcrumbs from "../components/Breadcrumbs";

const PagenotFound = () => {
  return (
    <div>
      <Breadcrumbs pageroute={'Page not found'} />
      <div className="min-h-[512px] flex flex-col justify-start items-center">
        <img src="/Illustration.png" alt="" className="w-96 object-contain" />
        <div className="flex flex-col gap-4 w-96 text-center justify-center items-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Oops! page not found
          </h1>
          <p className="text-center">
            Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros.
            Maecenas sagittis tortor at metus mollis
          </p>
          <button className="bg-green-500 text-white p-2 rounded-full px-4">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default PagenotFound;
