import { profile } from "../data";
import Content from "./Content";

export default function TopContent() {
  return (
    <>
      <section id="core-concepts">
        <ul>
          {profile.map((item) => (
            <Content {...item} key={item.title} />
          ))}
        </ul>
      </section>
    </>
  );
}
