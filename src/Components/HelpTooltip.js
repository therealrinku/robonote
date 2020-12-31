import { useState } from "react";
import { Tooltip } from "@material-ui/core";
import { IoMdInformationCircleOutline } from "react-icons/all";

const HelpTooltip = () => {
  const [showToolTip, setShowToolTip] = useState(false);
  return (
    <Tooltip
      open={showToolTip}
      onOpen={() => setShowToolTip(true)}
      onClose={() => setShowToolTip(false)}
      leaveTouchDelay={5000}
      title={
        <div style={{ fontSize: "18px" }}>
          Quick tips
          <p>1.Press on line below the last todo and press enter to save.</p>
          <p>2.Click on todo to mark toggle completed or uncompleted. </p>
          <p>3.Double click on todo to delete.</p>
        </div>
      }
      arrow
    >
      <button onClick={() => setShowToolTip((prev) => !prev)}>
        <IoMdInformationCircleOutline />
      </button>
    </Tooltip>
  );
};

export default HelpTooltip;
