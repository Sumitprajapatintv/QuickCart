let productData=[
  {
    // "_id" : ObjectId("66827f0dc1360b469d51cd76"),
    "productName" : "Addidas Original",
    "price" : {
        "value" : "499",
        "currency" : "₹"
    },
    "description" : "This is the Clasic Tshirt",
    "ratings" : {
        "stars" : 4,
        "reviewsCount" : 1
    },
    "thumnilImage":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt.png",
    "images" : [ 
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt.png", 
        "https://m.media-amazon.com/images/I/61nnXoJUXTL._SL1500_.jpg", 
        "https://m.media-amazon.com/images/I/818PUwXwuRL._SL1500_.jpg"
    ],
    "category" : "Clothes/Shoes",
    "seller" : null,
    "numOfReviews" : 1,
    // "user" : ObjectId("667130061d1dc368da645274"),
    "isDeleted" : false,
    // "createdAt" : ISODate("2024-07-01T10:02:31.904Z"),
    "reviews" : [],
    "__v" : 0
  }
]

export function ProductList(){
  return <div className="productList">
    {
      productData.map((el)=><ProductItem image={el?.images[0]} price={el?.price?.value} description={el?.description} name={el?.productName} key={el?.price?.value}/>)
    }
    
  </div>
}

function ProductItem({image,price,description,name})
{
  // return <div>ProductList</div>
  return (
        <div className="productItem">
          <img src={image} alt=""/>
          <h1>{name}</h1>
          <p>{price}</p>
          <p>{description}</p>    
        </div>)
} 