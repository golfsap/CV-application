import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const downloadPDF = () => {
  const element = document.querySelector(".page") as HTMLElement;
  if (!element) {
    console.error("Page element not found");
    return;
  }

  html2canvas(element, { scale: 4 }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "p",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save("resume.pdf");
  });
};

export default downloadPDF;
