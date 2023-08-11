import { useEffect, useState } from "react";
import { AllWorks, AllWorksRes } from "../../api/GalleryApi";
import { setAuthorizationHeader } from "../../commponents/Base/BaseFun";
import InfoBoard from "../../commponents/Info/InfoBoard";

interface Data {
  [key: string]: string | number;
}

function WorksBoard() {
  const [works, setWorks] = useState<Data[]>([]);
  useEffect(() => {
    const fetchAllworks = async () => {
      try {
        setAuthorizationHeader();
        const response: AllWorksRes = await AllWorks();
        console.log("전체 작품 목록: ", response);
        setWorks(response.DrawingList);
      } catch (error) {
        console.error("전체 작품 목록을 가져오는 데 실패했습니다.", error);
        window.alert(error);
      }
    };
    void fetchAllworks();
  }, []);

  const keys = ["id", "제목", "아티스트", "설명"];
  const widths = ["3%", "25%", "20%", "45%", "7%"];
  const keyToExclude = ["drawingPath", "locationX", "locationY"];

  return (
    <>
      <InfoBoard
        title="Exhibition Title"
        data={works}
        dataKeys={keys}
        columnWidths={widths}
        keyToExclude={keyToExclude}
        exhibition={true}
      />
    </>
  );
}
export default WorksBoard;
