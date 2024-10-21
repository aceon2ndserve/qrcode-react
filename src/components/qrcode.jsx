import { useState } from "react";

function QrCodeComponent() {
  const [qrcodeUrl, setQrCodeUrl] = useState("");
  const [qrToFetch, setQrToFetch] = useState("");
  const generateQR = (e) => {
    e.preventDefault();
    setQrToFetch(qrcodeUrl);
  };
  const handleReset = () => {
    setQrCodeUrl("");
    setQrToFetch("");
  };
  return (
    <div className="w-fit h-full flex flex-col justify-center items-center border-2 border-black rounded p-16 mx-auto">
      <div className=" text-2xl text-blue-600 font-bold">Qr Code Generator</div>
      <form onSubmit={generateQR}>
        <input
          className="mt-10 px-4 py-2 rounded border border-blue-500 outline-none"
          onChange={(e) => setQrCodeUrl(e.target.value)}
          value={qrcodeUrl}
          placeholder="Type a URL to generate..."
        />
        <button
          className="bg-blue-600 px-4 py-2 text-white rounded ml-1 disabled:bg-blue-50 disabled:text-slate-300"
          type="submit"
          disabled={qrToFetch ? true : false}
        >
          Generate
        </button>
      </form>
      {qrToFetch && (
        <>
          <img
            className="mt-12 mb-12 border border-black p-2 rounded"
            src={`http://api.qrserver.com/v1/create-qr-code/?data=${qrToFetch}!&size=250x250`}
          />
          <button
            onClick={handleReset}
            className="bg-blue-600 px-4 py-2 text-white rounded ml-1"
          >
            Generate again
          </button>
        </>
      )}
    </div>
  );
}

export default QrCodeComponent;
