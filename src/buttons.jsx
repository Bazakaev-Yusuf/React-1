import reset from "./companents/images/reset/reset.png"
function buttons(props){
   function plus(){
      props.setNum(props.num + 3);
   };
   function minus(){
      if(props.num > 1){
         props.setNum(props.num - 2);
      }else if(props.num == 1){
         props.setNum(props.num - 1);
      }
   };
   function res(){
      props.setNum(0);
   }
   return(
      <div className="buttons">
         <button onClick={plus} className="plus">+</button>
         <button onClick={res} className="reset"><img src={reset} alt=""/></button>
         <button onClick={minus} className="minus">-</button>
      </div>
   )
}
export default buttons;