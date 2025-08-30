import MyComponent from './components/myComponent/MyComponent';
import ChildComponent from './components/childComponent/ChildComponent';
import './style/App.css';
//使用import 來匯入所需要的檔案 

function App() {
  const text = 'hello world';
  const placeholder = 'key in your text!';
  const btnName = 'alert按鈕';
  const btnName2 = 'alert按鈕2';
  const click2 = (e)=> {
    console.log('我觸發了click2',e);
    alert("hello " + btnName2);
  }

  //使用list注意事項
  const listItem = [
    //console會出現 @react-refresh:228 Each child in a list should have a unique "key" prop.
    //這樣寫會出現錯誤, 所以 要給每個相同的componenet 不同的key值
    // <ChildComponent />,
    // <ChildComponent />,
    // <ChildComponent />
    <ChildComponent key='0' />,
    <ChildComponent key='1' />,
    <ChildComponent key='2' />
  ]

  const dataItems = [
    {content: 'appleItem content', id:'apple'},
    {content: 'bananaItem content', id:'banana'},
    {content: 'melonItem content', id:'melon'},
    {content: 'bananaItem content2', id:'banana2'},
  ]
  //配合三元運算子
  const isXYZ = false;
 
  return (
    <>
      {/* 
        因為js 中有class保留字,所以要使用在html上的css class 要改成className
        如果要在元素上使用style則 需要使用inline class方式 style={要使用的css效果obj}, 也就是key: value(string)形式 
      */}
      <h1 className='h1-tag'>{text.toUpperCase()}</h1>
      {/* 
        要傳入參數到 元素內則使用 {變數} 或者 {值} 即可, ex: <input type="text" placeholder={placeholder}/> 
      */}
      <input type="text" placeholder={placeholder}/>
      <div>
      {/* 
        元素事件內使用 {callback函式}, 可以直接內部寫 或者外部用餐參數寫好帶入即可, 若帶入外部的callback,不需要加上(), 因為要執行時才會觸發,不然會馬上觸發 
      */}
      <button onClick={()=>{ console.log('我觸發了click1'); alert("hello "+ btnName);}}>{btnName}</button>
        <button onClick={click2}>{btnName2}</button>
      </div>
      <div><MyComponent /></div>
      <br />
      {listItem}
      <br />
      <div className='list-map-loop'>
        { dataItems.map((data)=>{
          return <div key={data.id}>{data.content}</div>
        })}
      </div>
      <br />
      <div className='list-filter-map'>
        { dataItems.filter((data)=> data.id.startsWith('banana')).map((data)=>{
          return <div key={data.id}>{data.content}</div>
        })}
      </div>
      <br />
      {/* 
        因為css class通常會有多個, 若需要多的css class + 條件判斷時,會使用反引號 + ${判斷式? classA : classB }
        反引號``是JS語法 
      */}
      <div className={`xyz-zone ${ isXYZ ? 'isXYZ':'notXYZ'}`}>
        {isXYZ ? <h4>XYZ is True</h4> : <h4>XYZ is false</h4>}
        {/* 
          可以使用 && 來決定是否顯示元素
         */}
        {isXYZ && <h5>XYZ h5</h5>}
      </div>      
    </>
  )
}

export default App
//export named or default來命名
