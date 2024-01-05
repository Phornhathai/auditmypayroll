export function PDFtobase64(file: File): Promise<string | null> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      const result = reader.result as string;

      if (result) {
        //เอาข้อมูล array ตัวสุดท้าย
        const base64String = result.split(",").pop;
      }
    };
  });
}
