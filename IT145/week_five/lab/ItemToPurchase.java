public class ItemToPurchase {
  //Private fields - itemName, itemPrice, and itemQuantity
  private String itemName;
  private int itemPrice, itemQuantity;

  /*Default Constructor
   itemName - Initialized to "none"
   itemPrice - Initialized to 0
   itemQuantity - Initialized ito 0
   */
  ItemToPurchase() {
    itemName = "none";
    itemPrice = 0;
    itemQuantity = 0;
  }

  //public member methods (mutators & accessors)

  //setName() & getName()
  //setPrice() & getPrice()
  //setQuantity() & getQuantity()
  public String getName() {
    return itemName;
  }

  public int getPrice() {
    return itemPrice;
  }

  public int getQuantity() {
    return itemQuantity;
  }

  public void setName(String itemName) {
    this.itemName = itemName;
  }

  public void setPrice(int itemPrice) {
    this.itemPrice = itemPrice;
  }

  public void setQuantity(int itemQuantity) {
    this.itemQuantity = itemQuantity;
  }

  //print item to purchase

  public void printItemPurchase() {
    System.out.println(
      itemName +
      " " +
      itemQuantity +
      " @ $" +
      itemPrice +
      " = " +
      (itemPrice * itemQuantity)
    );
  }
}
