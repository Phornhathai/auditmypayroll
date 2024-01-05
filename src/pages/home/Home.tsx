import { ChangeEvent, useState } from "react";
import { PDFtobase64, base64toPDF } from "../../services/commonfunctions";
import "./home.scss";

const Home = () => {
  const [iframeSrcs, setIframeSrcs] = useState<string[]>([]);

  const handlePDFtobase64 = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const file = e.target.files?.[0];
      if (file) {
        const base64String = await PDFtobase64(file);
        console.log(base64String);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleBase64toPDF = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value;
    const base64Strings = inputText
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    base64toPDF(base64Strings).then((srcs: string[]) => {
      setIframeSrcs(srcs);
    });
  };

  return (
    <form className="home">
      <div className="home">
        <div className="uploadPDFfile">
          <input
            type="file"
            name="pdfUpload"
            id="pdfUpload"
            onChange={handlePDFtobase64}
          />
        </div>
        <div className="fileBase64">
          <textarea
            placeholder="Enter base64 strings (one per line)"
            cols={30}
            rows={40}
            onChange={handleBase64toPDF}
          />
          {iframeSrcs.map((src, index) => (
            <iframe
              key={index}
              src={src}
              title={`pdf-viewer-${index}`}
            ></iframe>
          ))}
        </div>
      </div>
    </form>
  );
};

export default Home;
