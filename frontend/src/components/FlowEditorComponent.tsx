interface FlowEditorComponentProps {
  onCreateNode: (message: string) => void;
}

const FlowEditorComponent: React.FC<FlowEditorComponentProps> = ({ onCreateNode }) => {

  const handleClick = () => {
    onCreateNode('Node created'); // Changed the message to something more appropriate
  };

  return (
    <div className="h-full bg-lime-300 flex justify-center items-center">
      <button 
        className="drop-shadow-xl bg-slate-300 hover:bg-slate-400 text-black py-2 px-4 rounded"
        onClick={handleClick}
      >
        Create Node
      </button>

      <button 
        className="drop-shadow-xl bg-slate-300 hover:bg-slate-400 text-black py-2 px-4 rounded"
        onClick={handleClick}
      >
        Save Flow
      </button>
    </div>
  );
};

export default FlowEditorComponent;
