function Card({ item }) {
  return (
    <div
      className={`${item.className} transform transition hover:scale-105 cursor-pointer maw-w-xl`}
    >
      <div className="p-8">
        <div className="text-2xl font-bold">{item.title}</div>
        <div className="mt-10 font-semibold underline underline-offset-4">SHOP NOW +</div>
      </div>
      <img src={item.src} className="absolute left-[40%] top-5 h-40 w-56" />
    </div>
  );
}

export default Card;
