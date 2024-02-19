import Card from "./components/Card";
// import { Nav } from "./components/Nav";
// import { ShoeDetail } from "./components/ShoeDetail";
import { SHOES_LIST } from './constant';

export function App() {
  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      {/* <Nav />
      <ShoeDetail /> */}
      <Card item={SHOES_LIST[0]} />
    </div>
  );
}
