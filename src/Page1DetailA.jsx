import {useLocation,useHistory} from "react-router-dom";

export const Page1DetailA=() =>{
  const {state} = useLocation();
  console.log(state);

  const history =useHistory();
//画面遷移としてのhistory
  const onClickBack =() => history.goBack();

  return (
    <div>
      <h1>Page1DetailA</h1>
      <button>戻る</button>
    </div>
  );
};