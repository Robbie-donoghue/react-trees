import Button from "./components/Button";
import Counter from "./components/Counter";
import Monkey from "./components/Monke";
import TreeCard from "./components/TreeCard";
import { treeList } from "./components/treeList";

export default function App() {
  return (
    <div>
      <h1>Cool Trees!</h1>
      <div>
        <TreeCard
          treeName="Boabab"
          location="across Africa"
          imgLink="https://media.cntraveller.com/photos/611bf4e3628f4910ed102938/master/w_1600%2Cc_limit/gettyimages-1281090177.jpg"
        />
        <Button />
        <Counter />
        <h3> monkey hiding </h3>
        <Monkey></Monkey>
        <TreeCard
          treeName="Cherry Blossom"
          location="Global"
          imgLink="https://hips.hearstapps.com/hmg-prod/images/fuji-and-sakura-royalty-free-image-144483163-1562593125.jpg?crop=0.668xw:1.00xh;0,0&resize=2048:*"
        />
        <Button />
        <Counter />
        {treeList.map((tree) => (
          <TreeCard
            key={tree.id}
            treeName={tree.name}
            location={tree.location}
            imgLink={tree.img}
          />
        ))}
      </div>
    </div>
  );
}
