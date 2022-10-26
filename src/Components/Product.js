export const Product = (props) => {
  if (props.product === true) {
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
              <p className="text-gray-500 font-500">구름폭신필로우_라이언</p>
              <p className="text-left font-bold text-lg">39,000원</p>
              <button>
                <img
                  alt="btn"
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
        <ul className="p-8">
          <li className="w-32 inline-block ml-7">
            <img
              width="140px"
              alt="item"
              src="https://t1.daumcdn.net/friends/prod/product/20201020152815054_8809721505908_AW_00.jpg?type=thumb&opt=R103x103@2xa"
            />
            <div className="content">
              <p className="mt-3 text-gray-500 font-500 inline-block">
                구름폭신필로우_라이언
              </p>
              <p className="text-left font-bold text-lg inline mr-3">
                39,000원
              </p>
              <button>
                <img
                  alt="btn"
                  src="https://t1.kakaocdn.net/friends/new_store/2.0/common/basket-pink-3.png"
                  width="37px"
                />
              </button>
            </div>
          </li>
        </ul>
      );
    }
  }
};
