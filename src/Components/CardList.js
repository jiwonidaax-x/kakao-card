import { Card } from "./Card";
export const CardList=()=>{
    return (
    <div className="cardList">
        <Card Img={"https://t1.kakaocdn.net/friends/prod/main_tab/home/home_20201103134054_kr.jpg?type=thumb&opt=R329x247@2xa"} tag={"NEW"} title={"촉촉함을 원해요"} desc={"재채기는 콜록 콜록 눈,코,입 모두 간질 간질. 이게 다 건조함 때문이라구! 건조함을 해결하러 온 꿀꿀꿀귀탱 가습기들,구경해볼까요?"}/>
        <Card Img={"https://t1.kakaocdn.net/friends/prod/main_tab/home/home_20201106164745_kr.jpg?type=thumb&opt=R329x247@2xa"} tag={"Good"} title={"통통미 폭발 구름 폭신 필로우"} desc={"통통하고 말랑 말랑한 너희에게 내 하루 시작과 끝에서 힐링을 부탁해!"}/>
        <Card Img={"https://t1.kakaocdn.net/friends/prod/main_tab/home/home_20201111183631_kr.jpg?type=thumb&opt=R335x187@2xa"} tag={"Theme"} title={"올 겨울엔 프렌즈랑 메리 화이트 크리스마스!"} desc={"올해 크리스마스엔 눈이 올까요? 안오면 어때요. 이미 프렌즈들이 내 마음에 하얀 눈을 내려주고 있는걸!"}/>
    </div>
   );
}