import { useState } from "react";

interface VotePageState{
}

function VotePage() {
  var [pageState, setPageState] = useState<VotePageState>()
   
  return (<div className="votePage"></div>)
}

export default VotePage;
