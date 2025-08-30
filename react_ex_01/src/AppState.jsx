import { useState } from "react";

function ChildComponent({clicks}) {
  return <div>{clicks}</div>
}

function CustomComponent() {
  // state 用法
  // [state內容,更改state內容的函式], 陣列解構賦值順序很重要(名字不重要)
  // react 查覺到state改變=>才會更新HTML
  // 每個state是獨立的,不會影響別人的
  // 也可以將state傳給ChildComponent使用
  const [clicks,  setClicks] = useState(0);
  const handleClick = ()=>{
    setClicks(clicks+1);
    //不可以寫 click++,這樣頂多是內部變數改變,但外部不知道
    console.log(clicks);
  }
  return (
    <>
      <button onClick={handleClick} type="button">
        點擊次數:{clicks}
      </button>
      <ChildComponent clicks={clicks} />
    </>    
  )
}
function App() {
  return (
    <>
      <CustomComponent/>      
      <CustomComponent/>
      <CustomComponent/>
    </>
  )  
}

export default App
//export named or default來命名
