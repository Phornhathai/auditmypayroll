import { ChangeEvent, useState } from "react";
import "./home.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // สร้าง state เพื่อเก็บข้อมูลผู้ใช้ที่ login
  const [user, setUser] = useState<any>(null);
  const [iframeSrcs, setIframeSrcs] = useState<string[]>([]);

  const navigate = useNavigate();

  const handlePDFtobase64 = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value;
    const base64Strings = inputText
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    base64Strings(base64Strings).then((srcs: string[]) => {
      setIframeSrcs(base64Strings);
    });
  };

  return;
  <div className="home">
    <div className="box1">
      <input
        type="file"
        name="pdfUPload"
        id="pdfUpload"
        onChange={handlePDFtobase64}
      />
    </div>
  </div>;
};

export default Home;
