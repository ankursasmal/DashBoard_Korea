import DashBoard from "./_components/DashBoard"
import MainPart from "./_components/MainPart"
import Navber from "./_components/Navber"


function page() {
  return (
    <div className="flex flex-col relative">
      <Navber />
      <div className="flex    ">
        <div className="hidden md:block fixed top-[76px] left-0">
          <DashBoard />
        </div>
        <div className="px-[1.4rem]  py-[.8rem] Main_feature fixed top-[76px] left-0 md:left-[240px] " style={{ backgroundColor: ' #EEF4FF' }}>
          <MainPart />
        </div>
      </div>

    </div>
  )
}

export default page
