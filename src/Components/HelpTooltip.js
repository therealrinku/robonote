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
          <p>1.Press enter to save</p>
          <p>2.enter /d at the end of todo to delete </p>
          <p>3.enter /c at the end of todo to toggle done status of todo</p>
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
