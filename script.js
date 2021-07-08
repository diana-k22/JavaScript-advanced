


  class GoodsItem {
      constructor(title, price) {
          this.title = title;
          this.price = price;
      }

      render() {
          return `<div class="goods-item"><img src="http://unsplash.it/150/200?random&amp;gravity=center" alt=""></img><h3>${this.title}</h3><p>${this.price}</p></div>`
      }
  }

  class GoodsList {
      constructor() {
          this.goods = [];
      }

      fetchGoods() {
          this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
          ]
      }

      render() {
          let listHtml = '';
          this.goods.forEach(good => {
              const goodItem = new GoodsItem(good.title, good.price);
              listHtml += goodItem.render();
          });
          document.querySelector('.goods-list').innerHTML = listHtml;
          console.log(list)
      }

      getTotalSum() {
        //   let sum = 0;
        //   this.goods.forEach(el => {
        //       el.price += sum;
        //       console.log(sum)
        //   })
        let totalSum = this.goods.reduce((acc, item) => acc + item.price, 0);
        console.log(totalSum)
      }
  }

  const list = new GoodsList();
  list.fetchGoods();
  list.render();
  list.getTotalSum()

  class Basket extends GoodsList{
      constructor(...args) {
          super(...args)
      }

      clearAll() {}

      addItem() {}

      removeItem() {}
  }


  class BasketItem extends GoodsItem {
      constructor(...args) {
          super(...args);
          this.count = 0;
      }
  }