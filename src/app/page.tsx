import Card from "./components/Card";
import CardContain from "./components/CardContainer";
import Cards from "./components/CardContain";
import Navbar from "./components/Navbar";


const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '/product',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 35,
    color: 'Black',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      
      <Cards>
        {products.map((product) => (
          <Card 
            key={product.id} 
            name={product.name} 
            href={product.href} 
            imageAlt={product.imageAlt} 
            imageUrl={product.imageSrc}
            price={product.price}
            color={product.color}/>
        ))}
      </Cards>
    </main>
  );
}
