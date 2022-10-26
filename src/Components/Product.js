export const Product = (props) => {
  //상품 데이터 패치
  if (props.product === true) {
    //list template
    if (props.type === "list") {
      return (
        <ul className="p-8">
          <li className="border-t py-4">
            <img
              className="w-28 text-left inline-block mr-o"
              alt="item"
              src="https://t1.daumcdn.net/friends/prod/product/20201020152815054_8809721505908_AW_00.jpg?type=thumb&opt=R103x103@2xa"
            />
            <div className=" float-right py-2 mr-7">
              <p className="text-gray-500 font-semibold">
                구름폭신필로우_라이언
              </p>
              <p className="text-left font-bold text-lg">39,000원</p>
              <button>
                <img
                  src="https://t1.kakaocdn.net/friends/new_store/2.0/common/basket-pink-3.png"
                  width="37px"
                />
              </button>
            </div>
          </li>
        </ul>
      );
    } else if (props.type === "card") {
      return (
        <ul>
          <li className="item card">
            <img
              alt="item"
              src="https://t1.daumcdn.net/friends/prod/product/20201020152815054_8809721505908_AW_00.jpg?type=thumb&opt=R103x103@2xa"
            />
            <div className="content">
              <div>
                <p>구름폭신필로우_라이언</p>
                <p className="price">39,000원</p>
              </div>
            </div>
          </li>
        </ul>
      );
    }
  }
};
