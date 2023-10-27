import AnimatedButton from '../AnimatedButton';

const DownloadCVButton = () => {
  const onDownload = () => {
    fetch("/CV-Gudiño_Ochoa_Nabila.docx").then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "CV Gudiño Ochoa Nabila.docx";
        a.click();
      });
    });
  };

  return (
    <AnimatedButton str='Download my CV' action={()=>onDownload()} page="" isLink={false} />
  )
}

export default DownloadCVButton
