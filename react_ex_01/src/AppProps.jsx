function MyComponentWithProps(props) {
  console.log('使用props物件',props);
  props.c();
  return <>
    <div>
      <span>{props.a}</span>
      <span>{props.b}</span>      
    </div>    
  </>
}

function MyComponentWithProps2({a,b,c,d='王圓圓'}) {
  console.log("使用物件的解構賦值,參數順序不重要,但參數名稱很重要")
  console.log("a,b,c,d",`${a},${b},${c},${d}`)
  c();
  return <>
    <div>
      <span>{a}</span>
      <span>{b}</span>      
      <span>{d}</span>       
    </div>    
  </>
}

function SecondComponent() {
  return <h2>Hello, SecondCompnent</h2>
}

function ThirdComponent() {
  return <h3>Hello, ThirdComponent</h3>
}

function MyComponentWithOtherComponent({children,third}) {
  return <>
    <div>{children}</div>
    <div>{third}</div>  
  </>
}

function App() {
  return <>
      {/* 使用props 參數 */}
      <MyComponentWithProps a="Hello World " b="帥哥"
        c={()=>{console.log(123);}} />
      <br />
      {/* 使用物件的解構賦值 */}
      <MyComponentWithProps2 a="Hello World " b="美女"
        c={()=>{console.log(456);}} />
      <br />
      {/* 使用物件的解構賦值 */}
      <MyComponentWithOtherComponent >
        <SecondComponent />
      </MyComponentWithOtherComponent>
      <br />
      {/* 使用物件的解構賦值 */}
      <MyComponentWithOtherComponent 
        children={<SecondComponent />}
        third={<ThirdComponent />}
      >
      </MyComponentWithOtherComponent>

    </>
  
}

export default App
//export named or default來命名
