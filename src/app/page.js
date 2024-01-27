import Card from "@/component/Card";
import Form from "@/component/Form";

export default function Home() {
  return (
    <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
      <Card />
      <Form />
    </div>
  );
}
