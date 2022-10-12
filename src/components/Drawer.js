function Drawer({ onClose, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img
            width={25}
            height={25}
            src="/img/close-cart.png"
            className="cu-p"
            onClick={onClose}
          />
        </h2>

        <div className="cartItems">
          {items.map((obj) => (
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: `url(${obj.image})` }}
                className="cartItem_img"
              ></div>
              <div className="mr-20">
                <p className="mb-5">{obj.title}</p>
                <b>${obj.price} руб.</b>
              </div>
              <img className="removeBtn" src="/img/remove.svg" alt="remove" />
            </div>
          ))}
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого: </span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%: </span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="/img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
