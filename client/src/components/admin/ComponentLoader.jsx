import "ldrs/lineSpinner";

export default function ComponentLoader() {
  return (
    <div className="inset-0 fixed w-full h-full flex items-center justify-center">
      <div className="p-5 bg-white border border-gray-3 shadow-md shadow-gray-400 text-sm flex items-center justify-center">
        <div className="flex items-center gap-2">
          <l-line-spinner
            size="30"
            stroke="3"
            speed="1"
            color="black"
          ></l-line-spinner>
          <h4>Loading... Please Wait</h4>
        </div>
      </div>
    </div>
  );
}
