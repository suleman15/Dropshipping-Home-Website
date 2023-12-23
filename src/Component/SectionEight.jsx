import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./ruf.scss";
import OnView from "./OnView";
import {
  BsGraphUpArrow,
  BsQuestion,
  BsQuestionCircle,
  BsQuestionCircleFill,
  BsQuestionDiamondFill,
} from "react-icons/bs";
import {
  BiDownArrow,
  BiSolidDownArrow,
  BiSolidUpArrow,
  BiSolidUpArrowSquare,
  BiUpArrow,
} from "react-icons/bi";
import UpwardAnimate from "./UpwardAnimate";

const AccordionContext = React.createContext({});
const useAccordion = () => React.useContext(AccordionContext);

function Accordion({ children, multiple, defaultIndex }) {
  const [activeIndex, setActiveIndex] = React.useState(
    multiple ? [defaultIndex] : defaultIndex
  );

  function onChangeIndex(index) {
    setActiveIndex((currentActiveIndex) => {
      if (!multiple) {
        return index === activeIndex ? -1 : index;
      }

      if (currentActiveIndex.includes(index)) {
        return currentActiveIndex.filter((i) => i !== index);
      }

      return currentActiveIndex.concat(index);
    });
  }

  return React.Children.map(children, (child, index) => {
    const isActive =
      multiple && Array.isArray(activeIndex)
        ? activeIndex.includes(index)
        : activeIndex === index;

    return (
      <AccordionContext.Provider value={{ isActive, index, onChangeIndex }}>
        {child}
      </AccordionContext.Provider>
    );
  });
}

function AccordionItem({ children }) {
  return <div className="w-[100%] AccordionItem">{children}</div>;
}

function AccordionHeader({ children }) {
  const { isActive, index, onChangeIndex } = useAccordion();

  return (
    <motion.div
      className={` AccordionHeader ${isActive ? "active" : ""}`}
      onClick={() => onChangeIndex(index)}
    >
      <div>{children}</div>
      {isActive ? <BiUpArrow /> : <BiDownArrow />}
    </motion.div>
  );
}

function AccordionPanel({ children }) {
  const { isActive } = useAccordion();

  return (
    <AnimatePresence initial={false}>
      {isActive && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ type: "spring", duration: 0.4, bounce: 0 }}
        >
          <div className="AccordionPanel">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const data = [
  {
    header: `Non consectetur a erat nam at lectus urna duis?`,
    content:
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
  },
  {
    header: "Feugiat scelerisque varius morbi enim nunc?",
    content:
      "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
  },
  {
    header: "Dolor sit amet consectetur adipiscing elit?",
    content:
      "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis",
  },
  {
    header: "Tempus quam pellentesque nec nam aliquam sem et tortor consequat?",
    content:
      "Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.",
  },
  {
    header:
      "Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor?",
    content:
      "Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.",
  },
];

export default () => {
  return (
    <div className="bg-[#F3F5FA]">
      <OnView css="flex flex-col justify-center items-center  text-[#37517E]  p-5 gap-3 ">
        <div className="flex justify-center flex-col items-center p-5 gap-5 text-center">
          <motion.div
            variants={{
              hidden: { y: 75, opacity: 0, scale: 0.7 },
              visible: { y: 0, opacity: 1, scale: 1 },
            }}
            initial={"hidden"}
            animate={"visible"}
            transition={{ duration: 1 }}
            className="text-[28px] uppercase  font-bold   py-3  relative after:content-[''] after:absolute after:w-[100px]  after:h-[3px] after:bg-[#33333333] after:left-[calc(50%-50px)] after:bottom-[-3px] after:z-8 before:content-[''] before:absolute before:w-[50px]  before:h-[3px] before:bg-[dodgerblue] before:left-[calc(50%-25px)] before:bottom-[-3px] before:z-10"
          >
            FREQUENTLY ASKED QUESTIONS
          </motion.div>
          <motion.div
            variants={{
              hidden: { y: 75, opacity: 0, scale: 0.7 },
              visible: { y: 0, opacity: 1, scale: 1 },
            }}
            initial={"hidden"}
            animate={"visible"}
            transition={{ duration: 1 }}
            className="text-[#444444]"
          >
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </motion.div>
        </div>
        <Accordion>
          {data.map((_, i) => (
            <OnView css={"w-[90%]"}>
              <AccordionItem key={i}>
                <AccordionHeader>
                  <BsQuestionCircle />
                  {_.header}
                </AccordionHeader>
                <AccordionPanel>{_.content}</AccordionPanel>
              </AccordionItem>
            </OnView>
          ))}
        </Accordion>
      </OnView>
    </div>
  );
};
