import { useState } from "react";
import "./index.css";

const faqs = [
  {
    title: "Why do we yawn?",
    text: "Yawning is a reflex action that is triggered by several factors, including tiredness, boredom, and even seeing someone else yawn. While the exact reason for yawning is not fully understood, it's believed to help regulate brain temperature and increase oxygen intake.",
  },
  {
    title: "The tallest tree in the world",
    text: "The tallest tree in the world is a coast redwood (Sequoia sempervirens) named Hyperion, located in California's Redwood National Park. Hyperion stands at an impressive height of 379.7 feet (115.7 meters) as of the last measurement in 2017.",
  },
  {
    title: "How many languages are spoken worldwide?",
    text: "There are estimated to be around 7,000 languages spoken worldwide, although the exact number can vary depending on how languages and dialects are classified. Additionally, many languages are at risk of extinction due to factors such as globalization and cultural assimilation.",
  },
  {
    title: "The world's largest desert",
    text: "Contrary to popular belief, the largest desert in the world is not the Sahara but Antarctica. A desert is defined by its low precipitation levels, and Antarctica fits this definition, receiving very little precipitation each year. The Sahara, while vast, is the largest hot desert.",
  },
  {
    title: "Why do cats purr?",
    text: "Cats purr for various reasons, including to communicate contentment, to soothe themselves in stressful situations, and even to promote healing. The exact mechanism behind purring is not fully understood, but it's believed to involve the cat's nervous system.",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  const [lastClicked, setLastClicked] = useState(null);

  function handleOpen(i) {
    if (i === curOpen && lastClicked === i) {
      setCurOpen(null);
    } else {
      setCurOpen(i);
      setLastClicked(i);
    }
  }

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          title={el.title}
          num={i}
          key={el.title}
          curOpen={curOpen}
          onOpen={handleOpen}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
